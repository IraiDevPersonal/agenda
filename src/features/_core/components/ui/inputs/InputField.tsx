import { useId } from "react";
import { HelperText, HelperTextProps } from "../HelperText";
import { Input, InputProps } from "./Input";
import { FieldRootWrapper } from "../FieldRootWrapper";
import { Label } from "../Label";
import { cn } from "@/config";
import { InputWrapper } from "./InputWrapper";
import { InputContentWrapper } from "./InputContentWrapper";

export type InputFieldProps = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  label?: React.ReactNode;
  error?: string;
  classNames?: Partial<{
    input: string;
    startContent: string;
    endContent: string;
    wrapper: string;
    label: string;
    helper: string;
  }>;
} & InputProps &
  HelperTextProps;

export const InputField: React.FC<InputFieldProps> = ({
  startContent,
  endContent,
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

      <InputWrapper className={classNames?.wrapper}>
        <InputContentWrapper
          className={cn("start-0 ps-2", classNames?.startContent)}
        >
          {startContent}
        </InputContentWrapper>
        <Input id={id} className={classNames?.input} {...props} />
        <InputContentWrapper
          className={cn("end-0 pe-2", classNames?.endContent)}
        >
          {endContent}
        </InputContentWrapper>
      </InputWrapper>

      <HelperText
        error={error}
        message={message}
        className={classNames?.helper}
      />
    </FieldRootWrapper>
  );
};
