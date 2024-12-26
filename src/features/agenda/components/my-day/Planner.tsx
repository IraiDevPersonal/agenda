import { AgendaGrid } from "../AgendaGrid";
import { ColumnHoursConfirmed } from "../ColumnHoursConfirmed";
import { ColumnHoursAvailable } from "../ColumnHoursAvailable";
import { ColumnHoursToBeConfirm } from "../ColumnHoursToBeConfirm";
import { ColumnHoursCancelled } from "../ColumnHoursCancelled";

export const Planner = () => {
  return (
    <AgendaGrid>
      <ColumnHoursConfirmed />
      <ColumnHoursToBeConfirm />
      <ColumnHoursAvailable />
      <ColumnHoursCancelled />
    </AgendaGrid>
  );
};
