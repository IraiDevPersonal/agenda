import { cn } from "@/config";
import { AgendaColumns } from "../../domain";

const HASH_COLORS: Record<Props["type"], string> = {
  "to-confirm": "bg-amber-100 text-amber-600",
  available: "bg-emerald-100 text-emerald-600",
  cancelled: "bg-red-100 text-red-600",
  confirmed: "bg-blue-100 text-blue-600",
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
        "flex gap-2 rounded-xl *:p-3 *:font-bold w- mx-auto justify-between *:leading-none overflow-hidden",
        HASH_COLORS[type],
        className
      )}
    >
      <div className="bg-white/50 h-full">Hora</div>
      <div className="flex gap-3">
        <span>Fecha: 11-01-2025</span>
        <span>|</span>
        <span>Horario: 13:00 - 13:45</span>
      </div>
    </div>
  );
};
