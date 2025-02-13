import { Now } from "@/config";
import Input from "@/features/_core/components/ui/inputs/Input";
import AgendaFilterPatientByRut from "../agenda/AgendaFilterPatientByRut";
import Header from "../shared/Header";

const MyDayHeader = () => {
  return (
    <Header title="Mi Día">
      <AgendaFilterPatientByRut />
      <Input
        defaultValue={new Now().format(new Date(), "yyyy-mm-dd")}
        className="w-max"
        type="date"
      />
    </Header>
  );
};

export default MyDayHeader;
