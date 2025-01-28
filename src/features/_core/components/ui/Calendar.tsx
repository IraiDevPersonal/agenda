import { cn } from "@/config";
import { useState } from "react";
import { DayPicker, DayPickerProps, DayButtonProps } from "react-day-picker";
import { es } from "react-day-picker/locale";

type Props = DayPickerProps & {
  renderDayAttachment?(props: DayButtonProps): React.ReactNode;
};

const Calendar: React.FC<Props> = ({
  className,
  components,
  renderDayAttachment,
  ...props
}) => {
  const [date, setDate] = useState(new Date());
  return (
    <DayPicker
      locale={es}
      month={date}
      className={cn("w-fit", className)}
      classNames={{
        day: "p-1",
        day_button: "h-36 w-44",
        selected: "bg-primary/20",
        month_caption: "hidden",
      }}
      onMonthChange={setDate}
      components={{
        Nav: ({ onNextClick, onPreviousClick }) => (
          <nav className="flex justify-center items-center gap-3">
            <button onClick={onPreviousClick}>{"<"}</button>
            <span>
              {date.getMonth()} - {date.getFullYear()}
            </span>
            <button onClick={onNextClick}>{">"}</button>
          </nav>
        ),
        DayButton: ({ children, ...props }) => (
          <button
            {...props}
            className="outline-none p-2 h-36 w-44 flex flex-col gap-1 bg-accent rounded-2xl border-2 border-transparent hover:border-primary/40 hover:scale-105 transition-all duration-300"
          >
            <span className="font-semibold leading-none">{children}</span>
            {renderDayAttachment?.(props)}
          </button>
        ),
        Weekday: ({ "aria-label": ariaLabel, ...props }) => (
          <th aria-label={ariaLabel} {...props} className="capitalize h-16">
            {ariaLabel}
          </th>
        ),
        // WeekNumber: (props) => <td {...props} className="px-4 font-bold" />,
        ...components,
      }}
      {...props}
    />
  );
};

export default Calendar;
