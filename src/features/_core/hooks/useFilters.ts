import { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import { create } from "zustand";
import useSyncSearchParams from "@/features/_core/hooks/useSyncSearchParams";
import SearchParams from "@/config/search-params";
import type { AcceptedFilterValues } from "@/config/types";

type FilterValues = Record<string, AcceptedFilterValues | AcceptedFilterValues[]>;

type Props<T extends FilterValues> = {
  defaultValues?: T;
};

export default function useFilters<T extends FilterValues>(props?: Props<T>) {
  const store = createStore<T>(props?.defaultValues ?? {});

  const onFilter = store((s) => s.onFilter);
  const filters = store((s) => s.filters);
  const onSync = useSyncSearchParams();

  const handleFilter = useCallback(
    (filters: Partial<T>) => {
      const newFilters = onFilter(filters);
      onSync(newFilters);
    },
    [onFilter, onSync],
  );

  const filterAsString = useMemo(() => SearchParams.toString(filters), [filters]);

  return [filters, handleFilter, filterAsString] as const;
}

export function useSyncFilters<T extends FilterValues>(props?: Props<T>) {
  const store = createStore<T>(props?.defaultValues ?? {});

  const syncFilters = store((s) => s.syncFilters);

  useEffect(() => {
    const handlePopState = () => {
      syncFilters();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [syncFilters]);

  useLayoutEffect(() => {
    syncFilters();
  }, [syncFilters]);
}

type Store<T extends FilterValues> = {
  filters: Partial<T>;
  onFilter: (filters: Partial<T>) => Partial<T>;
  syncFilters: () => void;
};

// Factory para crear la store con un tipo específico
const createStore = <T extends FilterValues>(defaultFilters: Partial<T>) => {
  return create<Store<T>>((set, get) => ({
    filters: defaultFilters,
    onFilter: (filters) => {
      const newFilters = { ...get().filters, ...filters };
      set({ filters: newFilters });
      return newFilters;
    },
    syncFilters: () => {
      set({ filters: defaultFilters });
    },
  }));
};
