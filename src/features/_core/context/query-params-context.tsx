import { createContext, use, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import QueryString, {
  QueryStringToObjectOptions,
  QueryStringToStringOptions,
} from "@/config/pluggins/query-string";

type ContextProps<T extends object> = {
  getValue: (key: keyof T, fallbackValue: T[keyof T]) => T[keyof T];
  setQuery: (object: Partial<T>) => void;
  queryAsObject: Partial<T>;
  queryAsString: string;
};

type Props<T extends object> = {
  defaultValues?: Partial<T> | ((objectParams: Partial<T>) => Partial<T>);
  toStringOptions?: QueryStringToStringOptions;
  toObjectOptions?: QueryStringToObjectOptions;
  children: React.ReactNode;
};

const Context = createContext<ContextProps<any> | undefined>(undefined);

export default function QueryParamProvider<T extends object>({
  toStringOptions,
  toObjectOptions,
  defaultValues,
  children,
}: Props<T>) {
  const [query, handleSetQuery] = useSearchParams();
  const initialValues = useRef(defaultValues);
  const initialOptions = useRef({
    toStringOptions: toStringOptions ?? QueryString.toStringOptions,
    toObjectOptions: toObjectOptions ?? QueryString.toObjectOptions,
  });

  useEffect(() => {
    if (!initialValues.current) return;

    const parsed = QueryString.toObject(
      window.location.search,
      initialOptions.current.toObjectOptions,
    );
    const newSearchParams = QueryString.toString(
      { ...initialValues.current, ...parsed },
      initialOptions.current.toStringOptions,
    );

    handleSetQuery(newSearchParams);
    initialValues.current = undefined;
  }, [handleSetQuery]);

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
        handleSetQuery((prev) => {
          const current = QueryString.toObject(
            prev,
            initialOptions.current.toObjectOptions,
          );
          const merged: Record<string, any> = { ...current, ...object };

          console.log({ merged, current, object });

          Object.entries(merged).forEach(([key, value]) => {
            if (value === null || value === undefined) {
              delete merged[key];
            }
          });

          return QueryString.toString(merged, initialOptions.current.toStringOptions);
        });
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

export function useQueryParams<T extends object>() {
  const context = use(Context);
  if (!context) {
    throw new Error("El context solo puede ser usado dentro de QueryParamProvider");
  }
  return context as ContextProps<T>;
}
