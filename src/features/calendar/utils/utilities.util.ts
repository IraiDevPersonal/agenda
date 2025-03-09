import CalendarEntity from "../domain/calendar.entity";

export function tooltipCalendarItem(
  data: Partial<CalendarEntity["appointments"][number]>,
  expand?: string,
): string {
  return [
    `Profesional: ${data.professional_name}`,
    `Paciente: ${data.pattient_name}`,
    `Rut: ${data.patient_rut}`,
    `Horario: ${data.appointment_time}`,
    `${expand ?? ""}`,
  ].join("\n");
}
