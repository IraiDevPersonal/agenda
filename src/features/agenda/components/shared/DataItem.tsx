import { Text } from "@/features/_core/components/ui";

type Props = {
  label: string;
  value: string;
};

export const DataItem: React.FC<Props> = ({ label, value }) => {
  return (
    <Text
      type="paragraph"
      className="leading-none text-foreground font-semibold"
    >
      {label}: <span className="opacity-75 font-normal">{value}</span>
    </Text>
  );
};
