import { Main } from "@/features/_core/components/ui";
import { MyDayHeader, MyDayPlanner } from "../components/my-day";

const MyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <MyDayPlanner />
      </Main>
    </>
  );
};

export default MyDayPage;
