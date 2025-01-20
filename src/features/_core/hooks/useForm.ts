import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import {
  Path,
  RegisterOptions,
  useForm as useFormLibrary,
  UseFormProps,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import { ZodType } from "zod";

type UseFormController = UseFormRegisterReturn & {
  error?: string;
  value?: string;
  defaultValue?: string;
};

type ControllerOptions<T extends object> = RegisterOptions<T, Path<T>> & {
  formatValue?(value: string): string;
  defaultValue?: string;
};

export type UseFormControllerHandler<T extends object> = (
  name: Path<T>,
  options: ControllerOptions<T>
) => UseFormController;

type Props<T extends object> = Omit<UseFormProps<T>, "resolver"> & {
  validationSchema?: ZodType<T>;
};

export function useForm<T extends object>({
  validationSchema,
  ...props
}: Props<T>) {
  const { watch, setValue, formState, register, handleSubmit } = useFormLibrary(
    {
      ...props,
      resolver: validationSchema ? zodResolver(validationSchema) : undefined,
    }
  );

  const controller: UseFormControllerHandler<T> = useCallback(
    (name, options) => {
      const { formatValue, defaultValue, ...restOptions } = options;
      return {
        ...register(name, restOptions),
        defaultValue,
        error: (formState.errors as any)[name]?.message ?? "",
        value: formatValue ? formatValue(watch(name)) : undefined,
      };
    },
    [register, watch, formState.errors]
  );

  const handleChange: UseFormSetValue<T> = useCallback(
    (name, value, options = undefined) => {
      setValue(name, value, options);
    },
    [setValue]
  );

  return {
    watch,
    formState,
    controller,
    handleSubmit,
    handleChange,
    errors: formState.errors,
  };
}
