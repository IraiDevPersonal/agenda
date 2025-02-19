import { Suspense } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import ViewProfessionalDataContext from "../../context/ViewProfessionalDataContext";
import AgendaService from "../../services/agenda.service";
import AppointmentFallback from "./AppointmentFallback";
import AppointmentGrid from "./AppointmentGrid";
import Appointments from "./Appointments";
import useSortableAppointments from "../../hooks/useSortableAppointments";
import useFilterAppointments from "../../hooks/useFilterAppointments";

const agenda = new AgendaService();

const AppointmentsPresenter = () => {
  const { columns, handleDragEnd } = useSortableAppointments();
  const { appointmentsFilters } = useFilterAppointments();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={columns}>
        <ViewProfessionalDataContext>
          <Suspense fallback={<AppointmentFallback />}>
            <AppointmentGrid>
              <Appointments
                columns={columns}
                getAppointments={agenda.getAppointments(appointmentsFilters)}
              />
            </AppointmentGrid>
          </Suspense>
        </ViewProfessionalDataContext>
      </SortableContext>
    </DndContext>
  );
};

export default AppointmentsPresenter;
