import useDialog from "@/features/_core/hooks/useDialog";
import ShowProfessionalDataContext from "../context/ShowProfessionalDataContext";
import SortableColumn from "@/features/_core/components/ui/SortableColumn";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import DialogAppointmentAvailable from "./DialogAppointmentAvailable";
import DialogAppointmentCancelled from "./DialogAppointmentCancelled";
import DialogAppointmentConfirmed from "./DialogAppointmentConfirmed";
import DialogAppointmentToConfirm from "./DialogAppointmentToConfirm";
import AppointmentAvailableCard from "./AppointmentAvailableCard";
import AppointmentCard from "./AppointmentCard";
import AppointmentEntity from "../domain/appointment.entity";
import cn from "@/config/tailwind-merge";
import type { DialogPropsHandler } from "@/config/types";
import type { AppointementTypes } from "../domain/types";

type Props = {
  appointments: AppointmentEntity[];
  id: AppointementTypes;
  isLoading?: boolean;
};

const AppointmentColumn: React.FC<Props> = ({ id, appointments, isLoading }) => {
  const [isOpen, onToggleIsOpen] = useDialog();
  return (
    <SortableColumn
      classNames={CLASSNAMES[id]}
      isLoading={isLoading}
      title={
        <>
          {TITLES[id]}
          <span className="ml-2">({appointments.length})</span>
        </>
      }
      id={id}
    >
      <ShowProfessionalDataContext>
        <ArrayMap
          dataset={appointments}
          emptyContent={isLoading ? "Cargando..." : "No hay citas..."}
        >
          {(item) => (
            <li
              key={item.uid}
              onClick={onToggleIsOpen}
              className={cn(
                "cursor-pointer transition-opacity duration-300",
                isLoading && "pointer-events-none cursor-default opacity-50",
              )}
            >
              {id === "available" ? (
                <AppointmentAvailableCard appointment={item} />
              ) : (
                <AppointmentCard id={id} appointment={item} />
              )}
            </li>
          )}
        </ArrayMap>
        <AppointmentDialogs id={id} dialogProps={{ isOpen, onClose: onToggleIsOpen }} />
      </ShowProfessionalDataContext>
    </SortableColumn>
  );
};

export default AppointmentColumn;

const AppointmentDialogs: React.FC<{
  id: AppointementTypes;
  dialogProps: DialogPropsHandler;
}> = ({ dialogProps, id }) => {
  switch (id) {
    case "available":
      return <DialogAppointmentAvailable {...dialogProps} />;
    case "cancelled":
      return <DialogAppointmentCancelled {...dialogProps} />;
    case "confirmed":
      return <DialogAppointmentConfirmed {...dialogProps} />;
    case "to-confirm":
      return <DialogAppointmentToConfirm {...dialogProps} />;
    default:
      return null;
  }
};

const TITLES: Record<AppointementTypes, string> = {
  "to-confirm": "Por confirmar",
  available: "Disponibles",
  cancelled: "Canceladas",
  confirmed: "Confirmadas",
};

const CLASSNAMES: Record<
  AppointementTypes,
  { header: string; body: string; wrapper: string }
> = {
  "to-confirm": {
    wrapper: "text-amber-700 bg-amber-50/60 border-amber-50",
    header: "hover:bg-amber-100 cursor-move",
    body: "scrollbar-thumb-amber-200",
  },
  available: {
    wrapper: "text-emerald-700 bg-emerald-50/60 border-emerald-50",
    header: "hover:bg-emerald-100 cursor-move",
    body: "scrollbar-thumb-emerald-200",
  },
  confirmed: {
    wrapper: "text-sky-700 bg-sky-50/60 border-sky-50",
    header: "hover:bg-sky-100 cursor-move",
    body: "scrollbar-thumb-sky-200",
  },
  cancelled: {
    wrapper: "text-red-700 bg-red-50/60 border-red-50",
    header: "hover:bg-red-100 cursor-move",
    body: "scrollbar-thumb-red-200",
  },
};
