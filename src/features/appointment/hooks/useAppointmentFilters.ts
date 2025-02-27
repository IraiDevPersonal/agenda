import { useCallback, useEffect, useLayoutEffect } from "react";
import { create } from "zustand";
import useSyncSearchParams from "@/features/_core/hooks/useSyncSearchParams";
import Now from "@/config/now";
import SearchParams from "@/config/search-params";
import type { AppointmentsFilters } from "../domain/types";

export default function useAppointmentFilters() {
  const onSync = useSyncSearchParams();
  const onFilter = useStore((s) => s.onFilter);
  const appointmentsFilters = useStore((s) => s.filters);

  const handleFilterAppointments = useCallback(
    (filters: Store["filters"]) => {
      const newFilters = onFilter(filters);
      onSync(newFilters);
    },
    [onFilter, onSync],
  );

  return {
    appointmentsFilters,
    onFilterAppointments: handleFilterAppointments,
  };
}

export function useSyncAppointmentFilters() {
  const syncFilters = useStore((s) => s.syncAppointmentFilters);

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
    // TODO: reset de filtros al cambiar de paginas
    syncFilters();
  }, [syncFilters]);
}

type Store = {
  filters: Partial<AppointmentsFilters>;
  onFilter(props: Store["filters"]): Store["filters"];
  syncAppointmentFilters(): void;
};

const defaultFilters = () =>
  SearchParams.getAsObject({ date: new Now().format(new Date(), "yyyy-mm-dd") });

const useStore = create<Store>((set, get) => ({
  filters: defaultFilters(),
  onFilter: (filters) => {
    const newFilters = { ...get().filters, ...filters };
    set({ filters: newFilters });
    return newFilters;
  },
  syncAppointmentFilters: () => {
    set({
      filters: defaultFilters(),
    });
  },
}));
