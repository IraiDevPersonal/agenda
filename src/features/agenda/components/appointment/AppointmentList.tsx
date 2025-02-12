import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconChevronRight from "@/features/_core/components/icons/IconChevronRight";
import Button from "@/features/_core/components/ui/Button";
import Select from "@/features/_core/components/ui/selects/Select";
import Text from "@/features/_core/components/ui/Text";
import ColumnAppointmentAvailable from "./ColumnAppointmentAvailable";
import ColumnAppointmentCancelled from "./ColumnAppointmentCancelled";
import ColumnAppointmentConfirmed from "./ColumnAppointmentConfirmed";
import ColumnAppointmentToBeConfirm from "./ColumnAppointmentToBeConfirm";
import { createOptions } from "@/features/_core/utils/create-options.util";
import { APPOINTMENT_OPTIONS } from "../../utils/constants.util";
import { Now, ROUTES, type SelectChangeEvHandler } from "@/config";
import type { AgendaColumns } from "../../domain";

type Props = {
  date: Date;
};

const AppointmentList: React.FC<Props> = ({ date }) => {
  const navigate = useNavigate();
  const [appointmentFilter, setAppointmentFilter] = useState(
    APPOINTMENT_OPTIONS[0].value
  );
  const handleFilterAppointment: SelectChangeEvHandler = (e) => {
    const value = e.target.value as AgendaColumns;
    setAppointmentFilter(value);
  };
  const handleNavigateToMyDay = () => {
    navigate(ROUTES.ROOT);
  };

  return (
    <div className="w-full pt-4 pe-2 space-y-4">
      <div className="flex items-center gap-4">
        <Text type="subtitle" className="mr-auto">
          {new Now().format(date, "dd-of-mmmm-of-yyyy")}
        </Text>
        <Select
          value={appointmentFilter}
          onChange={handleFilterAppointment}
          options={createOptions({
            options: APPOINTMENT_OPTIONS,
            customLabel: "Todos",
            customValue: "all",
          })}
        />
        <Button
          size="icon"
          title="Ir a ver completo"
          onClick={handleNavigateToMyDay}
        >
          <IconChevronRight />
        </Button>
      </div>
      <List appointmentFilter={appointmentFilter} />
    </div>
  );
};

export default AppointmentList;

const List: React.FC<{ appointmentFilter: AgendaColumns | "all" }> = ({
  appointmentFilter,
}) => {
  const isVisible = (value: AgendaColumns) => {
    return appointmentFilter === "all" || appointmentFilter === value;
  };

  return (
    <div className="h-[calc(100vh-9.5rem)] overflow-y-auto scrollbar-styles scrollbar-thumb-transparent space-y-4">
      {isVisible("available") && <ColumnAppointmentAvailable />}
      {isVisible("to-confirm") && <ColumnAppointmentToBeConfirm />}
      {isVisible("confirmed") && <ColumnAppointmentConfirmed />}
      {isVisible("cancelled") && <ColumnAppointmentCancelled />}
    </div>
  );
};
