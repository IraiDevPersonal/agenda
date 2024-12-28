import { AgendaColumn } from "./AgendaColumn";
import { HourCard } from "./HourCard";

export const ColumnHoursCancelled = () => {
  return (
    <AgendaColumn
      id={"cancelled"}
      title="Canceladas"
      count={2}
      classNames={{
        wrapper: "text-red-700 bg-red-100",
        header: "hover:bg-red-200",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <HourCard
          key={idx}
          className="text-red-700 border-red-600/10 shadow-red-700/15"
        />
      ))}
    </AgendaColumn>
  );
};
