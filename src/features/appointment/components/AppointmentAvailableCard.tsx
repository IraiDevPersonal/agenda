import { useShowProfessionalData } from "../context/ShowProfessionalDataContext";
import IconAvailable from "@/features/_core/components/icons/IconAvailable";
import AppointmentEntity from "../domain/appointment.entity";
import Card from "@/features/_core/components/ui/Card";

type Props = {
  appointment: AppointmentEntity;
};

const AppointmentAvailableCard: React.FC<Props> = ({ appointment }) => {
  const { professional_name, time_to, time_from, professions } = appointment;
  const { showProfesionalData } = useShowProfessionalData();

  return (
    <Card className="text-emerald-700 border-emerald-100/70 bg-emerald-50 shadow-emerald-700/10 hover:bg-emerald-100">
      <div className="flex flex-col mr-auto">
        {showProfesionalData && (
          <h5 className="capitalize font-bold">{professional_name}</h5>
        )}
        <span>
          Horario:{" "}
          <strong>
            {time_to} - {time_from}
          </strong>
        </span>
        {showProfesionalData && (
          <span>
            Profesión: <strong>{professions.join(", ")}</strong>
          </span>
        )}
      </div>
      <figure>
        <IconAvailable className="text-emerald-500" />
      </figure>
    </Card>
  );
};

export default AppointmentAvailableCard;
