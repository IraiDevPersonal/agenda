// rut: string;
// names: string;
// email: string;
// phone: string;
// last_names: string;

import { Input } from "@/features/_core/components/ui";
import { PatientEntity } from "../domain/patient.entity";

type Props = {
  initialValues?: PatientEntity;
};

export const FormPatient: React.FC<Props> = ({ initialValues }) => {
  return (
    <div className="grid gap-2 grid-cols-2">
      <Input.Field defaultValue={initialValues?.rut} label="Rut" />
      <Input.Field defaultValue={initialValues?.phone} label="Teléfono" />
      <Input.Field defaultValue={initialValues?.names} label="Nombres" />
      <Input.Field defaultValue={initialValues?.last_names} label="Apellidos" />
      <Input.Field
        className="col-span-2"
        defaultValue={initialValues?.email}
        label="Correo"
      />
    </div>
  );
};
