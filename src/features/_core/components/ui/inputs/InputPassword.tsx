import { useId, useState } from "react";
import HelperText, { HelperTextProps } from "../HelperText";
import Input, { InputProps } from "./Input";
import FieldRootWrapper from "../FieldRootWrapper";
import InputWrapper from "./InputWrapper";
import InputContentWrapper from "./InputContentWrapper";
import IconLock from "../../icons/IconLock";
import IconEyeOff from "../../icons/IconEyeOff";
import IconEye from "../../icons/IconEye";
import Label from "../Label";
import cn from "@/config/tailwind-merge";

type Props = {
  label?: React.ReactNode;
  showIcon?: boolean;
} & Omit<InputProps, "type"> &
  Pick<HelperTextProps, "error">;

const InputPassword: React.FC<Props> = ({
  className,
  showIcon,
  label,
  error,
  ...props
}) => {
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <FieldRootWrapper>
      {label && (
        <Label className="block" htmlFor={props.id ?? id}>
          {label}
        </Label>
      )}

      <InputWrapper>
        {showIcon && (
          <InputContentWrapper className="start-0 ps-2">
            <IconLock />
          </InputContentWrapper>
        )}
        <Input
          id={id}
          className={cn("ps-10", className)}
          type={isVisible ? "text" : "password"}
          {...props}
        />

        <button
          type="button"
          aria-controls="password"
          aria-pressed={isVisible}
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 flex items-center justify-center h-full transition-colors end-0 w-9 rounded-e-lg text-muted-foreground/80 outline-offset-2 hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isVisible ? <IconEyeOff /> : <IconEye />}
        </button>
      </InputWrapper>

      <HelperText error={error} />
    </FieldRootWrapper>
  );
};

export default InputPassword;
