import ShowProfessionalDataContext from "../context/ShowProfessionalDataContext";
import SortableColumn from "@/modules/_core/components/ui/SortableColumn";
import ArrayMap from "@/modules/_core/components/utils/ArrayMap";
import AppointmentEntity from "../domain/appointment.entity";
import cn from "@/config/pluggins/cn";
import type { AppointementTypes } from "../domain/types";

export type AppointmentColumnProps = {
  renderCard(appointment: AppointmentEntity): React.ReactNode;
  appointments: AppointmentEntity[];
  children: React.ReactNode;
  id: AppointementTypes;
  onClickCard(): void;
  isLoading?: boolean;
};

const AppointmentColumn: React.FC<AppointmentColumnProps> = ({
  appointments,
  onClickCard,
  renderCard,
  isLoading,
  children,
  id,
}) => {
  return (
    <SortableColumn
      title={
        <>
          {TITLES[id]}
          <span className="ml-2">({appointments.length})</span>
        </>
      }
      classNames={CLASSNAMES[id]}
      isLoading={isLoading}
      id={id}
    >
      <ShowProfessionalDataContext>
        <ArrayMap
          dataset={appointments}
          emptyContent={isLoading ? "Cargando..." : "No hay citas..."}
        >
          {(item) => (
            <li
              className={cn(
                "cursor-pointer transition-opacity duration-300",
                isLoading && "pointer-events-none cursor-default opacity-50",
              )}
              onClick={onClickCard}
              key={item.uid}
            >
              {renderCard(item)}
            </li>
          )}
        </ArrayMap>
        {children}
      </ShowProfessionalDataContext>
    </SortableColumn>
  );
};

export default AppointmentColumn;

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
    body: "",
    // body: "scrollbar-thumb-amber-200",
  },
  available: {
    wrapper: "text-emerald-700 bg-emerald-50/60 border-emerald-50",
    header: "hover:bg-emerald-100 cursor-move",
    body: "",
    // body: "scrollbar-thumb-emerald-200",
  },
  confirmed: {
    wrapper: "text-sky-700 bg-sky-50/60 border-sky-50",
    header: "hover:bg-sky-100 cursor-move",
    body: "",
    // body: "scrollbar-thumb-sky-200",
  },
  cancelled: {
    wrapper: "text-red-700 bg-red-50/60 border-red-50",
    header: "hover:bg-red-100 cursor-move",
    body: "",
    // body: "scrollbar-thumb-red-200",
  },
};
