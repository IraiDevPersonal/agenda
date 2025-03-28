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
  toStringOptions?: QueryStringToStringOptions;
  toObjectOptions?: QueryStringToObjectOptions;
  defaultValues?: Partial<T>;
  children: React.ReactNode;
  omit?: (keyof T)[];
};

const Context = createContext<ContextProps<any> | undefined>(undefined);

export default function QueryParamProvider<T extends ValidObject>({
  toStringOptions,
  toObjectOptions,
  defaultValues,
  children,
  omit,
}: Props<T>) {
  const [query, handleSetQuery] = useSearchParams();
  const initialOptions = useRef({
    toStringOptions: toStringOptions ?? QueryString.toStringOptions,
    toObjectOptions: toObjectOptions ?? QueryString.toObjectOptions,
  });
  const initialValues = useRef(defaultValues);
  const omitedParams = useRef(omit ?? []);

  // FIXME: solucionar problema con historial de navegacion

  useEffect(() => {
    if (!initialValues.current) return;
    console.log("render en context");

    const parsed = QueryString.toObject(
      window.location.search,
      initialOptions.current.toObjectOptions,
    );
    let newQuery = QueryString.toString(
      QueryString.withOmitParams(omitedParams.current, {
        ...initialValues.current,
        ...parsed,
      }),
      initialOptions.current.toStringOptions,
    );

    newQuery = newQuery ? `?${newQuery}` : "";

    // TODO: para evitar que en ese primer renderizado con los defaulValues se almacene en el historial
    window.history.replaceState(null, "", newQuery);
    initialValues.current = undefined;
  }, []);

  const queryAsObject = useMemo(() => {
    const parsedQuery = QueryString.toObject<Partial<T>>(
      query,
      initialOptions.current.toObjectOptions,
    );

    return {
      ...initialValues.current,
      ...QueryString.withOmitParams(omitedParams.current, parsedQuery),
    };
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
        queryAsObject,
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
