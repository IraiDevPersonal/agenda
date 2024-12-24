import { AgendaColumn } from "./AgendaColumn";

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
      <li>ITEM 1</li>
      <li>ITEM 2</li>
    </AgendaColumn>
  );
};
