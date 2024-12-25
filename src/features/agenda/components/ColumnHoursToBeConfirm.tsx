import { AgendaColumn } from "./AgendaColumn";
import { HourCard } from "./HourCard";

export const ColumnHoursToBeConfirmed = () => {
  return (
    <AgendaColumn
      title="Por Confirmar"
      count={2}
      classNames={{
        wrapper: "text-amber-600 bg-amber-100",
        header: "hover:bg-amber-200",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <HourCard key={idx} className="shadow-amber-700/15" />
      ))}
    </AgendaColumn>
  );
};
