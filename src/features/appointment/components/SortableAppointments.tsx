import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import useSortableAppointments, {
  type AgendaColumns,
} from "../hooks/useSortableAppointments";

type Props = {
  children(cols: AgendaColumns[]): React.ReactNode;
};

const SortableAppointments: React.FC<Props> = ({ children }) => {
  const { columns, handleDragEnd } = useSortableAppointments();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={columns}>{children(columns)}</SortableContext>
    </DndContext>
  );
};

export default SortableAppointments;
