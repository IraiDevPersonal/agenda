export type AppointementTypes = "confirmed" | "to-confirm" | "available" | "cancelled";

export type AppointmentFilters = {
  professional_id: string;
  profession_id: string;
  patient_rut: string;
  year_month: string;
  date: string;
};
