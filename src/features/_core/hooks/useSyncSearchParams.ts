import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SearchParams from "@/config/pluggins/search-params";
import type { SearchParamsAcceptedValue } from "@/config/types";

export default function useSyncSearchParams() {
  const [, setSearchParams] = useSearchParams(window.location.search);

  const handleSetQueryParams = useCallback(
    <T extends Record<string, SearchParamsAcceptedValue | SearchParamsAcceptedValue[]>>(
      filters: Partial<T>,
    ) => {
      const newParams = SearchParams.toSearchParams(filters);
      setSearchParams(newParams);
    },
    [setSearchParams],
  );

  return handleSetQueryParams;
}
