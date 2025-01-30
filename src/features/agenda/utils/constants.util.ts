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
