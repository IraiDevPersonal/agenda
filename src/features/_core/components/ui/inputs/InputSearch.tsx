import { cn } from "@/config";
import Input, { InputProps } from "./Input";
import InputWrapper from "./InputWrapper";
import InputContentWrapper from "./InputContentWrapper";
import { InputFieldProps } from "./InputField";
import IconSearch from "../../icons/IconSearch";

type Props = Omit<InputProps, "type"> &
  Partial<Pick<InputFieldProps, "startContent">> & {
    onSearch?(): void;
  };

const InputSearch: React.FC<Props> = ({
  startContent,
  className,
  onKeyDown,
  onSearch,
  ...props
}) => {
  return (
    <InputWrapper>
      {startContent}
      <Input
        className={cn("pe-8", className)}
        placeholder="Buscar..."
        type="search"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.preventDefault();
            onSearch?.();
          }
          onKeyDown?.(e);
        }}
        {...props}
      />
      <InputContentWrapper className="end-0 pe-2">
        <IconSearch />
      </InputContentWrapper>
    </InputWrapper>
  );
};

export default InputSearch;
