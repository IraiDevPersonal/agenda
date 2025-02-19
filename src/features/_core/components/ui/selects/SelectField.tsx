import { useId } from "react";
import FieldRootWrapper from "../FieldRootWrapper";
import Select, { SelectProps } from "./Select";
import HelperText, { HelperTextProps } from "../HelperText";
import Label from "../Label";
import cn from "@/config/tailwind-merge";

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

const SelectField: React.FC<Props> = ({
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
        <Label className={cn("block", classNames?.label)} htmlFor={props.id ?? id}>
          {label}
        </Label>
      )}

      <Select {...props} />

      <HelperText error={error} message={message} className={classNames?.helper} />
    </FieldRootWrapper>
  );
};

export default SelectField;
