import { Main } from "@/features/_core/components/ui";
import { MyDayHeader } from "../components/my-day";
import { Appointments } from "../components/appointment";
import { ViewProfessionalDataContext } from "../context";

const MyDayPage = () => {
  return (
    <ViewProfessionalDataContext>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <Appointments />
      </Main>
    </ViewProfessionalDataContext>
  );
};

export default MyDayPage;
