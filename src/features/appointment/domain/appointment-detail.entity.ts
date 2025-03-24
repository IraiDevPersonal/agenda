import DateHelper from "@/config/pluggins/date-helper";
import { toArray } from "@/features/_core/utils/to-array.util";

type AppointmentDetailModel = {
  professional: {
    full_name: string;
    pay_method: string[];
    confirm_method: string[];
    profession: string;
  };
  patient: {
    full_name: string;
    rut: string;
    phone: string;
    email: string;
  };
  alert: {
    message: string;
    type: string;
  };
  patient_history: { date_time: string; status: string }[];
};

export default class AppointmentDetailEntity {
  public professional: AppointmentDetailModel["professional"];
  public patient: AppointmentDetailModel["patient"];
  public alert: AppointmentDetailModel["alert"];
  public patient_history: AppointmentDetailModel["patient_history"];

  private constructor(init: AppointmentDetailModel) {
    this.professional = init["professional"];
    this.patient = init["patient"];
    this.alert = init["alert"];
    this.patient_history = init["patient_history"];
  }

  static responseAdapter(entry: Record<string, any>) {
    return new AppointmentDetailEntity({
      alert: {
        message: entry?.["alert"]?.["messgge"] ?? "",
        type: entry?.["alert"]?.["type"] ?? "",
      },
      patient: {
        email: entry?.["patient"]?.["email"] ?? "Sin correo...",
        full_name: entry?.["patient"]?.["full_name"] ?? "Sin nombre...",
        phone: entry?.["patient"]?.["phone"] ?? "Sin teléfono...",
        rut: entry?.["patient"]?.["rut"] ?? "Sin rut...",
      },
      professional: {
        confirm_method: toArray(entry?.["professional"]?.["confirm_method"]).map(
          (cm) => `${cm ?? "..."}`,
        ),
        pay_method: toArray(entry?.["professional"]?.["pay_method"]).map(
          (pm) => `${pm ?? "..."}`,
        ),
        full_name: entry?.["professional"]?.["full_name"] ?? "Sin nombre...",
        profession: entry?.["professional"]?.["profession"] ?? "Sin profesión...",
      },
      patient_history: toArray(entry?.["patient_history"]).map((pm) => ({
        status: `${pm?.status ?? "Sin estado..."}`,
        date_time: DateHelper.format(
          new Date(pm?.date_time),
          "date_time",
          "Sin fecha y hora...",
        ),
      })),
    });
  }
}
