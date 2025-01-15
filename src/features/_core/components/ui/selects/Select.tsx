import { cn, Option } from "@/config";
import { ArrayMap } from "../../utils";

export type SelectProps = {
  ref?: React.Ref<HTMLSelectElement>;
  options?: Option[];
} & React.ComponentProps<"select">;

export function Select({
  className,
  children,
  options,
  ref,
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "peer inline-flex w-full cursor-pointer appearance-none items-center rounded-xl border border-transparent bg-muted text-sm text-foreground shadow-none shadow-black/5 transition-shadow focus-visible:border-black/20 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-muted-foreground h-9 pe-8 ps-3",
          className
        )}
        {...props}
      >
        {children || (
          <ArrayMap dataset={options ?? []}>
            {({ label, value }) => (
              <SelectOption key={value} value={value}>
                {label}
              </SelectOption>
            )}
          </ArrayMap>
        )}
      </select>
      <span className="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </span>
    </div>
  );
}

export const SelectOption: React.FC<{
  children: React.ReactNode;
  value: string | number;
}> = ({ children, value }) => {
  return <option value={value}>{children}</option>;
};
