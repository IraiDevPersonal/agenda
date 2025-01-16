import { InputField } from "@/features/_core/components/ui";
import { PatientEntity } from "../domain/patient.entity";
import { cn } from "@/config";

type Props = {
  initialValues?: PatientEntity;
  className?: string;
};

export const FormFieldsPatient: React.FC<Props> = ({
  initialValues,
  className,
}) => {
  return (
    <div className={cn("grid gap-2 grid-cols-2", className)}>
      <InputField defaultValue={initialValues?.rut} label="Rut" />
      <InputField defaultValue={initialValues?.phone} label="Teléfono" />
      <InputField defaultValue={initialValues?.names} label="Nombres" />
      <InputField defaultValue={initialValues?.last_names} label="Apellidos" />
      <InputField
        className="col-span-2"
        defaultValue={initialValues?.email}
        label="Correo"
      />
    </div>
  );
};
