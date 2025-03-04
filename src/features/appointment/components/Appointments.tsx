import useAppointments from "../hooks/useAppointments";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import SortableAppointments from "./SortableAppointments";
import AppointmentColumn from "./AppointmentColumn";
import Box from "@/features/_core/components/ui/Box";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";

const Appointments = () => {
  const { data, isFetching } = useAppointments();

  return (
    <Box as="div" className="flex flex-wrap gap-4 *:w-96">
      <SortableAppointments>
        {(columns) => (
          <ArrayMap dataset={columns}>
            {({ id }) => (
              <AppointmentColumn
                id={id}
                key={id}
                isLoading={isFetching}
                appointments={AgendaEntity.appointmentViewerAdapter(data!)[id]}
              />
            )}
          </ArrayMap>
        )}
      </SortableAppointments>
    </Box>
  );
};

export default Appointments;
