import { IconAvailable } from "@/features/_core/components/icons";
import { useDialog } from "@/features/_core/hooks";
import { Card, Column } from "../shared";
import { DialogAppointmentAvailable } from "./DialogAppointmentAvailable";
import { useViewProfessionalInfo } from "../stores";

export const ColumnAppointmentAvailable = () => {
  const [isOpen, handleToggleOpen] = useDialog();
  return (
    <>
      <Column id="available" title="Disponibles" count={2}>
        {Array.from({ length: 50 }).map((_, idx) => (
          <li
            key={idx}
            onClick={handleToggleOpen}
            className="hover:cursor-pointer"
          >
            <AvailableCard />
          </li>
        ))}
      </Column>
      <DialogAppointmentAvailable isOpen={isOpen} onClose={handleToggleOpen} />
    </>
  );
};

const AvailableCard = () => {
  const { showProfesionalData } = useViewProfessionalInfo();
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
};
