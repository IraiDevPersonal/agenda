import { toArray } from "@/features/_core/utils/to-array.util";

type CalendarModel = {
  date: string;
  appointments: {
    uid: string;
    pattient_name: string;
    patient_rut: string;
    appointment_time_to: string;
    appointment_time_from: string;
    appointment_time: string;
    professional_name: string;
  }[];
};

export default class CalendarEntity {
  public date: CalendarModel["date"];
  public appointments: CalendarModel["appointments"];

  private constructor(init: CalendarModel) {
    this.date = init["date"];
    this.appointments = init["appointments"];
  }

  static calendarAdapter(entry: Record<string, any>) {
    return new CalendarEntity({
      date: entry["date"] ?? "__-__-____",
      appointments: toArray(entry["appointments"]).map(CalendarAppointmentEntity.adapter),
    });
  }

  static calendarResponse(data: any) {
    return toArray(data).map(CalendarEntity.calendarAdapter);
  }
}

class CalendarAppointmentEntity {
  public uid: CalendarModel["appointments"][number]["uid"];
  public pattient_name: CalendarModel["appointments"][number]["pattient_name"];
  public patient_rut: CalendarModel["appointments"][number]["patient_rut"];
  public appointment_time_to: CalendarModel["appointments"][number]["appointment_time_to"];
  public appointment_time_from: CalendarModel["appointments"][number]["appointment_time_from"];
  public appointment_time: CalendarModel["appointments"][number]["appointment_time"];
  public professional_name: CalendarModel["appointments"][number]["professional_name"];

  private constructor(init: CalendarModel["appointments"][number]) {
    this.uid = init["uid"];
    this.pattient_name = init["pattient_name"];
    this.patient_rut = init["patient_rut"];
    this.appointment_time_to = init["appointment_time_to"];
    this.appointment_time_from = init["appointment_time_from"];
    this.appointment_time = init["appointment_time"];
    this.professional_name = init["professional_name"];
  }

  static adapter(entry: Record<string, any>) {
    return new CalendarAppointmentEntity({
      uid: entry["uid"] ?? "",
      pattient_name: entry["pattient_name"] ?? "Paciente sin nombre...",
      patient_rut: entry["patient_rut"] ?? "_.___.___-_",
      appointment_time_to: entry["appointment_time_to"] ?? "__:__",
      appointment_time_from: entry["appointment_time_from"] ?? "__:__",
      appointment_time: entry["appointment_time"] ?? "__:__ - __:__",
      professional_name: entry["professional_name"] ?? "Profesional sin nombre...",
    });
  }
}
