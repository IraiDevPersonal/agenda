import type { Option } from "@/config";
import type { AgendaColumns } from "../domain";

export const PAYMENT_METHODS: Option[] = [
  { label: "Fonasa", value: "fonasa" },
  { label: "Particular", value: "particular" },
];

export const APPOINTMENT_OPTIONS: Option<AgendaColumns>[] = [
  { label: "Disponibles", value: "available" },
  { label: "Por confirmar", value: "to-confirm" },
  { label: "Confirmadas", value: "confirmed" },
  { label: "Canceladas", value: "cancelled" },
];

export const HASH_COLUMNS_STYLES: Record<
  AgendaColumns,
  { header: string; body: string; wrapper: string }
> = {
  "to-confirm": {
    wrapper: "text-amber-700 bg-amber-50/60 border-amber-50",
    header: "hover:bg-amber-100 cursor-move",
    body: "scrollbar-thumb-amber-200",
  },
  available: {
    wrapper: "text-emerald-700 bg-emerald-50/60 border-emerald-50",
    header: "hover:bg-emerald-100 cursor-move",
    body: "scrollbar-thumb-emerald-200",
  },
  confirmed: {
    wrapper: "text-sky-700 bg-sky-50/60 border-sky-50",
    header: "hover:bg-sky-100 cursor-move",
    body: "scrollbar-thumb-sky-200",
  },
  cancelled: {
    wrapper: "text-red-700 bg-red-50/60 border-red-50",
    header: "hover:bg-red-100 cursor-move",
    body: "scrollbar-thumb-red-200",
  },
};

export const HASH_COLUMN_TITLE: Record<AgendaColumns, string> = {
  "to-confirm": "Por confirmar",
  available: "Disponibles",
  cancelled: "Canceladas",
  confirmed: "Confirmadas",
};
