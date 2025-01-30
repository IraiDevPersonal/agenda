import type { AgendaColumns } from "../../domain";
import { cn } from "@/config";

const HASH_COLORS: Record<AgendaColumns, string> = {
  "to-confirm":
    "text-amber-700 border-amber-100/70 bg-amber-50 shadow-amber-700/10",
  available:
    "text-emerald-700 border-emerald-100/70 bg-emerald-50 shadow-emerald-700/10",
  cancelled: "text-red-700 border-red-100/70 bg-red-50 shadow-red-700/10",
  confirmed: "text-sky-700 border-sky-100/70 bg-sky-50 shadow-sky-700/10",
};

type Props = {
  shouldHoverScale?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: AgendaColumns;
};

const Card: React.FC<Props> = ({
  shouldHoverScale = true,
  className,
  id,
  ...props
}) => {
  return (
    <article
      className={cn(
        "flex items-center gap-4 shadow-lg p-3 rounded-xl border",
        "transition-transform duration-300",
        shouldHoverScale && "hover:scale-105",
        id ? HASH_COLORS[id] : "",
        className
      )}
      {...props}
    />
  );
};

export default Card;
