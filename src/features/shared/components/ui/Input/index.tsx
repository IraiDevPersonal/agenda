import { cn } from "@/config/tailwind-merge";
import { InputProps, InputSearchProps } from "./types";
// import { IconEye, IconEyeOff, IconLock } from "../../icons";

export function Input({ ref, type, className, ...props }: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "peer flex h-9 w-full rounded-lg border border-transparent px-3 py-2 bg-black/5 text-text-default shadow-sm shadow-black/5 transition-shadow placeholder:text-text-secondary focus-visible:border-black/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-black/15 disabled:cursor-not-allowed disabled:opacity-50",
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

function InputFieldWrapper(props: React.PropsWithChildren) {
  return <div className="relative" {...props} />;
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

function InputSearch({ className, ...props }: InputSearchProps) {
  return (
    <Input.FieldWrapper>
      <Input
        className={cn("pe-8", className)}
        placeholder="Buscar..."
        type="search"
        {...props}
      />
      <Input.ContentWrapper className="end-0 pe-2">
        <span>o</span>
      </Input.ContentWrapper>
    </Input.FieldWrapper>
  );
}

// function InputHelperText({ error, message }: InputHelperTextProps) {
//   return (
//     <>
//       {(message || error) && (
//         <p
//           role={error ? "alert" : "textbox"}
//           aria-live="polite"
//           className={cn("text-xs", error && "text-destructive")}
//         >
//           {message || error}
//         </p>
//       )}
//     </>
//   );
// }

// function InputRootWrapper(props: { children: React.ReactNode }) {
//   return <div className="space-y-1.5" {...props} />;
// }

// function InputField({
//   startContent,
//   endContent,
//   message,
//   label,
//   error,
//   ...props
// }: InputFieldProps) {
//   const id = useId();
//   return (
//     <InputRootWrapper>
//       {label && (
//         <Label className="block" htmlFor={props.id ?? id}>
//           {label}
//         </Label>
//       )}

//       <InputWrapper>
//         <ContentWrapper content={startContent} className="start-0 ps-2" />
//         <Input id={id} {...props} />
//         <ContentWrapper content={endContent} className="end-0 pe-2" />
//       </InputWrapper>

//       <InputHelperText error={error} message={message} />
//     </InputRootWrapper>
//   );
// }

// function InputPassword({
//   className,
//   showIcon,
//   label,
//   error,
//   ...props
// }: InputPasswordProps) {
//   const id = useId();
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   const toggleVisibility = () => setIsVisible((prevState) => !prevState);

//   return (
//     <InputRootWrapper>
//       {label && (
//         <Label className="block" htmlFor={props.id ?? id}>
//           {label}
//         </Label>
//       )}

//       <InputWrapper>
//         {showIcon && (
//           <ContentWrapper className="start-0 ps-2" content={<IconLock />} />
//         )}
//         <Input
//           id={id}
//           className={cn("ps-10", className)}
//           type={isVisible ? "text" : "password"}
//           {...props}
//         />

//         <button
//           type="button"
//           aria-controls="password"
//           aria-pressed={isVisible}
//           onClick={toggleVisibility}
//           aria-label={isVisible ? "Hide password" : "Show password"}
//           className="absolute inset-y-0 flex items-center justify-center h-full transition-colors end-0 w-9 rounded-e-lg text-muted-foreground/80 outline-offset-2 hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           {isVisible ? <IconEyeOff /> : <IconEye />}
//         </button>
//       </InputWrapper>

//       <InputHelperText error={error} />
//     </InputRootWrapper>
//   );
// }

// export { InputHelperText, InputRootWrapper };

// Input.Field = InputField;
// Input.Password = InputPassword;
Input.FieldWrapper = InputFieldWrapper;
Input.ContentWrapper = ContentWrapper;
Input.Search = InputSearch;
