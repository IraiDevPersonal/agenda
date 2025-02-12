import Avatar from "@/features/_core/components/ui/Avatar";
import { AgendaColumns } from "../../domain/types";
import Card from "../shared/Card";
import AppointmentEntity from "../../domain/appointment.entity";

const HASH_COLORS: Record<AgendaColumns, string> = {
  "to-confirm": "bg-amber-100 text-amber-600",
  available: "bg-emerald-100 text-emerald-600",
  cancelled: "bg-red-100 text-red-600",
  confirmed: "bg-sky-100 text-sky-600",
};

type Props = {
  appointment: AppointmentEntity;
  className?: string;
  id: AgendaColumns;
};

const CardAppointment: React.FC<Props> = ({ appointment, ...props }) => {
  const { patient_name, patient_rut, patient_phone, time_from, time_to } =
    appointment;
  return (
    <Card {...props}>
      <Avatar
        alt="Paciente 1"
        classNames={{ fallback: HASH_COLORS[props.id] }}
      />
      <div className="w-full">
        <h5 className="font-bold">{patient_name}</h5>
        <span className="block">{patient_rut}</span>
        <div className="flex w-full gap-2">
          <span>{patient_phone}</span>
          <strong className="inline-block ml-auto">
            {time_to} - {time_from} <small>hrs</small>
          </strong>
        </div>
      </div>
    </Card>
  );
};

export default CardAppointment;
