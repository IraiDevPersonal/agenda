import { Main } from "@/features/shared/components/ui/Main";
import { Header } from "../components/my-day/Header";
import { Planner } from "../components/my-day/Planner";

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
