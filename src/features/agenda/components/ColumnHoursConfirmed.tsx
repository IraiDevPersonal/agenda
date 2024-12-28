import { AgendaColumn } from "./AgendaColumn";
import { HourCard } from "./HourCard";

export const ColumnHoursConfirmed = () => {
  return (
    <AgendaColumn
      id={"confirmed"}
      title="Confirmadas"
      count={2}
      classNames={{
        wrapper: "text-emerald-700 bg-emerald-100",
        header: "hover:bg-emerald-200",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <HourCard
          key={idx}
          className="border-emerald-600/10 text-emerald-700 shadow-emerald-700/15"
        />
      ))}
    </AgendaColumn>
  );
};
