import { useState } from "react";
import { NavProps, PropsSingle, WeekdayProps } from "react-day-picker";
import IconChevronLeft from "@/features/_core/components/icons/IconChevronLeft";
import IconChevronRight from "@/features/_core/components/icons/IconChevronRight";
import Button from "@/features/_core/components/ui/Button";
import Calendar from "@/features/_core/components/ui/Calendar";
import AgendaCalendarDayButton from "./AgendaCalendarDayButton";
import Now from "@/config/now";

type Props = Pick<PropsSingle, "onSelect" | "selected">;

const AgendaCalendar: React.FC<Props> = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      month={date}
      mode="single"
      onMonthChange={setDate}
      className="p-4"
      classNames={{
        day: "p-1",
        caption_label: "hidden",
      }}
      components={{
        Nav: (props) => <Nav {...props} date={date} />,
        DayButton: (props) => <AgendaCalendarDayButton {...props} />,
        Weekday: (props) => <WeekDay {...props} />,
      }}
      {...props}
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
      <span className="font-semibold text-lg first-letter:capitalize sm:w-64 text-center">
        {new Now().format(date, "month_year")}
      </span>
      <Button size="icon" variant="text" onClick={onNextClick}>
        <IconChevronRight />
      </Button>
    </nav>
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
