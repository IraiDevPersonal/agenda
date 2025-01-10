import { useDialog } from "@/features/_core/hooks";
import { Column } from "../shared";
import { AppointmentCard, DialogAppointmentConfirmed } from "./";

export const ColumnAppointmentConfirmed = () => {
  const [isOpen, handleToogleOpen] = useDialog();
  return (
    <Column
      id="confirmed"
      title="Confirmadas"
      count={2}
      classNames={{
        wrapper: "text-sky-700 bg-sky-100",
        header: "hover:bg-sky-200",
        body: "scrollbar-thumb-skyt-700",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <li
          key={idx}
          onClick={handleToogleOpen}
          className="hover:cursor-pointer"
        >
          <AppointmentCard
            key={idx}
            className="border-sky-600/10 text-sky-700 shadow-sky-700/15"
          />
        </li>
      ))}
      <DialogAppointmentConfirmed isOpen={isOpen} onClose={handleToogleOpen} />
    </Column>
  );
};
