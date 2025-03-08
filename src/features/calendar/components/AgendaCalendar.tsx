import { useCallback } from "react";
import useCalendar from "../hooks/useCalendar";
import usePickCalendarByMonth from "../hooks/usePickCalendarByMonth";
import CalendarDayButton from "./CalendarDayButton";
import Calendar from "@/features/_core/components/ui/Calendar";
import cn from "@/config/tailwind-merge";
import DateHelper from "@/config/date-helper";
import type { PropsSingle, WeekdayProps } from "react-day-picker";

type Props = Pick<PropsSingle, "onSelect" | "selected">;

const AgendaCalendar: React.FC<Props> = (props) => {
  const { month, onMonthChange } = usePickCalendarByMonth();
  const { data } = useCalendar();

  const dayData = useCallback(
    (date: Date) => {
      return data?.find((el) =>
        DateHelper.isEqual(DateHelper.getFullDate(el.date), date),
      );
    },
    [data],
  );

  return (
    <div className="h-[calc(100vh-6rem)] scrollbar-styles overflow-y-auto scrollbar-thumb-transparent min-w-max">
      <Calendar
        mode="single"
        className="p-4 pr-2"
        month={month}
        onMonthChange={onMonthChange}
        classNames={{
          day_button:
            "relative flex p-2 h-36 w-40 whitespace-nowrap bg-accent rounded-xl border-2 border-transparent hover:border-primary/40 text-foreground transition-all duration-300 outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary group-data-[selected]:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:bg-transparent group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground",
          day: "group p-0.5",
        }}
        components={{
          Weekday: (props: WeekdayProps) => (
            <th {...props} className={cn(props.className, "capitalize")}>
              {props["aria-label"]}
            </th>
          ),
          DayButton: (props) => (
            <CalendarDayButton {...props} dayData={dayData(props.day.date)} />
          ),
        }}
        {...props}
      />
    </div>
  );
};

export default AgendaCalendar;
