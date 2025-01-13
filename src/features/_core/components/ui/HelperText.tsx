import { cn } from "@/config";

export type HelperTextProps = Partial<{
  className: string;
  message: string;
  error: string;
}>;

export const HelperText: React.FC<HelperTextProps> = ({
  error,
  message,
  className,
}) => {
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
