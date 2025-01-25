import { cn } from "@/config";
import Input, { InputProps } from "./Input";
import InputWrapper from "./InputWrapper";
import InputContentWrapper from "./InputContentWrapper";
import { InputFieldProps } from "./InputField";
import IconSearch from "../../icons/IconSearch";

type Props = Omit<InputProps, "type"> &
  Partial<Pick<InputFieldProps, "startContent">>;

const InputSearch: React.FC<Props> = ({
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

export default InputSearch;
