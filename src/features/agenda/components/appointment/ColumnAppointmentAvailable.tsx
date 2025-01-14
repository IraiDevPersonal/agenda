import { IconAvailable } from "@/features/_core/components/icons";
import { useDialog } from "@/features/_core/hooks";
import { Card, Column } from "../shared";
import { DialogAppointmentAvailable } from "./DialogAppointmentAvailable";

type Props = {
  hideProfesionalData?: boolean;
};

export const ColumnAppointmentAvailable: React.FC<Props> = ({
  hideProfesionalData = false,
}) => {
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
            <AvailableCard hideProfesionalData={hideProfesionalData} />
          </li>
        ))}
      </Column>
      <DialogAppointmentAvailable isOpen={isOpen} onClose={handleToggleOpen} />
    </>
  );
};

const AvailableCard: React.FC<{ hideProfesionalData: boolean }> = ({
  hideProfesionalData,
}) => {
  return (
    <Card id="available">
      <div className="flex flex-col mr-auto">
        {!hideProfesionalData && <strong>Nombre profesional</strong>}
        <span>
          Horario: <strong>13:00 - 13:45</strong>
        </span>
        {!hideProfesionalData && (
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
