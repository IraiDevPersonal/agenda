import Main from "@/features/_core/components/ui/Main";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";
import MyDayHeader from "../components/my-day/MyDayHeader";
import Appointments from "../components/appointment/Appoinments";

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
