import cn from "@/config/tailwind-merge";

export type HelperTextProps = Partial<{
  className: string;
  message: string;
  error: string;
}>;

const HelperText: React.FC<HelperTextProps> = ({ error, message, className }) => {
  return (
    <>
      {(message || error) && (
        <p
          aria-live="polite"
          role={error ? "alert" : "textbox"}
          className={cn("text-xs", error && "text-destructive", className)}
        >
          {message || error}
        </p>
      )}
    </>
  );
};

export default HelperText;
