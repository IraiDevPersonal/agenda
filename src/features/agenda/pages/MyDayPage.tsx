import { Main } from "@/features/_core/components/ui";
import { Header, Planner } from "../components/my-day";

const MyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <Header />
        <Planner />
      </Main>
    </>
  );
};

export default MyDayPage;
