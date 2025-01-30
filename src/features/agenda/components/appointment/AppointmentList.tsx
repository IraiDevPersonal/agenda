import { ROUTES, type SelectChangeEvHandler } from "@/config";
import DateFns from "@/config/date-fns";
import IconChevronRight from "@/features/_core/components/icons/IconChevronRight";
import Button from "@/features/_core/components/ui/Button";
import Select from "@/features/_core/components/ui/selects/Select";
import Text from "@/features/_core/components/ui/Text";
import { createOptions } from "@/features/_core/utils/create-options.util";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AgendaColumns } from "../../domain";
import { APPOINTMENT_OPTIONS } from "../../utils/constants.util";
import ColumnAppointmentAvailable from "./ColumnAppointmentAvailable";
import ColumnAppointmentCancelled from "./ColumnAppointmentCancelled";
import ColumnAppointmentConfirmed from "./ColumnAppointmentConfirmed";
import ColumnAppointmentToBeConfirm from "./ColumnAppointmentToBeConfirm";

const date = new DateFns();

type Props = {
  currentDate: Date;
};

const AppointmentList: React.FC<Props> = ({ currentDate }) => {
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
          {date.format({ date: currentDate, format: "full_date_es" })}
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
      <MainList appointmentFilter={appointmentFilter} />
    </div>
  );
};

export default AppointmentList;

const MainList: React.FC<{ appointmentFilter: AgendaColumns | "all" }> = ({
  appointmentFilter,
}) => {
  const isVisible = (value: AgendaColumns) => {
    return appointmentFilter === "all" || appointmentFilter === value;
  };

  return (
    <div className="h-[calc(100vh-9.5rem)] overflow-y-auto scrollbar-styles scrollbar-thumb-transparent space-y-4">
      {isVisible("available") && (
        <ColumnAppointmentAvailable heightAuto isHovereableHeader={false} />
      )}
      {isVisible("to-confirm") && (
        <ColumnAppointmentToBeConfirm heightAuto isHovereableHeader={false} />
      )}
      {isVisible("confirmed") && (
        <ColumnAppointmentConfirmed heightAuto isHovereableHeader={false} />
      )}
      {isVisible("cancelled") && (
        <ColumnAppointmentCancelled heightAuto isHovereableHeader={false} />
      )}
    </div>
  );
};
