import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SearchParams from "@/config/search-params";

type AcceptedValues = number | string | boolean | undefined | null;

export default function useSyncSearchParams() {
  const [, setSearchParams] = useSearchParams(window.location.search);

  const handleSetQueryParams = useCallback(
    <T extends Record<string, AcceptedValues | AcceptedValues[]>>(
      filters: Partial<T>,
    ) => {
      const newParams = SearchParams.toSearchParams(filters);
      setSearchParams(newParams);
    },
    [setSearchParams],
  );

  return handleSetQueryParams;
}
