import { agendaApi } from "@/config/apis/agenda-api";
import QueryString from "@/config/pluggins/query-string";
import CalendarEntity from "../domain/calendar.entity";
import type { AppointmentFilters } from "@/modules/appointment/domain/types";

export default class CalendarService {
  public async getCalendar(filters?: Partial<AppointmentFilters>) {
    const search = this.stringifyFilters(filters);
    const { data } = await agendaApi.get(`/calendar?${search}`);
    return CalendarEntity.responseAdapter(data);
  }

  private stringifyFilters(obj: Partial<AppointmentFilters> = {}) {
    return QueryString.toString(obj);
  }
}
