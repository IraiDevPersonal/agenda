import DateFns from "@/config/date-fns";
import Text from "@/features/_core/components/ui/Text";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import CardAppointment from "./CardAppointment";
import { AgendaColumns } from "../../domain";

const date = new DateFns();

const AppointmentList = () => {
  return (
    <div className="space-y-2 w-full p-4 pt-0 h-[calc(100vh-90px)] overflow-y-auto scrollbar-styles">
      <Text type="subtitle" className="sticky top-0 bg-background z-50 py-2">
        Citas para {date.format({ format: "full_date_es" })}
      </Text>
      <List id="available" title="Disponiles" />
      <List id="to-confirm" title="Por confirmar" />
      <List id="confirmed" title="Confirmadas" />
      <List id="cancelled" title="Canceladas" />
    </div>
  );
};

export default AppointmentList;

const List: React.FC<{ title: string; id: AgendaColumns }> = ({
  title,
  id,
}) => {
  return (
    <>
      <Text type="subtitle" className="text-base py-2">
        {title} (2)
      </Text>
      <ul className="space-y-1.5">
        <ArrayMap dataset={Array.from({ length: 5 })}>
          {(_, idx) => (
            <li key={idx}>
              <CardAppointment id={id} shouldHoverScale={false} />
            </li>
          )}
        </ArrayMap>
      </ul>
    </>
  );
};
