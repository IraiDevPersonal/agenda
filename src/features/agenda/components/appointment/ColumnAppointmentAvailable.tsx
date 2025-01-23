import { IconAvailable } from "@/features/_core/components/icons";
import { useDialog } from "@/features/_core/hooks";
import {
  AvailableAppointmentToggleFormContext,
  useViewProfessionalData,
} from "../../context";
import { Card, Column } from "../shared";
import { DialogAppointmentAvailable } from "./DialogAppointmentAvailable";

export const ColumnAppointmentAvailable = () => {
  const [isOpen, onToggleIsOpen] = useDialog();
  const handleClose = () => {
    onToggleIsOpen();
  };
  return (
    <AvailableAppointmentToggleFormContext>
      <Column id="available" title="Disponibles" count={2}>
        {Array.from({ length: 50 }).map((_, idx) => (
          <li key={idx} onClick={handleClose} className="hover:cursor-pointer">
            <AvailableCard />
          </li>
        ))}
      </Column>
      <DialogAppointmentAvailable isOpen={isOpen} onClose={handleClose} />
    </AvailableAppointmentToggleFormContext>
  );
};

const AvailableCard = () => {
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
};
