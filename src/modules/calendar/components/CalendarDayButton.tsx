import CalendarDayItems from "./CalendarDayItems";
import Badge from "@/modules/_core/components/ui/Badge";
import CalendarEntity from "../domain/calendar.entity";
import cn from "@/config/pluggins/cn";
import type { DayButtonProps } from "react-day-picker";

type ButtonProps = DayButtonProps & {
  dayData?: CalendarEntity;
};

const CalendarDayButton: React.FC<ButtonProps> = ({ dayData, ...props }) => {
  const {
    modifiers: { selected = false },
    day: { outside: isOutside },
    className,
    children,
  } = props;

  return (
    <button
      {...props}
      className={cn(className, "relative flex flex-col gap-2 items-start")}
    >
      <span className="font-semibold leading-none">{children}</span>
      {!isOutside && dayData && (
        <>
          <CalendarDayItems isSelected={selected} {...dayData} />
          {dayData.available_appointments_count > 0 && (
            <Badge
              className="absolute -top-2 -right-2 bg-emerald-100 text-emerald-700"
              title="Citas disponibles para el día"
            >
              {dayData.available_appointments_count}
            </Badge>
          )}
        </>
      )}
    </button>
  );
};

export default CalendarDayButton;
