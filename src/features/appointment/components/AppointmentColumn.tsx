import useDialog from "@/features/_core/hooks/useDialog";
import ShowProfessionalDataContext from "../context/ShowProfessionalDataContext";
import SortableColumn from "@/features/_core/components/ui/SortableColumn";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import IconLoading from "@/features/_core/components/icons/IconLoading";
import DialogAppointmentAvailable from "./DialogAppointmentAvailable";
import DialogAppointmentCancelled from "./DialogAppointmentCancelled";
import DialogAppointmentConfirmed from "./DialogAppointmentConfirmed";
import DialogAppointmentToConfirm from "./DialogAppointmentToConfirm";
import AppointmentAvailableCard from "./AppointmentAvailableCard";
import AppointmentCard from "./AppointmentCard";
import AppointmentEntity from "../domain/appointment.entity";
import type { DialogHandlerProps } from "@/config/types";
import type { AppointementTypes } from "../domain/types";

type Props = {
  appointments: AppointmentEntity[];
  id: AppointementTypes;
  isLoading?: boolean;
};

const AppointmentColumn: React.FC<Props> = ({ id, appointments, isLoading }) => {
  const [isOpen, onToggleIsOpen] = useDialog();
  return (
    <SortableColumn id={id} title={TITLES[id]} classNames={CLASSNAMES[id]}>
      <ShowProfessionalDataContext>
        <ArrayMap
          dataset={appointments}
          emptyContent={isLoading ? " " : "No hay citas..."}
        >
          {(item) => (
            <li key={item.uid} onClick={onToggleIsOpen} className="cursor-pointer">
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
      {isLoading && (
        <li className="w-full flex justify-center">
          <IconLoading className="animate-spin" height={32} width={32} />
        </li>
      )}
    </SortableColumn>
  );
};

export default AppointmentColumn;

const AppointmentDialogs: React.FC<{
  id: AppointementTypes;
  dialogProps: DialogHandlerProps;
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
