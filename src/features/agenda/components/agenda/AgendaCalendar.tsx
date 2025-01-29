import DateFns from "@/config/date-fns";
import IconChevronLeft from "@/features/_core/components/icons/IconChevronLeft";
import IconChevronRight from "@/features/_core/components/icons/IconChevronRight";
import Button from "@/features/_core/components/ui/Button";
import Calendar from "@/features/_core/components/ui/Calendar";
import { useState } from "react";
import {
  DayButtonProps,
  NavProps,
  PropsSingle,
  WeekdayProps,
} from "react-day-picker";

type Props = Pick<PropsSingle, "onSelect" | "selected">;

const AgendaCalendar: React.FC<Props> = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      month={date}
      mode="single"
      onMonthChange={setDate}
      className="p-4 border-2 border-primary/20 rounded-3xl"
      classNames={{
        selected: "[&_button]:bg-primary [&_button]:text-white",
        day: "p-1",
        caption_label: "hidden",
      }}
      components={{
        Nav: (props) => <Nav {...props} date={date} />,
        DayButton: (props) => <DayButton {...props} />,
        Weekday: (props) => <WeekDay {...props} />,
      }}
    />
  );
};

export default AgendaCalendar;

const Nav: React.FC<NavProps & { date: Date }> = ({
  onPreviousClick,
  onNextClick,
  date,
}) => {
  return (
    <nav className="flex justify-between sm:justify-center items-center gap-3">
      <Button size="icon" variant="text" onClick={onPreviousClick}>
        <IconChevronLeft />
      </Button>
      <span className="font-semibold text-lg capitalize sm:w-64 text-center">
        {new DateFns().format({ date: date, format: "month_year" })}
      </span>
      <Button size="icon" variant="text" onClick={onNextClick}>
        <IconChevronRight />
      </Button>
    </nav>
  );
};

const DayButton: React.FC<DayButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="outline-none p-2 h-36 w-44 flex flex-col gap-1 bg-accent rounded-xl border-2 border-transparent hover:border-primary/40 hover:scale-105 transition-all duration-300"
    >
      <span className="font-semibold leading-none">{children}</span>
    </button>
  );
};

const WeekDay: React.FC<WeekdayProps> = ({
  "aria-label": ariaLabel,
  ...props
}) => {
  return (
    <th aria-label={ariaLabel} {...props} className="capitalize h-16">
      {ariaLabel}
    </th>
  );
};
