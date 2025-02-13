import { toArray } from "@/features/_core/utils/to-array.util";

type AppointmentModel = {
  uid: string;
  date: string;
  time_from: string;
  time_to: string;
  patient_name: string;
  patient_rut: string;
  patient_phone: string;
  professional_name: string;
  professions: string[];
};

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

  static appointmentAdapter(entry: Record<string, any>) {
    const item = {
      uid: entry["uid"] ?? "",
      date: entry["date"] ?? "-- -- ----",
      time_from: entry["time_from"] ?? "--",
      time_to: entry["time_to"] ?? "--",
      patient_name: entry["patient_name"] ?? "Paciente sin nombre...",
      patient_rut: entry["patient_rut"] ?? "--",
      patient_phone: entry["patient_phone"] ?? "--",
      professional_name: entry["professional_name"] ?? "Profesional sin nombre...",
      professions: toArray(entry["professions"]).map((value) => `${value ?? "--"}`),
    };
    return new AppointmentEntity(item);
  }
}

// static appointmetAdapter(entry: Record<string, any>) {
//   const output: Record<string, any> = {};

//   for (const [key, value] of Object.entries(entry)) {
//     if (key in appointmentSchema.shape) {
//       const schema =
//         appointmentSchema.shape[key as keyof typeof appointmentSchema.shape];
//       const result = schema.safeParse(value);
//       if (Array.isArray(value)) {
//         output[key] = result.success ? value : ["--"];
//       }
//       output[key] = result.success ? value : "--";
//     } else {
//       output[key] = "--";
//     }
//   }

//   return new AppointmentEntity(output as AppointmentModel);
// }

// static adapter(entry: Record<string, any>) {
//   try {
//     const appointment = appointmentSchema.parse(entry);
//     return new AppointmentEntity(appointment);
//   } catch (error) {
//     // throw new Error((error as Error).message);
//     console.log((error as Error).message);
//     return new AppointmentEntity({
//       uid: "--",
//       date: "--",
//       time_from: "--",
//       time_to: "--",
//       patient_name: "--",
//       patient_rut: "--",
//       patient_phone: "--",
//       professional_name: "--",
//       professions: ["--"],
//     });
//   }
// }
