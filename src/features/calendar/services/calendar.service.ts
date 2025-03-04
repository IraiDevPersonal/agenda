import { agendaApi } from "@/config/apis/agenda-api";
import SearchParams from "@/config/search-params";
import CalendarEntity from "../domain/calendar.entity";
import type { AppointmentFilters } from "@/features/appointment/domain/types";

export default class CalendarService {
  public async getCalendar(filters?: Partial<AppointmentFilters>) {
    const query = this.parseFilters(filters);
    const { data } = await agendaApi.get(`/calendar?${query}`);
    return CalendarEntity.calendarAsArrayAdapter(data);
  }

  private parseFilters(obj: Partial<AppointmentFilters> = {}) {
    return SearchParams.toString(obj);
  }
}
