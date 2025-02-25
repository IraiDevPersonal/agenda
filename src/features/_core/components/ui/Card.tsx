import cn from "@/config/tailwind-merge";
import { HTMLAttributes } from "@/config/types";

type Props = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({ className, ...props }) => {
  return (
    <article
      className={cn(
        "flex items-center gap-4 shadow-lg p-3 rounded-xl border transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
};

export default Card;
