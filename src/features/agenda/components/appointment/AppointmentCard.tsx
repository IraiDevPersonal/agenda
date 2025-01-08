import { Avatar } from "@/features/_core/components/ui";
import { Card } from "../shared";

type Props = {
  className?: string;
};

export const AppointmentCard: React.FC<Props> = ({ className }) => {
  return (
    <Card className={className}>
      <Avatar alt="Paciente 1" />
      <div className="w-full">
        <h5 className="font-bold">Nombre paciente</h5>
        <span className="block">1.111.111-1</span>
        <div className="flex w-full gap-2">
          <span>+56 9 1234 5678</span>
          <strong className="inline-block ml-auto">
            13:00 - 13:45 <small>hrs</small>
          </strong>
        </div>
      </div>
    </Card>
  );
};
