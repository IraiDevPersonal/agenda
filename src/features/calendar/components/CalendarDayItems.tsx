import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import DialogCalendarDay from "./DialogCalendarDay";
import { tooltipCalendarItem } from "../utils/utilities.util";
import cn from "@/config/tailwind-merge";
import CalendarEntity from "../domain/calendar.entity";
import DateHelper from "@/config/date-helper";

const MAX_SHOW = 5;

type ItemsProps = CalendarEntity & {
  isSelected: boolean;
};

const CalendarDayItems: React.FC<ItemsProps> = ({ isSelected, appointments, date }) => {
  return (
    <ul className="space-y-1 w-full">
      <ArrayMap dataset={appointments.toSpliced(appointments.length > MAX_SHOW ? 4 : 5)}>
        {({
          appointment_time_to: time_to,
          appointment_time_from: time_from,
          ...item
        }) => (
          <li
            key={item.uid}
            title={tooltipCalendarItem(item)}
            className={cn(
              "relative text-primary text-left text-xs truncate cursor-help ps-2 before:content-[' '] before:w-1 before:h-full before:rounded-full before:bg-primary before:absolute before:left-0 before:top-0",
              isSelected && "text-accent before:bg-accent",
              DateHelper.isWithinInterval(time_from, time_to, date, date) &&
                "before:bg-green-400",
              DateHelper.isBefore(time_to, date) && "line-through before:bg-orange-400",
            )}
          >
            <small className="font-bold">{item.appointment_time}:</small>{" "}
            {item.professional_name}
          </li>
        )}
      </ArrayMap>
      {appointments.length > MAX_SHOW && (
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
