import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";
import { cn } from "@/config";

type RadioGroupProps = {
  ref?: React.Ref<HTMLDivElement>;
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

type RadioGroupItemProps = {
  ref?: React.Ref<HTMLButtonElement>;
  orientation?: "vertical" | "horizontal";
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

export function RadioGroup({
  orientation = "vertical",
  className,
  ref,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "gap-2",
        !orientation && "grid grid-cols-3",
        orientation === "vertical" ? "flex flex-col" : "flex",
        className
      )}
      {...props}
      ref={ref}
    />
  );
}

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square size-4 rounded-full border border-input shadow-sm shadow-black/5 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center text-current">
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="currentcolor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3" r="3" />
        </svg>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};

RadioGroup.Item = RadioGroupItem;
