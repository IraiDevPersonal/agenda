import { agendaApi } from "@/config/apis/agenda-api";
import AgendaEntity from "../domain/agenda.entity";
import SearchParams from "@/config/search-params";
import AppointmentEntity from "../domain/appointment.entity";
import { toArray } from "@/features/_core/utils/to-array.util";
import type { AppointmentsFilters } from "@/features/appointment/domain/types";

type AppointmentType = "AVAILABLE" | "CANCELLED" | "CONFIRMED" | "TO_CONFIRM";

export default class AgendaService {
  public async getAppointments(filters?: Partial<AppointmentsFilters>) {
    const query = this.parseFilters(filters);
    const { data } = await agendaApi.get(`/agenda?${query}`);
    return AgendaEntity.appointmentsAdapter(data);
  }

  public async getAppointmentsByType(
    type: AppointmentType,
    filters?: Partial<AppointmentsFilters>,
  ) {
    const query = this.parseFilters(filters);
    const { data } = await agendaApi.get(`/agenda/${type}?${query}`);
    return toArray(data).map(AppointmentEntity.appointmentAdapter);
  }

  private parseFilters(obj: Partial<AppointmentsFilters> = {}) {
    return SearchParams.toString(obj);
  }
}
