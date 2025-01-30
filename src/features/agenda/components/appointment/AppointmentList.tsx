import { useState } from "react";
import DateFns from "@/config/date-fns";
import Select from "@/features/_core/components/ui/selects/Select";
import Text from "@/features/_core/components/ui/Text";
import ColumnAppointmentAvailable from "./ColumnAppointmentAvailable";
import ColumnAppointmentCancelled from "./ColumnAppointmentCancelled";
import ColumnAppointmentConfirmed from "./ColumnAppointmentConfirmed";
import ColumnAppointmentToBeConfirm from "./ColumnAppointmentToBeConfirm";
import { createOptions } from "@/features/_core/utils/create-options.util";
import { APPOINTMENT_OPTIONS } from "../../utils/constants.util";
import type { SelectChangeEvHandler } from "@/config";
import type { AgendaColumns } from "../../domain";

const date = new DateFns();

type Props = {
  currentDate: Date;
};

const AppointmentList: React.FC<Props> = ({ currentDate }) => {
  const [appointmentFilter, setAppointmentFilter] = useState(
    APPOINTMENT_OPTIONS[0].value
  );
  const handleFilterAppointment: SelectChangeEvHandler = (e) => {
    const value = e.target.value as AgendaColumns;
    setAppointmentFilter(value);
  };

  return (
    <div className="w-full pt-4 pe-2 space-y-4">
      <div className="flex items-center gap-4 justify-between">
        <Text type="subtitle">
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
      {isVisible("available") && <ColumnAppointmentAvailable heightAuto />}
      {isVisible("to-confirm") && <ColumnAppointmentToBeConfirm heightAuto />}
      {isVisible("confirmed") && <ColumnAppointmentConfirmed heightAuto />}
      {isVisible("cancelled") && <ColumnAppointmentCancelled heightAuto />}
    </div>
  );
};
