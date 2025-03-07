import * as React from "react";
import cn from "@/config/tailwind-merge";

type Props = {
  ref?: React.Ref<HTMLLabelElement>;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<Props> = ({ className, ref, ...props }) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium w-max leading-4 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  );
};

export default Label;
