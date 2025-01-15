import { DataItem } from "./DataItem";
import { DataWrapper } from "./DataWrapper";

type Props = {
  className?: string;
};

export const Professional: React.FC<Props> = ({ className }) => {
  return (
    <DataWrapper title="Profesional" className={className}>
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
