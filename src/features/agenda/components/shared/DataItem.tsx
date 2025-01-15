import { Label } from "@/features/_core/components/ui";

type Props = {
  label: string;
  value: string;
};

export const DataItem: React.FC<Props> = ({ label, value }) => {
  return (
    <Label>
      {label}: <span className="text-muted-foreground">{value}</span>
    </Label>
  );
};
