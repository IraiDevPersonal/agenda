import { useViewProfessionalData } from "../../context/ViewProfessionalDataContext";
import Card from "../shared/Card";
import IconAvailable from "@/features/_core/components/icons/IconAvailable";
import AppointmentEntity from "../../domain/appointment.entity";

type Props = {
  appointment: AppointmentEntity;
};

const CardAvailableAppointment: React.FC<Props> = ({ appointment }) => {
  const { professional_name, time_to, time_from, professions } = appointment;
  const { showProfesionalData } = useViewProfessionalData();
  return (
    <Card id="available">
      <div className="flex flex-col mr-auto">
        {showProfesionalData && <strong>{professional_name}</strong>}
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

export default CardAvailableAppointment;
