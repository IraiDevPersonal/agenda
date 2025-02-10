import Main from "@/features/_core/components/ui/Main";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";
import MyDayHeader from "../components/my-day/MyDayHeader";
import Appointments from "../components/appointment/Appoinments";

const MyDayPage = () => {
  return (
    <>
      <title>Agenda | Mi Día</title>

      <Main>
        <MyDayHeader />
        <ViewProfessionalDataContext>
          <Appointments />
        </ViewProfessionalDataContext>
      </Main>
    </>
  );
};

export default MyDayPage;
