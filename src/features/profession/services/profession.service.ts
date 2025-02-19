import { agendaApi } from "@/config/apis/agenda-api";
import ProfessionEntity from "../domain/profession.entity";
import type { Option } from "@/config/types";

export type GetProfessionsAsOptionsReturn = Promise<
  [error?: string, appointmets?: Option[]]
>;

export default class ProfessionService {
  public async getProfessionsAsOptions(): GetProfessionsAsOptionsReturn {
    try {
      const { data } = await agendaApi.get("/profession");
      return [undefined, ProfessionEntity.professionsAsOptions(data)];
    } catch (error) {
      const errorMessage = agendaApi.getErrorMessage(error);
      return [errorMessage, undefined];
    }
  }
}
