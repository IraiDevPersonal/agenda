import { DataItem } from "./DataItem";
import { DataWrapper } from "./DataWrapper";

type Props = {
  className?: string;
};

export const Patient: React.FC<Props> = ({ className }) => {
  return (
    <DataWrapper title="Paciente" className={className}>
      <DataItem label="Nombre" value="Ignacio Rodrigo Arriagada Iriarte" />
      <DataItem label="Rut" value="19.050.844-7" />
      <DataItem label="Teléfono" value="+56956980565" />
      <DataItem label="Correo" value="ignacio.arr01@gmail.com" />
    </DataWrapper>
  );
};
