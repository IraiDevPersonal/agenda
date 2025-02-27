import AgendaFilterByDate from "./AgendaFilterByDate";
import AgendaFilterByPatientRut from "./AgendaFilterByPatientRut";
import Header from "./Header";

const MyDayHeader = () => {
  return (
    <Header title="Mi Día">
      <AgendaFilterByPatientRut />
      <AgendaFilterByDate />
    </Header>
  );
};

export default MyDayHeader;
