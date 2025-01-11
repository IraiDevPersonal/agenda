import { cn } from "@/config";
import { IconEye, IconEyeOff, IconSearch } from "../icons";
import { useId, useState } from "react";
import { Label } from "./Label";
import { IconLock } from "../icons";
// import { IconEye, IconEyeOff, IconLock } from "../../icons";

export type InputProps = React.ComponentProps<"input"> & {
  ref?: React.Ref<HTMLInputElement | null>;
};
export type InputPasswordProps = {
  label?: React.ReactNode;
  showIcon?: boolean;
} & Omit<InputProps, "type"> &
  Pick<InputHelperTextProps, "error">;

export type InputSearchProps = Omit<InputProps, "type"> &
  Partial<Pick<InputFieldProps, "startContent">>;

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
  InputHelperTextProps;

export type InputHelperTextProps = {
  error?: string;
  message?: string;
  className?: string;
};

export function Input({ ref, type, className, ...props }: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "peer flex h-9 w-full rounded-lg border border-transparent px-3 py-2 bg-muted text-foreground shadow-none shadow-black/5 transition-shadow placeholder:text-muted-foreground/60 focus-visible:border-black/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-black/15 disabled:cursor-not-allowed disabled:opacity-50",
        type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none;",
        type === "file" &&
          "p-0 pr-3 italic text-text-secondary file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-black file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-text-default cursor-pointer file:cursor-pointer border-black",
        className
      )}
      {...props}
    />
  );
}

function InputWrapper({
  className,
  ...props
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("relative", className)} {...props} />;
}

function ContentWrapper({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  if (!children) return null;
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 flex items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
}

function InputSearch({ className, startContent, ...props }: InputSearchProps) {
  return (
    <InputWrapper>
      {startContent}
      <Input
        className={cn("pe-8", className)}
        placeholder="Buscar..."
        type="search"
        {...props}
      />
      <Input.ContentWrapper className="end-0 pe-2">
        <IconSearch />
      </Input.ContentWrapper>
    </InputWrapper>
  );
}

function InputHelperText({ error, message, className }: InputHelperTextProps) {
  return (
    <>
      {(message || error) && (
        <p
          role={error ? "alert" : "textbox"}
          aria-live="polite"
          className={cn("text-xs", error && "text-destructive", className)}
        >
          {message || error}
        </p>
      )}
    </>
  );
}

function InputRoot({
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-1.5", className)} {...props} />;
}

function InputField({
  startContent,
  endContent,
  classNames,
  className,
  message,
  label,
  error,
  ...props
}: InputFieldProps) {
  const id = useId();
  return (
    <InputRoot className={className}>
      {label && (
        <Label
          className={cn("block", classNames?.label)}
          htmlFor={props.id ?? id}
        >
          {label}
        </Label>
      )}

      <InputWrapper className={classNames?.wrapper}>
        <ContentWrapper
          className={cn("start-0 ps-2", classNames?.startContent)}
        >
          {startContent}
        </ContentWrapper>
        <Input id={id} className={classNames?.input} {...props} />
        <ContentWrapper className={cn("end-0 pe-2", classNames?.endContent)}>
          {endContent}
        </ContentWrapper>
      </InputWrapper>

      <InputHelperText
        error={error}
        message={message}
        className={classNames?.helper}
      />
    </InputRoot>
  );
}

function InputPassword({
  className,
  showIcon,
  label,
  error,
  ...props
}: InputPasswordProps) {
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <InputRoot>
      {label && (
        <Label className="block" htmlFor={props.id ?? id}>
          {label}
        </Label>
      )}

      <InputWrapper>
        {showIcon && (
          <ContentWrapper className="start-0 ps-2">
            <IconLock />
          </ContentWrapper>
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

      <InputHelperText error={error} />
    </InputRoot>
  );
}

export { InputHelperText, InputRoot };

Input.Field = InputField;
Input.Search = InputSearch;
Input.Password = InputPassword;
Input.ContentWrapper = ContentWrapper;
Input.Wrapper = InputWrapper;
Input.Root = InputRoot;
