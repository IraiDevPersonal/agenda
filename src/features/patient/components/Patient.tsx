import TextItem from "@/features/_core/components/ui/TextItem";
import DataWrapper from "../../_core/components/ui/DataWrapper";

const Patient = () => {
  return (
    <DataWrapper title="Datos Paciente">
      <TextItem label="Nombre">Ignacio Rodrigo Arriagada Iriarte</TextItem>
      <TextItem label="Rut">19.050.844-7</TextItem>
      <TextItem label="Teléfono">+56956980565</TextItem>
      <TextItem label="Correo">ignacio.arr01@gmail.com</TextItem>
    </DataWrapper>
  );
};

export default Patient;
