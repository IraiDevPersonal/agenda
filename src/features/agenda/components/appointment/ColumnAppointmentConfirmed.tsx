import { useDialog } from "@/features/_core/hooks";
import Column from "../shared/Column";
import CardAppointment from "./CardAppointment";
import DialogAppointmentConfirmed from "./DialogAppointmentConfirmed";

type Props = { heightAuto?: boolean };

const ColumnAppointmentConfirmed: React.FC<Props> = ({ heightAuto }) => {
  const [isOpen, handleToogleOpen] = useDialog();
  return (
    <>
      <Column
        heightAuto={heightAuto}
        title="Confirmadas"
        id="confirmed"
        count={2}
      >
        {Array.from({ length: 5 }).map((_, idx) => (
          <li
            key={idx}
            onClick={handleToogleOpen}
            className="hover:cursor-pointer"
          >
            <CardAppointment id="confirmed" />
          </li>
        ))}
        <DialogAppointmentConfirmed
          isOpen={isOpen}
          onClose={handleToogleOpen}
        />
      </Column>
    </>
  );
};

export default ColumnAppointmentConfirmed;
