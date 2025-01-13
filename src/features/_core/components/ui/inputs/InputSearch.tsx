import { cn } from "@/config";
import { Input, InputProps } from "./Input";
import { InputWrapper } from "./InputWrapper";
import { IconSearch } from "../../icons";
import { InputFieldProps } from "./InputField";
import { InputContentWrapper } from "./InputContentWrapper";

type Props = Omit<InputProps, "type"> &
  Partial<Pick<InputFieldProps, "startContent">>;

export const InputSearch: React.FC<Props> = ({
  className,
  startContent,
  ...props
}) => {
  return (
    <InputWrapper>
      {startContent}
      <Input
        className={cn("pe-8", className)}
        placeholder="Buscar..."
        type="search"
        {...props}
      />
      <InputContentWrapper className="end-0 pe-2">
        <IconSearch />
      </InputContentWrapper>
    </InputWrapper>
  );
};
