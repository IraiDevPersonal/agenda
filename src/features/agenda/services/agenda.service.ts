import { agendaApi } from "@/config/apis/agenda-api";
import AgendaEntity from "../domain/agenda.entity";

export type GetAppointmentsReturn = Promise<
  [error?: string, data?: AgendaEntity]
>;

export default class AgendaService {
  public async getAppointments(): GetAppointmentsReturn {
    try {
      const { data } = await agendaApi.get<AgendaEntity>("/agenda");
      return [undefined, data];
    } catch (error) {
      const errorMessage = agendaApi.getErrorMessage(error);
      return [errorMessage, undefined];
    }
  }
}
