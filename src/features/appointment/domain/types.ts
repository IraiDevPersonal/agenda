export type AppointementTypes = "confirmed" | "to-confirm" | "available" | "cancelled";

export type AppointmentFilters = {
  professional_id: number;
  profession_id: number;
  patient_rut: string;
  year_month: string;
  date: string;
};
