import { InputField, SelectField } from "@/features/_core/components/ui";
import { PatientEntity } from "../domain/patient.entity";
import { cn, Option } from "@/config";
import { createOptions } from "@/features/_core/utils/helpers.util";
import { UseFormControllerHandler } from "@/features/_core/hooks";
import { prettifyRut } from "react-rut-formatter";

const PAYMENT_METHODS: Option[] = [
  { label: "Fonasa", value: "fonasa" },
  { label: "Particular", value: "particular" },
];

type Props = {
  controller: UseFormControllerHandler<PatientEntity>;
  initialValues?: PatientEntity;
  withAutofocus?: boolean;
  className?: string;
};

export const FormFieldsPatient: React.FC<Props> = ({
  initialValues,
  withAutofocus,
  controller,
  className,
}) => {
  return (
    <div className={cn("grid gap-2 grid-cols-2", className)}>
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
      {/* TODO: analizar si quitar este campo de aqui ya que es propio del agendar la cita */}
      <SelectField
        className="col-span-2"
        options={createOptions({ options: PAYMENT_METHODS }, true)}
        label="Forma de pago"
      />
    </div>
  );
};
