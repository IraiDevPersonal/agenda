import { Avatar } from "@/features/shared/components/ui/Avatar";
import { AgendaCard } from "./AgendaCard";
import { cn } from "@/config/tailwind-merge";

type Props = {
  className?: string;
};

export const HourCard: React.FC<Props> = ({ className }) => {
  return (
    <li>
      <AgendaCard className={cn("text-text-default", className)}>
        <Avatar alt="Paciente 1" />
        <div className="w-full">
          <h5 className="font-bold">Nombre paciente</h5>
          <span className="block text-text-secondary">1.111.111-1</span>
          <div className="flex w-full gap-2 text-text-secondary">
            <span>+56 9 1234 5678</span>
            <strong className="inline-block ml-auto">
              13:00 - 13:45 <small>hrs</small>
            </strong>
          </div>
        </div>
      </AgendaCard>
    </li>
  );
};
