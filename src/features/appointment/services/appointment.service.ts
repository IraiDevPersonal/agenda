import { agendaApi } from "@/config/apis/agenda-api";
import SearchParams from "@/config/search-params";
import { toArray } from "@/features/_core/utils/to-array.util";
import AppointmentEntity from "../domain/appointment.entity";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";
import type { AppointmentFilters } from "@/features/appointment/domain/types";

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

  private parseFilters(obj: Partial<AppointmentFilters> = {}) {
    return SearchParams.toString(obj);
  }
}
