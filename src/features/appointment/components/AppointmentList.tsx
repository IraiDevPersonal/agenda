import { useNavigate } from "react-router-dom";
import useAppointmentFilters from "../hooks/useAppointmentFilters";
import useAppointments from "../hooks/useAppointments";
import useAppointmentListFilter from "../hooks/useAppointmentListFilter";
import IconChevronRight from "@/features/_core/components/icons/IconChevronRight";
import Button from "@/features/_core/components/ui/Button";
import Select from "@/features/_core/components/ui/selects/Select";
import Text from "@/features/_core/components/ui/Text";
import DateHelper from "@/config/date-helper";
import { createOptions } from "@/features/_core/utils/create-options.util";
import { APPOINTMENT_OPTIONS } from "@/features/appointment/utils/constants.util";
import AppointmentColumn from "./AppointmentColumn";
import AgendaEntity from "@/features/agenda/domain/agenda.entity";
import ROUTES from "@/config/routes";
import type { AppointementTypes } from "@/features/appointment/domain/types";

type Props = {
  date: Date;
};

const AppointmentList: React.FC<Props> = ({ date }) => {
  const navigate = useNavigate();
  const { filter, handleFilter } = useAppointmentListFilter();
  const { appointmentFiltersAsString } = useAppointmentFilters();
  const { data, isFetching } = useAppointments();

  const handleNavigateToMyDay = () => {
    navigate(`${ROUTES.AGENDA_DETAIL}?${appointmentFiltersAsString}`);
  };

  return (
    <div className="w-full pt-4 pe-2 space-y-4 max-w-xl">
      <div className="flex items-center gap-4">
        <Text type="subtitle" className="mr-auto">
          {DateHelper.format(date, "dd-of-mmmm-of-yyyy")}
        </Text>
        <Select
          value={filter}
          onChange={handleFilter}
          options={createOptions({
            options: APPOINTMENT_OPTIONS,
            customLabel: "Todos",
            customValue: "all",
          })}
        />
        <Button size="icon" title="Ir a ver completo" onClick={handleNavigateToMyDay}>
          <IconChevronRight />
        </Button>
      </div>
      <List filter={filter} agenda={data!} isLoading={isFetching} />
    </div>
  );
};

export default AppointmentList;

type ListProps = {
  filter: AppointementTypes | "all";
  agenda: AgendaEntity;
  isLoading?: boolean;
};

const List: React.FC<ListProps> = ({ filter, agenda, ...props }) => {
  return (
    <>
      <div className="h-[calc(100vh-9.5rem)] overflow-y-auto scrollbar-styles scrollbar-thumb-transparent space-y-4">
        {filter === "all" ? (
          <AllAppointmentColumns agenda={agenda} {...props} />
        ) : (
          <AppointmentColumn
            {...props}
            id={filter}
            appointments={AgendaEntity.appointmentViewerAdapter(agenda)[filter]}
          />
        )}
      </div>
    </>
  );
};

const AllAppointmentColumns: React.FC<Pick<ListProps, "agenda" | "isLoading">> = ({
  agenda,
  ...props
}) => {
  return (
    <>
      <AppointmentColumn id="available" appointments={agenda.availables} {...props} />
      <AppointmentColumn id="to-confirm" appointments={agenda.toConfirm} {...props} />
      <AppointmentColumn id="confirmed" appointments={agenda.confirmed} {...props} />
      <AppointmentColumn id="cancelled" appointments={agenda.cancelled} {...props} />
    </>
  );
};
