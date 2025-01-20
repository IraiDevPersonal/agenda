import { Main } from "@/features/_core/components/ui";
import { MyDayHeader } from "../components/my-day";
import { Planner } from "../components/shared";
import { ViewProfessionalInfoProvider } from "../components/stores";

const MyDayPage = () => {
  return (
    <ViewProfessionalInfoProvider>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <Planner />
      </Main>
    </ViewProfessionalInfoProvider>
  );
};

export default MyDayPage;
