import { agendaApi } from "@/config/apis/agenda-api";
import AgendaEntity from "../domain/agenda.entity";
import SearchParams from "@/config/search-params";
import AppointmentEntity from "../domain/appointment.entity";
import { toArray } from "@/features/_core/utils/to-array.util";

export type GetAppointmentsReturn = Promise<[error?: string, appointmets?: AgendaEntity]>;
export type GetAppointmentsByTypeReturn = Promise<
  [error?: string, appointmets?: AppointmentEntity[]]
>;

type AppointmentType = "AVAILABLE" | "CANCELLED" | "CONFIRMED" | "TO_CONFIRM";

export type GetAppointmentsFilters = {
  profession_id: string;
  patient_rut: string;
  date: string;
};

export default class AgendaService {
  public async getAppointments(
    filters?: Partial<GetAppointmentsFilters>,
  ): GetAppointmentsReturn {
    try {
      const query = this.parseFilters(filters);
      const { data } = await agendaApi.get(`/agenda?${query}`);
      return [undefined, AgendaEntity.appointmentsAdapter(data)];
    } catch (error) {
      const errorMessage = agendaApi.getErrorMessage(error);
      return [errorMessage, undefined];
    }
  }

  public async getAppointmentsByType(
    type: AppointmentType,
    filters?: Partial<GetAppointmentsFilters>,
  ): GetAppointmentsByTypeReturn {
    try {
      const query = this.parseFilters(filters);
      const { data } = await agendaApi.get(`/agenda/${type}?${query}`);
      return [undefined, toArray(data).map(AppointmentEntity.appointmentAdapter)];
    } catch (error) {
      const errorMessage = agendaApi.getErrorMessage(error);
      return [errorMessage, undefined];
    }
  }

  private parseFilters(obj: Partial<GetAppointmentsFilters> = {}) {
    return SearchParams.toString(obj);
  }
}
