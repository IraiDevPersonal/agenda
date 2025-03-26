import useAppointments from "../hooks/useAppointments";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import SortableAppointments from "./SortableAppointments";
import Box from "@/features/_core/components/ui/Box";
import AvailableAppointments from "./AvailableAppointments";
import CancelledAppointments from "./CancelledAppointments";
import ConfirmedAppointments from "./ConfirmedAppointments";
import ToConfirmAppointments from "./ToConfirmAppointments";

const Appointments = () => {
  const { data, isFetching } = useAppointments();

  return (
    <Box as="div" className="flex flex-wrap gap-4 *:max-w-[390px]">
      <SortableAppointments>
        {(columns) => (
          <ArrayMap dataset={columns}>
            {({ id }) => (
              <>
                {id === "available" && (
                  <AvailableAppointments
                    isLoading={isFetching}
                    appointments={data!.availables}
                  />
                )}
                {id === "cancelled" && (
                  <CancelledAppointments
                    isLoading={isFetching}
                    appointments={data!.cancelled}
                  />
                )}
                {id === "confirmed" && (
                  <ConfirmedAppointments
                    isLoading={isFetching}
                    appointments={data!.confirmed}
                  />
                )}
                {id === "to-confirm" && (
                  <ToConfirmAppointments
                    isLoading={isFetching}
                    appointments={data!.toConfirm}
                  />
                )}
              </>
            )}
          </ArrayMap>
        )}
      </SortableAppointments>
    </Box>
  );
};

export default Appointments;
