import { DataItem } from "./DataItem";
import { DataWrapper } from "./DataWrapper";

export const Professional = () => {
  return (
    <DataWrapper title="Profesional">
      <DataItem label="Nombre" value="Ignacio Rodigo Arriagada Iriarte" />
      <DataItem label="Profesión" value="Psicolog@" />
      <DataItem label="Forma de pago" value="Bono/Particular" />
      <DataItem
        label="Metodo de confirmación"
        value="whatsapp/teléfono/correo"
      />
    </DataWrapper>
  );
};
