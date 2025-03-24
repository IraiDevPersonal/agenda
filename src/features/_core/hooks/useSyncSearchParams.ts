import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import QueryString from "@/config/pluggins/query-string";
import type { SearchParamsAcceptedValue } from "@/config/types";

export default function useSyncSearchParams() {
  const [, setSearchParams] = useSearchParams(window.location.search);

  const handleSetQueryParams = useCallback(
    <T extends Record<string, SearchParamsAcceptedValue | SearchParamsAcceptedValue[]>>(
      filters: Partial<T>,
    ) => {
      const newParams = QueryString.toUrlSearchParams(filters);
      setSearchParams(newParams);
    },
    [setSearchParams],
  );

  return handleSetQueryParams;
}
