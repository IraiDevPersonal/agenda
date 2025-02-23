import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import ViewProfessionalDataContext from "../../context/ViewProfessionalDataContext";
import AppointmentGrid from "./AppointmentGrid";
import Appointments from "./Appointments";
import useSortableAppointments from "../../hooks/useSortableAppointments";

const AppointmentsPresenter = () => {
  const { columns, handleDragEnd } = useSortableAppointments();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={columns}>
        <ViewProfessionalDataContext>
          <AppointmentGrid>
            <Appointments columns={columns} />
          </AppointmentGrid>
        </ViewProfessionalDataContext>
      </SortableContext>
    </DndContext>
  );
};

export default AppointmentsPresenter;
