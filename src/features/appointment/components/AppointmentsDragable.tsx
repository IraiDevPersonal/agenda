import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import useSortableAppointments from "@/features/agenda/hooks/useSortableAppointments";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import AppointmentColumn from "./AppointmentColumn";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";
import Box from "@/features/_core/components/ui/Box";

type Props = {
  agendaAppointments: AgendaEntity;
};

const AppointmentsDragable: React.FC<Props> = ({ agendaAppointments }) => {
  const { columns, handleDragEnd } = useSortableAppointments();

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={columns}>
          <Box as="div" className="flex flex-wrap gap-4 *:w-96">
            <ArrayMap dataset={columns}>
              {({ id }) => (
                <AppointmentColumn
                  id={id}
                  key={id}
                  appointments={
                    AgendaEntity.appointmentViewerAdapter(agendaAppointments)[id]
                  }
                />
              )}
            </ArrayMap>
          </Box>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default AppointmentsDragable;
