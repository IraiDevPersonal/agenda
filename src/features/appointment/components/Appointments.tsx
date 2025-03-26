import React from "react";
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
              <React.Fragment key={id}>
                {id === "available" && (
                  <AvailableAppointments
                    appointments={data!.availables}
                    isLoading={isFetching}
                  />
                )}
                {id === "cancelled" && (
                  <CancelledAppointments
                    appointments={data!.cancelled}
                    isLoading={isFetching}
                  />
                )}
                {id === "confirmed" && (
                  <ConfirmedAppointments
                    appointments={data!.confirmed}
                    isLoading={isFetching}
                  />
                )}
                {id === "to-confirm" && (
                  <ToConfirmAppointments
                    appointments={data!.toConfirm}
                    isLoading={isFetching}
                  />
                )}
              </React.Fragment>
            )}
          </ArrayMap>
        )}
      </SortableAppointments>
    </Box>
  );
};

export default Appointments;
