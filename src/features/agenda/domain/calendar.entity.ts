import { toArray } from "@/features/_core/utils/to-array.util";

type CalendarAppointmentModel = {
  uid: string;
  pattient_name: string;
  patient_rut: string;
  appointment_time_to: string;
  appointment_time_from: string;
  appointment_time: string;
  professional_name: string;
};

type CalendarModel = {
  date: string;
  appointments: CalendarAppointmentModel[];
};

export default class CalendarEntity {
  // public professional_name: CalendarModel["professional_name"];
  public date: CalendarModel["date"];
  public appointments: CalendarModel["appointments"];

  private constructor(init: CalendarModel) {
    // this.professional_name = init["professional_name"];
    this.date = init["date"];
    this.appointments = init["appointments"];
  }

  static calendarAdapter(entry: Record<string, any>) {
    return new CalendarEntity({
      // professional_name: entry["professional_name"] ?? "Profesional sin nombre...",
      date: entry["date"] ?? "__-__-____",
      appointments: toArray(entry["appointments"]).map(CalendarAppointmentEntity.adapter),
    });
  }
}

class CalendarAppointmentEntity {
  public uid: CalendarAppointmentModel["uid"];
  public pattient_name: CalendarAppointmentModel["pattient_name"];
  public patient_rut: CalendarAppointmentModel["patient_rut"];
  public appointment_time_to: CalendarAppointmentModel["appointment_time_to"];
  public appointment_time_from: CalendarAppointmentModel["appointment_time_from"];
  public appointment_time: CalendarAppointmentModel["appointment_time"];
  public professional_name: CalendarAppointmentModel["professional_name"];

  private constructor(init: CalendarAppointmentModel) {
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
