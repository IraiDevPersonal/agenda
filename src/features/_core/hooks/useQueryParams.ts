import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import QueryString, { QueryStringToObjectOptions } from "@/config/pluggins/query-string";

type AcceptedValues = number | string | boolean | undefined | null;
type Props<T extends Record<string, AcceptedValues | AcceptedValues[]>> = {
  options?: QueryStringToObjectOptions;
  defaultValues?: Partial<T>;
};

export default function useQueryParams<
  T extends Record<string, AcceptedValues | AcceptedValues[]>,
>(props?: Props<T>) {
  const [query, setQuery] = useSearchParams(
    (() => {
      const currentQuery = createSearchParams(props?.defaultValues ?? {});
      return currentQuery;
    })(),
  );

  const queryToOject = useMemo(() => {
    return QueryString.toObject(query, props?.options) as T;
  }, [query, props?.options]);

  const setQueryParams = useCallback(
    (obj: Partial<T>, refetch?: boolean) => {
      const currentQuery = createSearchParams(obj, refetch);
      setQuery(currentQuery);
    },
    [setQuery],
  );

  return {
    query,
    queryToOject,
    setQueryParams,
  };
}

function createSearchParams<T extends object>(obj: T, refetch?: boolean) {
  const search = new URLSearchParams(window.location.search);
  const refetchCount = Number(search.get("r") ?? "0");

  for (const [key, value] of Object.entries({
    ...obj,
    ...(refetch ? { r: refetchCount + 1 } : {}),
  })) {
    if (value) search.set(key, value.toString());
    else search.delete(key);
  }

  return search;
}
