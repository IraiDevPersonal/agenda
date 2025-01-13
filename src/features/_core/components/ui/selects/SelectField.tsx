import { useId } from "react";
import { FieldRootWrapper } from "../FieldRootWrapper";
import { Label } from "../Label";
import { cn } from "@/config";
import { Select, SelectProps } from "./Select";
import { HelperText, HelperTextProps } from "../HelperText";

type Props = {
  label?: React.ReactNode;
  error?: string;
  classNames?: Partial<{
    select: string;
    label: string;
    helper: string;
  }>;
} & SelectProps &
  HelperTextProps;

export const SelectField: React.FC<Props> = ({
  classNames,
  className,
  message,
  label,
  error,
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

      <Select {...props} />

      <HelperText
        error={error}
        message={message}
        className={classNames?.helper}
      />
    </FieldRootWrapper>
  );
};
