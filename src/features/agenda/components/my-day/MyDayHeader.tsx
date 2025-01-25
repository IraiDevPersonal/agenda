import InputSearch from "@/features/_core/components/ui/inputs/InputSearch";
import Header from "../shared/Header";
import Input from "@/features/_core/components/ui/inputs/Input";

const CURRENT_DATE = new Date()
  .toLocaleDateString()
  .split("-")
  .reverse()
  .join("-");

const MyDayHeader = () => {
  return (
    <Header title="Mi Día">
      <InputSearch className="w-80" placeholder="Buscar paciente..." />
      <Input className="w-max" type="date" defaultValue={CURRENT_DATE} />
    </Header>
  );
};

export default MyDayHeader;
