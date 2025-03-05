import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import IconDots from "@/features/_core/components/icons/IconDots";
import { tooltipCalendarItem } from "../utils/utilities.util";
import cn from "@/config/tailwind-merge";
import CalendarEntity from "../domain/calendar.entity";

type ItemsProps = CalendarEntity & {
  isSelected: boolean;
};

const CalendarDayItems: React.FC<ItemsProps> = ({ isSelected, appointments }) => {
  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    e.stopPropagation();
    console.log(JSON.stringify(appointments, null, 2));
    alert(JSON.stringify(appointments, null, 2));
  };

  return (
    <ul className="space-y-1 w-full">
      <ArrayMap dataset={appointments.toSpliced(3)}>
        {(item) => (
          <li
            key={item.uid}
            title={tooltipCalendarItem(item)}
            className={cn(
              "p-1.5 rounded-md bg-primary text-accent text-left text-xs leading-none truncate",
              isSelected && "bg-accent text-primary",
            )}
          >
            ({item.appointment_time}) {item.pattient_name}
          </li>
        )}
      </ArrayMap>
      {appointments.length > 3 && (
        <li
          onClick={handleClick}
          className={cn(
            "px-2 py-1 w-max text-left hover:bg-primary/10 transition-colors duration-300 rounded-md",
            isSelected && "hover:bg-accent/15",
          )}
        >
          <IconDots />
        </li>
      )}
    </ul>
  );
};

export default CalendarDayItems;
