import { useDialog } from "@/features/_core/hooks";
import Column from "../shared/Column";
import CardAppointment from "./CardAppointment";
import DialogAppointmentToConfirm from "./DialogAppointmentToConfirm";

type Props = { heightAuto?: boolean; isHovereableHeader?: boolean };

const ColumnAppointmentToBeConfirm: React.FC<Props> = (props) => {
  const [isOpen, handleToggleOpen] = useDialog();
  return (
    <>
      <Column {...props} title="Por Confirmar" id="to-confirm" count={2}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <li
            key={idx}
            onClick={handleToggleOpen}
            className="hover:cursor-pointer"
          >
            <CardAppointment id="to-confirm" />
          </li>
        ))}
        <DialogAppointmentToConfirm
          isOpen={isOpen}
          onClose={handleToggleOpen}
        />
      </Column>
    </>
  );
};

export default ColumnAppointmentToBeConfirm;
