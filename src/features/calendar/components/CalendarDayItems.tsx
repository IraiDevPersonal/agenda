import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import DialogCalendarDay from "./DialogCalendarDay";
import { tooltipCalendarItem } from "../utils/utilities.util";
import cn from "@/config/tailwind-merge";
import CalendarEntity from "../domain/calendar.entity";

type ItemsProps = CalendarEntity & {
  isSelected: boolean;
};

const CalendarDayItems: React.FC<ItemsProps> = ({ isSelected, appointments, date }) => {
  return (
    <ul className="space-y-1 w-full">
      <ArrayMap dataset={appointments.toSpliced(3)}>
        {(item) => (
          <li
            key={item.uid}
            title={tooltipCalendarItem(item)}
            className={cn(
              "p-1.5 rounded-md bg-primary text-accent text-left text-xs leading-none truncate cursor-help",
              isSelected && "bg-accent text-primary",
            )}
          >
            ({item.appointment_time}) {item.pattient_name}
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
