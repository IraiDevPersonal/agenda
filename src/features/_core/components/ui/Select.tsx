import { cn, Option } from "@/config";
import { Label } from "./Label";
import { InputHelperText, InputHelperTextProps, InputRoot } from "./Input";
import { useId } from "react";
import { ArrayMap } from "../utils";

export type SelectFieldProps = {
  label?: React.ReactNode;
  error?: string;
  classNames?: Partial<{
    select: string;
    label: string;
    helper: string;
  }>;
} & SelectProps &
  InputHelperTextProps;

type SelectProps = {
  ref?: React.Ref<HTMLSelectElement>;
  options?: Option[];
  placeholder?: string;
} & React.ComponentProps<"select">;

export function Select({
  placeholder,
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
          "peer inline-flex w-full cursor-pointer appearance-none items-center rounded-xl border border-transparent bg-muted text-sm text-foreground shadow-none shadow-black/5 transition-shadow focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-muted-foreground h-9 pe-8 ps-3",
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
      {placeholder && !props.value && (
        <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 start-3 text-muted-foreground/60 bg-muted w-[calc(100%-44px)]">
          {placeholder}
        </span>
      )}
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

const SelectField: React.FC<SelectFieldProps> = ({
  classNames,
  className,
  message,
  label,
  error,
  ...props
}) => {
  const id = useId();
  return (
    <InputRoot className={className}>
      {label && (
        <Label
          className={cn("block", classNames?.label)}
          htmlFor={props.id ?? id}
        >
          {label}
        </Label>
      )}

      <Select {...props} />

      <InputHelperText
        error={error}
        message={message}
        className={classNames?.helper}
      />
    </InputRoot>
  );
};

const SelectOption: React.FC<{
  children: React.ReactNode;
  value: string | number;
}> = ({ children, value }) => {
  return <option value={value}>{children}</option>;
};

Select.Option = SelectOption;
Select.Field = SelectField;
