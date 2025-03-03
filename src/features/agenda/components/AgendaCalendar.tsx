import useCalendar from "../hooks/useCalendar";
import usePickCalendarByMonth from "../hooks/usePickCalendarByMonth";
import Calendar from "@/features/_core/components/ui/Calendar.new";
import cn from "@/config/tailwind-merge";
import type { PropsSingle, WeekdayProps } from "react-day-picker";

type Props = Pick<PropsSingle, "onSelect" | "selected">;

const AgendaCalendar: React.FC<Props> = (props) => {
  const { month, onMonthChange } = usePickCalendarByMonth();
  const { data } = useCalendar();

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        className="p-4"
        month={month}
        onMonthChange={onMonthChange}
        components={{
          // Day: (props) => <Day {...props} />,
          Weekday: (props: WeekdayProps) => (
            <th {...props} className={cn(props.className, "capitalize")}>
              {props["aria-label"]}
            </th>
          ),
        }}
        {...props}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AgendaCalendar;

// const Nav: React.FC<NavProps & { date: Date }> = ({
//   onPreviousClick,
//   onNextClick,
//   date,
// }) => {
//   return (
//     <nav className="flex justify-between sm:justify-center items-center gap-3">
//       <Button size="icon" variant="text" onClick={onPreviousClick}>
//         <IconChevronLeft />
//       </Button>
//       <span className="font-semibold text-lg first-letter:capitalize sm:w-64 text-center">
//         {new Now().format(date, "month_year")}
//       </span>
//       <Button size="icon" variant="text" onClick={onNextClick}>
//         <IconChevronRight />
//       </Button>
//     </nav>
//   );
// };

// const WeekDay: React.FC<WeekdayProps> = ({
//   "aria-label": ariaLabel,
//   ...props
// }) => {
//   return (
//     <th aria-label={ariaLabel} {...props} className="capitalize h-16">
//       {ariaLabel}
//     </th>
//   );
// };
// <Calendar
//   month={date}
//   mode="single"
//   onMonthChange={setDate}
//   className="p-4"
//   classNames={{
//     day: "p-1",
//     caption_label: "hidden",
//   }}
//   components={{
//     Nav: (props) => <Nav {...props} date={date} />,
//     DayButton: (props) => <AgendaCalendarDayButton {...props} />,
//     Weekday: (props) => <WeekDay {...props} />,
//   }}
//   {...props}
// />
