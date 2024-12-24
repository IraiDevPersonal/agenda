import { AgendaGrid } from "../AgendaGrid";
import { ColumnHoursConfirmed } from "../ColumnHoursConfirmed";
import { ColumnHoursAvailable } from "../ColumnHoursAvailable";
import { ColumnHoursToBeConfirmed } from "../ColumnHoursToBeConfirmed";

export const Planner = () => {
  return (
    <AgendaGrid>
      <ColumnHoursConfirmed />
      <ColumnHoursToBeConfirmed />
      <ColumnHoursAvailable />
    </AgendaGrid>
  );
};
