import { IconAvailable } from "@/features/_core/components/icons";
import { AgendaCard, AgendaColumn } from "../shared";

export const ColumnAppointmentAvailable = () => {
  return (
    <AgendaColumn
      id="available"
      title="Disponibles"
      count={2}
      classNames={{
        wrapper: "text-emerald-700 bg-emerald-100",
        header: "hover:bg-emerald-200",
      }}
    >
      {Array.from({ length: 50 }).map((_, idx) => (
        <AvailableCard key={idx} />
      ))}
    </AgendaColumn>
  );
};

const AvailableCard: React.FC = () => {
  return (
    <li>
      <AgendaCard className="text-emerald-700 border-emerald-600/10 shadow-emerald-700/15">
        <div className="flex flex-col mr-auto">
          <strong>Nombre profesional</strong>
          <span>
            Horario: <strong>13:00 - 13:45</strong>
          </span>
          <span>
            Profesión: <strong>Psicologo(a)</strong>
          </span>
        </div>
        <figure>
          <IconAvailable className="text-emerald-500" />
        </figure>
      </AgendaCard>
    </li>
  );
};
