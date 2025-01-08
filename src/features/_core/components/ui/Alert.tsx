import { cn } from "@/config";
import { IconDanger, IconInfo, IconSuccess, IconWarning } from "../icons";

const HASH_SEVERITY: Record<
  Props["severity"],
  { icon: React.ReactNode; color: string }
> = {
  danger: {
    icon: <IconDanger />,
    color: "text-red-600 bg-red-100",
  },
  info: {
    icon: <IconInfo />,
    color: "text-blue-600 bg-blue-100",
  },
  success: {
    icon: <IconSuccess />,
    color: "text-emerald-600 bg-emerald-100",
  },
  warning: {
    icon: <IconWarning />,
    color: "text-amber-600 bg-amber-100",
  },
};

type Props = {
  description: string;
  severity: "warning" | "danger" | "info" | "success";
};

export const Alert: React.FC<Props> = ({ description, severity }) => {
  return (
    <div
      className={cn(
        "font-medium rounded-lg flex items-center gap-4 p-3",
        HASH_SEVERITY[severity].color
      )}
    >
      <figure>{HASH_SEVERITY[severity].icon}</figure>
      <p className="leading-tight">{description}</p>
    </div>
  );
};
