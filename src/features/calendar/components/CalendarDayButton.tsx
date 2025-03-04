import CalendarDayItems from "./CalendarDayItems";
import cn from "@/config/tailwind-merge";
import CalendarEntity from "../domain/calendar.entity";
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
    <button {...props} className={cn(className, "flex flex-col gap-1 items-start")}>
      <span className="font-semibold leading-none">{children}</span>
      {!isOutside && dayData && <CalendarDayItems isSelected={selected} {...dayData} />}
    </button>
  );
};

export default CalendarDayButton;
