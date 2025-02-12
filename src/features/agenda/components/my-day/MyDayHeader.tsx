import { Now } from "@/config";
import Input from "@/features/_core/components/ui/inputs/Input";
import AgendaFilterPatientByRut from "../agenda/AgendaFilterPatientByRut";
import Header from "../shared/Header";

const MyDayHeader = () => {
  return (
    <Header title="Mi Día">
      <AgendaFilterPatientByRut />
      <Input
        type="date"
        className="w-max"
        defaultValue={new Now().format(new Date(), "yyyy-mm-dd")}
      />
    </Header>
  );
};

export default MyDayHeader;
