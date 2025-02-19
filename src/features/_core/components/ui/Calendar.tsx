import { DayPicker, DayPickerProps } from "react-day-picker";
import { es } from "react-day-picker/locale";
import cn from "@/config/tailwind-merge";

export type CalendarProps = DayPickerProps;

const Calendar: React.FC<CalendarProps> = ({ className, components, ...props }) => {
  return (
    <DayPicker
      locale={es}
      className={cn("w-fit", className)}
      components={{
        ...components,
      }}
      {...props}
    />
  );
};

export default Calendar;
