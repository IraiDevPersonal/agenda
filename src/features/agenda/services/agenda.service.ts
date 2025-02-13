import { agendaApi } from "@/config/apis/agenda-api";
import AgendaEntity from "../domain/agenda.entity";
import { objectToURLSearchParams } from "@/features/_core/utils/object-to-url-search-params.util";

export type GetAppointmentsReturn = Promise<[error?: string, appointmets?: AgendaEntity]>;

export type GetAppointmentsFilters = {
  patient_rut: string | null;
  date: string | null;
};

export default class AgendaService {
  public async getAppointments(filters?: GetAppointmentsFilters): GetAppointmentsReturn {
    try {
      const searchParams = objectToURLSearchParams(filters);
      const { data } = await agendaApi.get(`/agenda?${searchParams}`);
      return [undefined, AgendaEntity.appointmentsAdapter(data)];
    } catch (error) {
      const errorMessage = agendaApi.getErrorMessage(error);
      return [errorMessage, undefined];
    }
  }
}
