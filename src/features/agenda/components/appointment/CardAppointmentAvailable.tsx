import { memo } from "react";
import { useViewProfessionalData } from "../../context";
import Card from "../shared/Card";
import IconAvailable from "@/features/_core/components/icons/IconAvailable";

const CardAvailableAppointment = memo(() => {
  const { showProfesionalData } = useViewProfessionalData();
  return (
    <Card id="available">
      <div className="flex flex-col mr-auto">
        {showProfesionalData && <strong>Nombre profesional</strong>}
        <span>
          Horario: <strong>13:00 - 13:45</strong>
        </span>
        {showProfesionalData && (
          <span>
            Profesión: <strong>Psicologo(a)</strong>
          </span>
        )}
      </div>
      <figure>
        <IconAvailable className="text-emerald-500" />
      </figure>
    </Card>
  );
});

export default CardAvailableAppointment;
