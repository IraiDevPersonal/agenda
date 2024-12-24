import { AgendaColumn } from "./AgendaColumn";
import { HourCard } from "./HourCard";

export const ColumnHoursConfirmed = () => {
  return (
    <AgendaColumn
      title="Confirmadas"
      count={2}
      classNames={{
        wrapper: "text-emerald-600 bg-emerald-100",
        header: "hover:bg-emerald-200",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <HourCard key={idx} className="shadow-emerald-700/15" />
      ))}
    </AgendaColumn>
  );
};
