import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconChevronRight from "@/features/_core/components/icons/IconChevronRight";
import Button from "@/features/_core/components/ui/Button";
import Select from "@/features/_core/components/ui/selects/Select";
import Text from "@/features/_core/components/ui/Text";
// import ColumnAppointmentAvailable from "../appointment/ColumnAppointmentAvailable";
// import ColumnAppointmentCancelled from "../appointment/ColumnAppointmentCancelled";
// import ColumnAppointmentConfirmed from "../appointment/ColumnAppointmentConfirmed";
// import ColumnAppointmentToBeConfirm from "../appointment/ColumnAppointmentToBeConfirm";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";
import Now from "@/config/now";
import { createOptions } from "@/features/_core/utils/create-options.util";
import { APPOINTMENT_OPTIONS } from "@/features/appointment/utils/constants.util";
import type { SelectChangeEvHandler } from "@/config/types";
import type { AppointementTypes } from "@/features/appointment/domain/types";

type Props = {
  date: Date;
};

const now = new Now();

const AppointmentList: React.FC<Props> = ({ date }) => {
  const navigate = useNavigate();
  const [appointmentFilter, setAppointmentFilter] = useState(
    APPOINTMENT_OPTIONS[0].value,
  );

  const handleFilterAppointment: SelectChangeEvHandler = (e) => {
    const value = e.target.value as AppointementTypes;
    setAppointmentFilter(value);
  };
  const handleNavigateToMyDay = () => {
    navigate(`detalle?date=${now.format(date, "yyyy-mm-dd")}`);
  };

  return (
    <div className="w-full pt-4 pe-2 space-y-4">
      <div className="flex items-center gap-4">
        <Text type="subtitle" className="mr-auto">
          {now.format(date, "dd-of-mmmm-of-yyyy")}
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
        <Button size="icon" title="Ir a ver completo" onClick={handleNavigateToMyDay}>
          <IconChevronRight />
        </Button>
      </div>
      <List appointmentFilter={appointmentFilter} />
    </div>
  );
};

export default AppointmentList;

const List: React.FC<{ appointmentFilter: AppointementTypes | "all" }> = ({
  appointmentFilter,
}) => {
  const isVisible = (value: AppointementTypes) => {
    return appointmentFilter === "all" || appointmentFilter === value;
  };

  return (
    <ViewProfessionalDataContext showProfesionalData>
      <div className="h-[calc(100vh-9.5rem)] overflow-y-auto scrollbar-styles scrollbar-thumb-transparent space-y-4">
        {/* {isVisible("available") && <ColumnAppointmentAvailable appointments={[]} />}
        {isVisible("to-confirm") && <ColumnAppointmentToBeConfirm appointments={[]} />}
        {isVisible("confirmed") && <ColumnAppointmentConfirmed appointments={[]} />}
        {isVisible("cancelled") && <ColumnAppointmentCancelled appointments={[]} />} */}
      </div>
    </ViewProfessionalDataContext>
  );
};
