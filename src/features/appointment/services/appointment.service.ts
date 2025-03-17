import { agendaApi } from "@/config/apis/agenda-api";
import SearchParams from "@/config/pluggins/search-params";
import { toArray } from "@/features/_core/utils/to-array.util";
import AppointmentEntity from "../domain/appointment.entity";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";
import type { AppointmentFilters } from "@/features/appointment/domain/types";
import AppointmentDetailEntity from "../domain/appointment-detail.entity";

type AppointmentType = "AVAILABLE" | "CANCELLED" | "CONFIRMED" | "TO_CONFIRM";

export default class AppointmentService {
  public async getAgenda(filters?: Partial<AppointmentFilters>) {
    const query = this.parseFilters(filters);
    const { data } = await agendaApi.get(`/agenda?${query}`);
    return AgendaEntity.appointmentsAdapter(data);
  }

  public async getAppointmentsByType(
    type: AppointmentType,
    filters?: Partial<AppointmentFilters>,
  ) {
    const query = this.parseFilters(filters);
    const { data } = await agendaApi.get(`/agenda/${type}?${query}`);
    return toArray(data).map(AppointmentEntity.appointmentAdapter);
  }

  public async getAppoinmentDetail(appointmentUid: AppointmentEntity["uid"]) {
    const { data } = await agendaApi.get(`/agenda/detail/${appointmentUid}`);
    return AppointmentDetailEntity.adapter(data);
  }

  private parseFilters(obj: Partial<AppointmentFilters> = {}) {
    return SearchParams.toString(obj);
  }
}
