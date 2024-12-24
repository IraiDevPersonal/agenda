import { IconAvailable } from "@/features/shared/components/icons/IconAvailable";
import { AgendaColumn } from "./AgendaColumn";
import { AgendaCard } from "./AgendaCard";

export const ColumnHoursAvailable = () => {
  return (
    <AgendaColumn title="Disponibles" count={2}>
      {Array.from({ length: 50 }).map((_, idx) => (
        <AvailableCard key={idx} />
      ))}
    </AgendaColumn>
  );
};

const AvailableCard: React.FC = () => {
  return (
    <li>
      <AgendaCard>
        <span className="mr-auto">
          Horario: <strong>13:00 - 13:45</strong>
        </span>
        <figure>
          <IconAvailable className="text-emerald-500" />
        </figure>
      </AgendaCard>
    </li>
  );
};
