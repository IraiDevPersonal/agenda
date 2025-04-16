import type { Option } from "@/config/types";
import type { AppointementTypes } from "../domain/types";

export const PAYMENT_METHODS: Option[] = [
  { label: "Fonasa", value: "fonasa" },
  { label: "Particular", value: "particular" },
];

export const APPOINTMENT_OPTIONS: Option<AppointementTypes>[] = [
  { label: "Disponibles", value: "available" },
  { label: "Por confirmar", value: "to-confirm" },
  { label: "Confirmadas", value: "confirmed" },
  { label: "Canceladas", value: "cancelled" },
];
