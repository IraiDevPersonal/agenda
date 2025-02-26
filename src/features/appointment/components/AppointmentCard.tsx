import Card from "@/features/_core/components/ui/Card";
import AppointmentEntity from "../domain/appointment.entity";
import Avatar from "@/features/_core/components/ui/Avatar";
import type { AppointementTypes } from "../domain/types";

type Props = {
  appointment: AppointmentEntity;
  id: Exclude<AppointementTypes, "available">;
};

const AppointmentCard: React.FC<Props> = ({ id, appointment }) => {
  const { patient_name, patient_rut, patient_phone, time_from, time_to } = appointment;

  return (
    <Card className={HASH_COLORS[id].card}>
      <Avatar alt="Paciente 1" classNames={{ fallback: HASH_COLORS[id].avatar }} />
      <div className="w-full">
        <h5 className="font-bold capitalize">{patient_name}</h5>
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

export default AppointmentCard;

const HASH_COLORS: Record<Props["id"], { avatar: string; card: string }> = {
  "to-confirm": {
    avatar: "bg-amber-100 text-amber-600",
    card: "text-amber-700 border-amber-100/70 bg-amber-50 shadow-amber-700/10 hover:bg-amber-100",
  },
  cancelled: {
    avatar: "bg-red-100 text-red-600",
    card: "text-red-700 border-red-100/70 bg-red-50 shadow-red-700/10 hover:bg-red-100 not",
  },
  confirmed: {
    avatar: "bg-sky-100 text-sky-600",
    card: "text-sky-700 border-sky-100/70 bg-sky-50 shadow-sky-700/10 hover:bg-sky-100 not",
  },
};
