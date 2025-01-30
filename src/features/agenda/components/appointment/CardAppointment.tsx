import Avatar from "@/features/_core/components/ui/Avatar";
import { AgendaColumns } from "../../domain";
import Card from "../shared/Card";

const HASH_COLORS: Record<AgendaColumns, string> = {
  "to-confirm": "bg-amber-100 text-amber-600",
  available: "bg-emerald-100 text-emerald-600",
  cancelled: "bg-red-100 text-red-600",
  confirmed: "bg-sky-100 text-sky-600",
};

type Props = {
  shouldShowShadow?: boolean;
  shouldHoverScale?: boolean;
  className?: string;
  id: AgendaColumns;
};

const CardAppointment: React.FC<Props> = (props) => {
  return (
    <Card {...props}>
      <Avatar
        alt="Paciente 1"
        classNames={{ fallback: HASH_COLORS[props.id] }}
      />
      <div className="w-full">
        <h5 className="font-bold">Nombre paciente</h5>
        <span className="block">1.111.111-1</span>
        <div className="flex w-full gap-2">
          <span>+56 9 1234 5678</span>
          <strong className="inline-block ml-auto">
            13:00 - 13:45 <small>hrs</small>
          </strong>
        </div>
      </div>
    </Card>
  );
};

export default CardAppointment;
