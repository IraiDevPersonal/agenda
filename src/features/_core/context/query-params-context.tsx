import { createContext, use, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import QueryString, {
  QueryStringToObjectOptions,
  QueryStringToStringOptions,
} from "@/config/pluggins/query-string";

type ValidObject = Record<string, any>;

type ContextProps<T extends ValidObject> = {
  getValue: (key: keyof T, fallbackValue: T[keyof T]) => T[keyof T];
  setQuery: (object: Partial<T>) => void;
  queryAsObject: Partial<T>;
  queryAsString: string;
};

type Props<T extends ValidObject> = {
  defaultValues?: Partial<T> | ((objectParams: Partial<T>) => Partial<T>);
  toStringOptions?: QueryStringToStringOptions;
  toObjectOptions?: QueryStringToObjectOptions;
  children: React.ReactNode;
};

const Context = createContext<ContextProps<any> | undefined>(undefined);

export default function QueryParamProvider<T extends ValidObject>({
  toStringOptions,
  toObjectOptions,
  defaultValues,
  children,
}: Props<T>) {
  const initialValues = useRef(defaultValues);
  const initialOptions = useRef({
    toStringOptions: toStringOptions ?? QueryString.toStringOptions,
    toObjectOptions: toObjectOptions ?? QueryString.toObjectOptions,
  });
  const [query, handleSetQuery] = useSearchParams();

  useEffect(() => {
    if (!initialValues.current) return;

    const parsed = QueryString.toObject(
      window.location.search,
      initialOptions.current.toObjectOptions,
    );
    let newQuery = QueryString.toString(
      { ...initialValues.current, ...parsed },
      initialOptions.current.toStringOptions,
    );

    newQuery = newQuery ? `?${newQuery}` : "";

    // TODO: para evitar que en ese primer renderizado con los defaulValues se almacene en el historial
    window.history.replaceState(null, "", newQuery);
    initialValues.current = undefined;
  }, []);

  const queryAsObject = useMemo(() => {
    const parsedQuery = QueryString.toObject(
      query,
      initialOptions.current.toObjectOptions,
    );
    return { ...initialValues.current, ...parsedQuery } as Partial<T>;
  }, [query]);

  const value: ContextProps<T> = useMemo(
    () => ({
      getValue: (key, fallbackValue) => {
        return queryAsObject[key] ?? fallbackValue;
      },
      setQuery: (object: Partial<T>) => {
        const current = QueryString.toObject(
          window.location.search,
          initialOptions.current.toObjectOptions,
        );
        const merged = { ...current, ...object };

        Object.entries(merged).forEach(([key, value]) => {
          if (value === null || value === undefined) {
            delete merged[key];
          }
        });

        const newQuery = QueryString.toString(
          merged,
          initialOptions.current.toStringOptions,
        );

        handleSetQuery(newQuery);
      },
      queryAsString: QueryString.toString(
        { ...initialValues.current, ...queryAsObject },
        initialOptions.current.toStringOptions,
      ),
      queryAsObject,
    }),
    [handleSetQuery, queryAsObject],
  );

  return <Context value={value}>{children}</Context>;
}

export function useQueryParams<T extends ValidObject>() {
  const context = use(Context);
  if (!context) {
    throw new Error("El context solo puede ser usado dentro de QueryParamProvider");
  }
  return context as ContextProps<T>;
}
