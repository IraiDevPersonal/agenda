import { useCallback } from "react";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import DialogCalendarDay from "./DialogCalendarDay";
import { tooltipCalendarItem } from "../utils/utilities.util";
import cn from "@/config/tailwind-merge";
import CalendarEntity from "../domain/calendar.entity";
import DateHelper from "@/config/date-helper";

type ItemsProps = CalendarEntity & {
  isSelected: boolean;
};

const CalendarDayItems: React.FC<ItemsProps> = ({ isSelected, appointments, date }) => {
  const withinIntervalStyles = useCallback(
    (item: CalendarEntity["appointments"][number]) => {
      const isWithinInterval = DateHelper.isWithinInterval(
        item.appointment_time_to,
        item.appointment_time_from,
      );
      if (!isWithinInterval) return "";

      return isSelected ? "bg-green-700 text-green-100" : "bg-green-100 text-green-700";
    },
    [isSelected],
  );

  const beforeStyles = useCallback((item: CalendarEntity["appointments"][number]) => {
    return DateHelper.isBefore(item.appointment_time_from)
      ? "line-through opacity-60"
      : "";
  }, []);

  return (
    <ul className="space-y-1 w-full">
      <ArrayMap dataset={appointments.toSpliced(3)}>
        {(item) => (
          <li
            key={item.uid}
            title={tooltipCalendarItem(item)}
            className={cn(
              "p-1.5 rounded-md bg-primary text-accent text-left text-[0.65rem] leading-none truncate cursor-help",
              isSelected && "bg-accent text-primary",
              withinIntervalStyles(item),
              beforeStyles(item),
            )}
          >
            ({item.appointment_time}) {item.professional_name}
          </li>
        )}
      </ArrayMap>
      {appointments.length > 3 && (
        <DialogCalendarDay
          appointments={appointments}
          isSelected={isSelected}
          date={date}
        />
      )}
    </ul>
  );
};

export default CalendarDayItems;
