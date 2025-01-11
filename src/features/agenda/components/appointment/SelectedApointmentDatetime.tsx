import { cn } from "@/config";
import { AgendaColumn } from "../../domain";

const HASH_COLORS: Record<AgendaColumn["id"], string> = {
  "to-be-confirm": "bg-amber-100 text-amber-600",
  available: "bg-emerald-100 text-emerald-600",
  cancelled: "bg-red-100 text-red-600",
  confirmed: "bg-blue-100 text-blue-600",
};

type Props = {
  id: AgendaColumn["id"];
};

export const SelectedApointmentTime: React.FC<Props> = ({ id }) => {
  return (
    <div
      className={cn(
        "flex gap-2 rounded-xl p-3 font-semibold italic w-full justify-center *:leading-none",
        HASH_COLORS[id]
      )}
    >
      <span>Fecha: 11-01-2025</span>
      <span>|</span>
      <span>Horario: 13:00 - 13:45</span>
    </div>
  );
};
