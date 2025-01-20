import { InputField, SelectField } from "@/features/_core/components/ui";
import { PatientEntity } from "../domain/patient.entity";
import { cn, Option } from "@/config";
import { createOptions } from "@/features/_core/utils/helpers.util";

const PAYMENT_METHODS: Option[] = [
  { label: "Fonasa", value: "fonasa" },
  { label: "Particular", value: "particular" },
];

type Props = {
  initialValues?: PatientEntity;
  withAutofocus?: boolean;
  className?: string;
};

export const FormFieldsPatient: React.FC<Props> = ({
  initialValues,
  withAutofocus,
  className,
}) => {
  return (
    <div className={cn("grid gap-2 grid-cols-2", className)}>
      <InputField
        autoFocus={withAutofocus}
        defaultValue={initialValues?.rut}
        label="Rut"
      />
      <InputField defaultValue={initialValues?.phone} label="Teléfono" />
      <InputField defaultValue={initialValues?.names} label="Nombres" />
      <InputField defaultValue={initialValues?.last_names} label="Apellidos" />
      <InputField
        className="col-span-2"
        defaultValue={initialValues?.email}
        label="Correo"
      />
      <InputField
        className="col-span-2"
        defaultValue={initialValues?.address}
        label="Dirección"
      />
      <SelectField
        className="col-span-2"
        options={createOptions({ options: PAYMENT_METHODS }, true)}
        label="Forma de pago"
      />
    </div>
  );
};
