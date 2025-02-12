import AppointmentEntity from "./appointment.entity";

type AgendaModel = {
  availables: AppointmentEntity[];
  cancelled: AppointmentEntity[];
  confirmed: AppointmentEntity[];
  toConfirm: AppointmentEntity[];
};

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

  static fromObject(
    entry: Record<keyof AgendaModel, any>
  ): Record<keyof AgendaModel, AppointmentEntity> {
    return {
      availables: entry.availables.map(AppointmentEntity.fromObject),
      cancelled: entry.cancelled.map(AppointmentEntity.fromObject),
      confirmed: entry.confirmed.map(AppointmentEntity.fromObject),
      toConfirm: entry.toConfirm.map(AppointmentEntity.fromObject),
    };
  }
}
