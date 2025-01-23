import { TextItem } from "@/features/_core/components/ui";
import { DataWrapper } from "./DataWrapper";

export const Professional = () => {
  return (
    <DataWrapper title="Datos Profesional">
      <TextItem label="Nombre">Ignacio Rodigo Arriagada Iriarte</TextItem>
      <TextItem label="Profesión">Psicolog@</TextItem>
      <TextItem label="Forma de pago">Bono/Particular</TextItem>
      <TextItem label="Metodo de confirmación">
        whatsapp/teléfono/correo
      </TextItem>
    </DataWrapper>
  );
};
