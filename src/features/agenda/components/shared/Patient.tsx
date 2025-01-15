import { DataItem } from "./DataItem";
import { DataWrapper } from "./DataWrapper";

export const Patient = () => {
  return (
    <DataWrapper title="Paciente">
      <DataItem label="Nombre" value="Ignacio Rodrigo Arriagada Iriarte" />
      <DataItem label="Rut" value="19.050.844-7" />
      <DataItem label="Teléfono" value="+56956980565" />
      <DataItem label="Correo" value="ignacio.arr01@gmail.com" />
    </DataWrapper>
  );
};
