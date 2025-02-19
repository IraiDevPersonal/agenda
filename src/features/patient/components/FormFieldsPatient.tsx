import InputField from "@/features/_core/components/ui/inputs/InputField";
import { prettifyRut } from "react-rut-formatter";
import { PatientEntity } from "../domain/patient.entity";
import cn from "@/config/tailwind-merge";
import type { UseFormControllerHandler } from "@/features/_core/hooks/useForm";

type Props = {
  controller: UseFormControllerHandler<PatientEntity>;
  initialValues?: PatientEntity;
  withAutofocus?: boolean;
  className?: string;
};

const FormFieldsPatient: React.FC<Props> = ({
  initialValues,
  withAutofocus,
  controller,
  className,
}) => {
  return (
    <div className={cn("grid gap-2 sm:grid-cols-2", className)}>
      <InputField
        label="Rut"
        autoFocus={withAutofocus}
        {...controller("rut", {
          defaultValue: initialValues?.rut,
          formatValue: prettifyRut,
        })}
      />
      <InputField
        {...controller("phone", { defaultValue: initialValues?.phone })}
        label="Teléfono"
      />
      <InputField
        {...controller("names", { defaultValue: initialValues?.names })}
        label="Nombres"
      />
      <InputField
        {...controller("last_names", {
          defaultValue: initialValues?.last_names,
        })}
        label="Apellidos"
      />
      <InputField
        className="col-span-2"
        {...controller("email", { defaultValue: initialValues?.email })}
        label="Correo"
      />
      <InputField
        className="col-span-2"
        {...controller("address", { defaultValue: initialValues?.address })}
        label="Dirección"
      />
    </div>
  );
};

export default FormFieldsPatient;
