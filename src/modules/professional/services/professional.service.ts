import { agendaApi } from "@/config/apis/agenda-api";
import ProfessionalEntity from "../domain/professional.entity";

export default class ProfessionalService {
  public async getProfessionalsToOptions() {
    const { data } = await agendaApi.get("/professional/to-filter");
    return ProfessionalEntity.professionalsAsOptions(data);
  }
}
