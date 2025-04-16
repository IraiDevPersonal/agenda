import { agendaApi } from "@/config/apis/agenda-api";
import ProfessionEntity from "../domain/profession.entity";

export default class ProfessionService {
  public async getProfessionsToOptions() {
    const { data } = await agendaApi.get("/profession/to-filter");
    return ProfessionEntity.professionsAsOptions(data);
  }
}
