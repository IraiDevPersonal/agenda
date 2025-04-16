import { agendaApi } from "@/config/apis/agenda-api";
import { toArray } from "@/modules/_core/utils/to-array.util";
import QueryString from "@/config/pluggins/query-string";
import AppointmentEntity from "../domain/appointment.entity";
import AgendaEntity from "@/modules/agenda/domain/agenda.entity";
import AppointmentDetailEntity from "../domain/appointment-detail.entity";
import type { AppointmentFilters } from "@/modules/appointment/domain/types";

type AppointmentType = "AVAILABLE" | "CANCELLED" | "CONFIRMED" | "TO_CONFIRM";

export default class AppointmentService {
  public async getAgenda(filters?: Partial<AppointmentFilters>) {
    const search = this.stringifyFilters(filters);
    const { data } = await agendaApi.get(`/agenda?${search}`);
    return AgendaEntity.adaper(data);
  }

  public async getAppointmentsByType(
    type: AppointmentType,
    filters?: Partial<AppointmentFilters>,
  ) {
    const search = this.stringifyFilters(filters);
    const { data } = await agendaApi.get(`/agenda/${type}?${search}`);
    return toArray(data).map(AppointmentEntity.responseAdapter);
  }

  public async getAppoinmentDetail(appointmentUid: AppointmentEntity["uid"]) {
    const { data } = await agendaApi.get(`/agenda/detail/${appointmentUid}`);
    return AppointmentDetailEntity.responseAdapter(data);
  }

  private stringifyFilters(obj: Partial<AppointmentFilters> = {}) {
    return QueryString.toString(obj);
  }
}
