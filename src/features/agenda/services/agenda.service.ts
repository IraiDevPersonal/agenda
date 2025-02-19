import { agendaApi } from "@/config/apis/agenda-api";
import AgendaEntity from "../domain/agenda.entity";
import SearchParams from "@/config/search-params";

export type GetAppointmentsReturn = Promise<[error?: string, appointmets?: AgendaEntity]>;

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
      const query = SearchParams.toString(filters);
      const { data } = await agendaApi.get(`/agenda?${query}`);
      return [undefined, AgendaEntity.appointmentsAdapter(data)];
    } catch (error) {
      const errorMessage = agendaApi.getErrorMessage(error);
      return [errorMessage, undefined];
    }
  }
}
