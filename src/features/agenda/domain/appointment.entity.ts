import { z } from "zod";

const appointmentSchema = z.object({
  uid: z.string(),
  date: z.date(),
  time_from: z.string(),
  time_to: z.string(),
  patient_name: z.string(),
  patient_rut: z.string(),
  patient_phone: z.string(),
  professional_name: z.string(),
  professions: z.string().array(),
});

type AppointmentModel = z.infer<typeof appointmentSchema>;

export default class AppointmentEntity {
  public uid: AppointmentModel["uid"];
  public date: AppointmentModel["date"];
  public time_from: AppointmentModel["time_from"];
  public time_to: AppointmentModel["time_to"];
  public patient_name: AppointmentModel["patient_name"];
  public patient_rut: AppointmentModel["patient_rut"];
  public patient_phone: AppointmentModel["patient_phone"];
  public professional_name: AppointmentModel["professional_name"];
  public professions: AppointmentModel["professions"];

  private constructor(init: AppointmentModel) {
    this.uid = init.uid;
    this.date = init.date;
    this.time_from = init.time_from;
    this.time_to = init.time_to;
    this.patient_name = init.patient_name;
    this.patient_rut = init.patient_rut;
    this.patient_phone = init.patient_phone;
    this.professional_name = init.professional_name;
    this.professions = init.professions;
  }

  static fromObject(entry: Record<string, any>) {
    try {
      const appointment = appointmentSchema.parse(entry);
      return new AppointmentEntity(appointment);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
