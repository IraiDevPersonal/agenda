import { cn } from "@/config";
import IconDots from "@/features/_core/components/icons/IconDots";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import { DayButtonProps } from "react-day-picker";

type ButtonProps = DayButtonProps;

const AgendaCalendarDayButton: React.FC<ButtonProps> = (props) => {
  const {
    children,
    day: { date },
    modifiers: { selected = false },
  } = props;
  return (
    <button
      {...props}
      className={cn(
        "outline-none p-2 h-40 w-48 flex flex-col gap-1 bg-accent rounded-xl border-2 border-transparent hover:border-primary/40 hover:scale-105 transition-all duration-300",
        selected && "bg-primary text-accent"
      )}
    >
      <span className="font-semibold leading-none">{children}</span>
      {date.getDay().toString().includes("2") && (
        <DayItems isSelected={selected} />
      )}
    </button>
  );
};

export default AgendaCalendarDayButton;

const DayItems: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    e.stopPropagation();
    alert("todas las horas para el dia");
  };

  return (
    <ul className="space-y-1 w-full">
      <ArrayMap dataset={Array.from({ length: 3 })}>
        {(_, idx) => (
          <li
            key={idx}
            className={cn(
              "px-3 py-1.5 rounded-lg bg-primary text-accent text-left text-xs truncate",
              isSelected && "bg-accent text-primary"
            )}
          >
            10:00 - 10:45 &nbsp; ignacio arriagada
          </li>
        )}
      </ArrayMap>
      <li
        onClick={handleClick}
        className={cn(
          "px-2.5 py-1 w-max text-left hover:bg-primary/10 transition-colors duration-300 rounded-md",
          isSelected && "hover:bg-accent/15"
        )}
      >
        <IconDots />
      </li>
    </ul>
  );
};
