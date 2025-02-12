import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import AppointmentGrid from "./AppointmentGrid";
import IconLoading from "@/features/_core/components/icons/IconLoading";
import { AGENDA_COLUMNS } from "../../utils/constants.util";

const AppointmentFallback = () => {
  return (
    <AppointmentGrid>
      <ArrayMap dataset={AGENDA_COLUMNS}>
        {(_, idx) => (
          <section
            key={idx}
            className=" relative overflow-hidden w-full p-0 rounded-2xl h-[90vh] bg-accent animate-pulse grid place-content-center"
          >
            <IconLoading className="size-8 animate-spin text-muted-foreground/40" />
          </section>
        )}
      </ArrayMap>
    </AppointmentGrid>
  );
};

export default AppointmentFallback;
