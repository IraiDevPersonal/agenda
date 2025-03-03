import { agendaApi } from "@/config/apis/agenda-api";
import SearchParams from "@/config/search-params";
import CalendarEntity from "../domain/calendar.entity";
import type { CalendarFilters } from "../domain/types";
import { toArray } from "@/features/_core/utils/to-array.util";

export default class CalendarService {
  public async getCalendar(filters?: Partial<CalendarFilters>) {
    const query = this.parseFilters(filters);
    const { data } = await agendaApi.get(`/calendar?${query}`);
    return toArray(data).map(CalendarEntity.calendarAdapter);
  }

  private parseFilters(obj: Partial<CalendarFilters> = {}) {
    return SearchParams.toString(obj);
  }
}
