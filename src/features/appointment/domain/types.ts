export type AppointementTypes = "confirmed" | "to-confirm" | "available" | "cancelled";

export type AppointmentsFilters = {
  professional_id: string;
  profession_id: string;
  patient_rut: string;
  date: string;
};
