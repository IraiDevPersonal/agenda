import Calendar from "@/features/_core/components/ui/Calendar";
import Main from "@/features/_core/components/ui/Main";
import { useState } from "react";
import ViewProfessionalDataContext from "../context/ViewProfessionalDataContext";
// import AgendaHeader from "../components/agenda/AgendaHeader";
// import Appointments from "../components/appointment/Appoinments";

const AgendaPage = () => {
  const [selected, setSelected] = useState<Date>();
  return (
    <ViewProfessionalDataContext showProfesionalData>
      <title>Agenda</title>

      <Main>
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          renderDayAttachment={({ day }) => (
            <>
              <span>
                {day.date.toDateString().includes("12") ? "Hora 1" : null}
              </span>
            </>
          )}
        />
        {/* <AgendaHeader />
        <Appointments /> */}
      </Main>
    </ViewProfessionalDataContext>
  );
};

export default AgendaPage;
