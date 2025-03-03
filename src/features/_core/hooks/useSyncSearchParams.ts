import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SearchParams from "@/config/search-params";
import type { AcceptedFilterValues } from "@/config/types";

export default function useSyncSearchParams() {
  const [, setSearchParams] = useSearchParams(window.location.search);

  const handleSetQueryParams = useCallback(
    <T extends Record<string, AcceptedFilterValues | AcceptedFilterValues[]>>(
      filters: Partial<T>,
    ) => {
      const newParams = SearchParams.toSearchParams(filters);
      setSearchParams(newParams);
    },
    [setSearchParams],
  );

  return handleSetQueryParams;
}
