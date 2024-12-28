import { AgendaColumn } from "./AgendaColumn";
import { HourCard } from "./HourCard";

export const ColumnHoursToBeConfirm = () => {
  return (
    <AgendaColumn
      id={"to-be-confirm"}
      title="Por Confirmar"
      count={2}
      classNames={{
        wrapper: "text-amber-700 bg-amber-100",
        header: "hover:bg-amber-200",
      }}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <HourCard
          key={idx}
          className="text-amber-700 border-amber-600/10 shadow-amber-700/15"
        />
      ))}
    </AgendaColumn>
  );
};
