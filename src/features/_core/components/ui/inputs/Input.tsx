import { cn } from "@/config";

export type InputProps = React.ComponentProps<"input"> & {
  ref?: React.Ref<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
  ref,
  type,
  className,
  ...props
}) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "peer flex h-9 w-full rounded-xl border border-transparent px-3 py-2 bg-muted text-foreground shadow-none shadow-black/5 transition placeholder:text-muted-foreground/60 focus-visible:border-black/20 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-black/15 disabled:cursor-not-allowed disabled:opacity-50 placeholder:italic duration-300",
        type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none;",
        type === "file" &&
          "p-0 pr-3 italic text-muted-foreground text-sm file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-black/20 file:bg-transparent file:px-3 file:font-semibold file:not-italic file:text-foreground cursor-pointer file:cursor-pointer border-black/20 hover:bg-black/[7%]",
        className
      )}
      {...props}
    />
  );
};

export default Input;
