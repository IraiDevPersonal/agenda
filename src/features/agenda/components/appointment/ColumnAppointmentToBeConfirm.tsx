import { useDialog } from "@/features/_core/hooks";
import { Column } from "../shared";
import { AppointmentCard } from "./AppointmentCard";
import { DialogAppointmentToBeConform } from "./DialogAppointmentToBeConfirm";

export const ColumnAppointmentToBeConfirm = () => {
  const [isOpen, handleToggleOpen] = useDialog();
  return (
    <Column
      count={2}
      id="to-be-confirm"
      title="Por Confirmar"
      classNames={{
        wrapper: "text-amber-700 bg-amber-100",
        header: "hover:bg-amber-200",
        body: "scrollbar-thumb-amber-700",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <li
          key={idx}
          onClick={handleToggleOpen}
          className="hover:cursor-pointer"
        >
          <AppointmentCard className="text-amber-700 border-amber-600/10 shadow-amber-700/15" />
        </li>
      ))}
      <DialogAppointmentToBeConform
        isOpen={isOpen}
        onClose={handleToggleOpen}
      />
    </Column>
  );
};
