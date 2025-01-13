import { Input, InputSearch } from "@/features/_core/components/ui";
import { Header } from "../shared";

const CURRENT_DATE = new Date()
  .toLocaleDateString()
  .split("-")
  .reverse()
  .join("-");

export const MyDayHeader = () => {
  return (
    <Header title="Mi Día">
      <InputSearch className="w-80" placeholder="Buscar paciente..." />
      <Input className="w-max" type="date" defaultValue={CURRENT_DATE} />
    </Header>
  );
};
