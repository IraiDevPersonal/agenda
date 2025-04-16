import useAppointmentList from "../hooks/useAppointmentListFilter";
import useAppointments from "../hooks/useAppointments";
import IconChevronRight from "@/modules/_core/components/icons/IconChevronRight";
import Button from "@/modules/_core/components/ui/Button";
import Select from "@/modules/_core/components/ui/selects/Select";
import Text from "@/modules/_core/components/ui/Text";
import AvailableAppointments from "./AvailableAppointments";
import CancelledAppointments from "./CancelledAppointments";
import ConfirmedAppointments from "./ConfirmedAppointments";
import ToConfirmAppointments from "./ToConfirmAppointments";
import AgendaEntity from "@/modules/agenda/domain/agenda.entity";
import DateHelper from "@/config/pluggins/date-helper";
import { createOptions } from "@/modules/_core/utils/create-options.util";
import { APPOINTMENT_OPTIONS } from "@/modules/appointment/utils/constants.util";
import type { AppointementTypes } from "@/modules/appointment/domain/types";

type Props = {
  date: Date;
};

const AppointmentList: React.FC<Props> = ({ date }) => {
  const { listFilter, handleFilterList, handleNavigateToMyDay } = useAppointmentList();
  const { data, isFetching } = useAppointments();

  return (
    <div className="w-full pt-4 pe-4 space-y-4">
      <div className="flex items-center gap-4">
        <Text type="subtitle" className="mr-auto">
          {DateHelper.format(date, "dd-of-mmmm-of-yyyy")}
        </Text>
        <Select
          onChange={handleFilterList}
          value={listFilter}
          options={createOptions({
            options: APPOINTMENT_OPTIONS,
            customLabel: "Todos",
            customValue: "all",
          })}
        />
        <Button size="icon" title="Ir a a dia completo" onClick={handleNavigateToMyDay}>
          <IconChevronRight />
        </Button>
      </div>
      <List isLoading={isFetching} filter={listFilter} agenda={data!} />
    </div>
  );
};

export default AppointmentList;

type ListProps = {
  filter: AppointementTypes | "all";
  agenda: AgendaEntity;
  isLoading?: boolean;
};

const List: React.FC<ListProps> = ({ agenda, filter, isLoading }) => {
  return (
    <>
      <div className="h-[calc(100vh-9.5rem)] overflow-y-auto scrollbar-styles scrollbar-thumb-transparent space-y-4">
        {(filter === "all" || filter === "available") && (
          <AvailableAppointments isLoading={isLoading} appointments={agenda.availables} />
        )}
        {(filter === "all" || filter === "cancelled") && (
          <CancelledAppointments isLoading={isLoading} appointments={agenda.cancelled} />
        )}
        {(filter === "all" || filter === "confirmed") && (
          <ConfirmedAppointments isLoading={isLoading} appointments={agenda.confirmed} />
        )}
        {(filter === "all" || filter === "to-confirm") && (
          <ToConfirmAppointments isLoading={isLoading} appointments={agenda.toConfirm} />
        )}
      </div>
    </>
  );
};
