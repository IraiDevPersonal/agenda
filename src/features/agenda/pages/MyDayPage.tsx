import { Main } from "@/features/shared/components/Main";
import { Header } from "../components/my-day/Header";

const MyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>
      <Main>
        <Header />
        <div>contenido de pagina</div>
      </Main>
    </>
  );
};

export default MyDayPage;
