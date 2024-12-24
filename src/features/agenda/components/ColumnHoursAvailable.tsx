import { IconAvailable } from "@/features/shared/components/icons/IconAvailable";
import { AgendaColumn } from "./AgendaColumn";

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
      <article className="flex items-center justify-between gap-4 p-3 rounded-lg shadow-lg bg-background-default shadow-black/10">
        <span>
          Horario: <strong>13:00 - 13:45</strong>
        </span>
        <figure>
          <IconAvailable className="text-emerald-500" />
        </figure>
      </article>
    </li>
  );
};
