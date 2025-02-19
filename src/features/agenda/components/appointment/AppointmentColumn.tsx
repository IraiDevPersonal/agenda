import { useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import useDialog from "@/features/_core/hooks/useDialog";
import { CSS } from "@dnd-kit/utilities";
import Box from "@/features/_core/components/ui/Box";
import DialogAppointmentAvailable from "./DialogAppointmentAvailable";
import DialogAppointmentCancelled from "./DialogAppointmentCancelled";
import DialogAppointmentConfirmed from "./DialogAppointmentConfirmed";
import DialogAppointmentToConfirm from "./DialogAppointmentToConfirm";
import cn from "@/config/tailwind-merge";
import { HASH_COLUMN_TITLE, HASH_COLUMNS_STYLES } from "../../utils/constants.util";
import AppointmentEntity from "../../domain/appointment.entity";
import type { AgendaColumns } from "../../domain/types";

export type AppointmentColumnProps = {
  children(item: any, idx: number): React.ReactNode;
  appointments: AppointmentEntity[];
  className?: string;
  id: AgendaColumns;
};

const AppointmentColumn: React.FC<AppointmentColumnProps> = ({
  appointments,
  className,
  children,
  id,
}) => {
  const [isOpen, onToggleOpen] = useDialog();
  const { attributes, listeners, setNodeRef, transform, transition, items } = useSortable(
    { id },
  );
  const style = useMemo(() => {
    return {
      transform: CSS.Transform.toString(transform),
      transition,
    };
  }, [transform, transition]);
  const hasItems = useMemo(() => items.length > 0, [items]);

  return (
    <Box
      as="section"
      ref={setNodeRef}
      style={style}
      className={cn(
        "w-full p-0 rounded-2xl border overflow-hidden",
        hasItems ? "h-[90vh]" : "pb-4",
        HASH_COLUMNS_STYLES[id].wrapper,
        className,
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className={cn(
          "px-4 py-2.5 transition-colors duration-300 flex justify-between items-center cursor-default",
          hasItems && HASH_COLUMNS_STYLES[id].header,
        )}
      >
        <h3 className="text-lg font-bold">
          {HASH_COLUMN_TITLE[id]} ({appointments.length})
        </h3>
      </div>
      <ul
        className={cn(
          "px-4 pt-2 space-y-2 scrollbar-styles",
          hasItems && "h-[calc(100%-65px)] overflow-y-auto",
          HASH_COLUMNS_STYLES[id].body,
        )}
      >
        {appointments.map((item, idx) => (
          <li className="hover:cursor-pointer" key={idx} onClick={onToggleOpen}>
            {children(item, idx)}
          </li>
        ))}
      </ul>
      <AppointmentDialogs id={id} isOpen={isOpen} onClose={onToggleOpen} />
    </Box>
  );
};

export default AppointmentColumn;

type AppointmentDialogsProps = {
  id: AgendaColumns;
  isOpen: boolean;
  onClose: () => void;
};

const AppointmentDialogs: React.FC<AppointmentDialogsProps> = (props) => {
  switch (props.id) {
    case "available":
      return <DialogAppointmentAvailable {...props} />;
    case "cancelled":
      return <DialogAppointmentCancelled {...props} />;
    case "confirmed":
      return <DialogAppointmentConfirmed {...props} />;
    case "to-confirm":
      return <DialogAppointmentToConfirm {...props} />;
    default:
      return null;
  }
};
