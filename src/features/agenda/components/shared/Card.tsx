import type { AgendaColumns } from "../../domain";
import { cn } from "@/config";

const HASH_COLORS: Record<Props["id"], string> = {
  "to-confirm": "text-amber-700 border-amber-600/10 shadow-amber-700/15",
  available: "text-emerald-700 border-emerald-600/10 shadow-emerald-700/15",
  cancelled: "text-red-700 border-red-600/10 shadow-red-700/15",
  confirmed: "text-sky-700 border-sky-600/10 shadow-sky-700/15",
};

type Props = {
  shouldHoverScale?: boolean;
  children: React.ReactNode;
  className?: string;
  id: AgendaColumns;
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
        "flex items-center gap-4 p-3 shadow-lg rounded-xl border bg-white/25",
        "transition-transform duration-150",
        shouldHoverScale && "hover:scale-105",
        HASH_COLORS[id],
        className
      )}
      {...props}
    />
  );
};

export default Card;
