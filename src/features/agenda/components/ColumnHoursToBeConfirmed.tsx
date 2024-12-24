import { AgendaColumn } from "./AgendaColumn";

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
      <HourCard />
      <HourCard />
    </AgendaColumn>
  );
};

const HourCard: React.FC = () => {
  return (
    <li>
      <article></article>
    </li>
  );
};
