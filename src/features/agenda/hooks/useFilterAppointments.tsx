import { useCallback } from "react";
import { create } from "zustand";
import useSyncSearchParams from "@/features/_core/hooks/useSyncSearchParams";
import SearchParams from "@/config/search-params";
import Now from "@/config/now";
import type { GetAppointmentsFilters } from "../services/agenda.service";

export default function useFilterAppointments() {
  const onSync = useSyncSearchParams();
  const onFilter = useFilterAppointmentsStore((s) => s.onFilter);
  const appointmentsFilters = useFilterAppointmentsStore((s) => s.filters);

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
  const syncFilters = useFilterAppointmentsStore((s) => s.syncAppointmentFilters);

  window.addEventListener("popstate", () => {
    syncFilters();
  });
}

type Store = {
  filters: Partial<GetAppointmentsFilters>;
  onFilter(props: Store["filters"]): Store["filters"];
  syncAppointmentFilters(): void;
};

const defaultFilters = () =>
  SearchParams.getAsObject({ date: new Now().format(new Date(), "yyyy-mm-dd") });

const useFilterAppointmentsStore = create<Store>((set, get) => ({
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
