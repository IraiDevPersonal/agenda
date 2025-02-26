import { toArray } from "@/features/_core/utils/to-array.util";
import AppointmentEntity from "@/features/appointment/domain/appointment.entity";
import type { AppointementTypes } from "@/features/appointment/domain/types";

type AgendaModel = {
  availables: AppointmentEntity[];
  cancelled: AppointmentEntity[];
  confirmed: AppointmentEntity[];
  toConfirm: AppointmentEntity[];
};

// TODO: esto tiene que ser repensado para ver si lo saco de agenda y se deja en appointment feature

export default class AgendaEntity {
  public availables: AgendaModel["availables"];
  public cancelled: AgendaModel["cancelled"];
  public confirmed: AgendaModel["confirmed"];
  public toConfirm: AgendaModel["toConfirm"];

  private constructor(init: AgendaModel) {
    this.availables = init.availables;
    this.cancelled = init.cancelled;
    this.confirmed = init.confirmed;
    this.toConfirm = init.toConfirm;
  }

  static appointmentsAdapter(entry: Record<string, any>) {
    return new AgendaEntity({
      availables: toArray(entry.availables).map(AppointmentEntity.appointmentAdapter),
      cancelled: toArray(entry.cancelled).map(AppointmentEntity.appointmentAdapter),
      confirmed: toArray(entry.confirmed).map(AppointmentEntity.appointmentAdapter),
      toConfirm: toArray(entry.toConfirm).map(AppointmentEntity.appointmentAdapter),
    });
  }

  static appointmentViewerAdapter(
    entry: AgendaEntity,
  ): Record<AppointementTypes, AppointmentEntity[]> {
    return {
      "to-confirm": entry.toConfirm,
      available: entry.availables,
      cancelled: entry.cancelled,
      confirmed: entry.confirmed,
    };
  }
}
