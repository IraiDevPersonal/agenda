import { Suspense } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useSortableAppointments } from "../../hooks";
import ViewProfessionalDataContext from "../../context/ViewProfessionalDataContext";
import AgendaService from "../../services/agenda.service";
import AppointmentFallback from "./AppointmentFallback";
import AppointmentGrid from "./AppointmentGrid";
import Appointments from "./Appointments";
import { useSearchParams } from "react-router-dom";

const agenda = new AgendaService();

const AppointmentsPresenter = () => {
  const { columns, handleDragEnd } = useSortableAppointments();
  const [query] = useSearchParams();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={columns}>
        <ViewProfessionalDataContext showProfesionalData>
          <Suspense fallback={<AppointmentFallback />}>
            <AppointmentGrid>
              <Appointments
                columns={columns}
                getAppointments={agenda.getAppointments({
                  patient_rut: query.get("patient_rut"),
                  date: query.get("date"),
                })}
              />
            </AppointmentGrid>
          </Suspense>
        </ViewProfessionalDataContext>
      </SortableContext>
    </DndContext>
  );
};

export default AppointmentsPresenter;
