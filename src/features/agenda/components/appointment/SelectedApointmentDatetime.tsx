import { cn } from "@/config";
import { AgendaColumns } from "../../domain";

const HASH_COLORS: Record<
  Props["type"],
  { wrapper: string; date: string; time: string }
> = {
  "to-confirm": {
    wrapper:
      "bg-amber-200/70 text-amber-600 border-amber-300 divide-amber-300 [&_div]:divide-y [&_div]:divide-amber-300",
    date: "bg-amber-100",
    time: "bg-amber-50/85",
  },
  available: {
    wrapper:
      "bg-emerald-200/70 text-emerald-600 border-emerald-300 divide-emerald-300 [&_div]:divide-y [&_div]:divide-emerald-300",
    date: "bg-emerald-100",
    time: "bg-emerald-50/85",
  },
  cancelled: {
    wrapper:
      "bg-red-200/70 text-red-600 border-red-300 divide-red-300 [&_div]:divide-y [&_div]:divide-red-300",
    date: "bg-red-100",
    time: "bg-red-50/85",
  },
  confirmed: {
    wrapper:
      "bg-sky-200/70 text-sky-600 border-sky-300 divide-sky-300 [&_div]:divide-y [&_div]:divide-sky-300",
    date: "bg-sky-100",
    time: "bg-sky-50/85",
  },
};

type Props = {
  type: AgendaColumns;
  className?: string;
};

export const SelectedApointmentDateTime: React.FC<Props> = ({
  className,
  type,
}) => {
  return (
    <div
      className={cn(
        "flex rounded-xl w-max overflow-hidden border divide-x",
        HASH_COLORS[type].wrapper,
        className
      )}
    >
      <div className="h-full grid content-center p-4">
        <h3 className="font-bold">Cita</h3>
      </div>
      <div className="flex flex-col font-bold *:leading-tight">
        <span className={cn("p-3 pb-1.5 bg-white/30", HASH_COLORS[type].date)}>
          Fecha: 11-01-2025
        </span>
        <span className={cn("p-3 pt-1.5", HASH_COLORS[type].time)}>
          Horario: 13:00 - 13:45
        </span>
      </div>
    </div>
  );
};
