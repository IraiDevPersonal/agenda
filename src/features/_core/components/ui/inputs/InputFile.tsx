import { useId } from "react";
import { FieldRootWrapper } from "../FieldRootWrapper";
import { Label } from "../Label";
import { Input, InputProps } from "./Input";
import { cn } from "@/config";

export type Props = {
  label?: React.ReactNode;
  classNames?: Partial<{
    input: string;
    label: string;
  }>;
} & Omit<InputProps, "value" | "type">;

export const InputFile: React.FC<Props> = ({
  classNames,
  className,
  label,
  ...props
}) => {
  const id = useId();
  return (
    <FieldRootWrapper className={className}>
      {label && (
        <Label
          className={cn("block", classNames?.label)}
          htmlFor={props.id ?? id}
        >
          {label}
        </Label>
      )}
      <Input id={id} type="file" className={classNames?.input} {...props} />
    </FieldRootWrapper>
  );
};
