import { useState } from "react";
import { useShowProfessionalData } from "../context/ShowProfessionalDataContext";
import Dialog from "@/features/_core/components/ui/dialog/Dialog";
import AppointmentDateTime from "./AppointmentDatetime";
import Alert from "@/features/_core/components/ui/Alert";
import InputFile from "@/features/_core/components/ui/inputs/InputFile";
import Button from "@/features/_core/components/ui/Button";
import IconDislike from "@/features/_core/components/icons/IconDislike";
import IconLike from "@/features/_core/components/icons/IconLike";
import Professional from "@/features/professional/components/Professional";
import Patient from "@/features/patient/components/Patient";
import PatientHistory from "@/features/patient/components/PatientHistory";
import type { DialogHandlerProps } from "@/config/types";

type Props = DialogHandlerProps;

const DialogAppointmentToConfirm: React.FC<Props> = ({ isOpen, onClose }) => {
  const { showProfesionalData } = useShowProfessionalData();
  const [file, setFile] = useState<File | null>(null);
  const handleClose = () => {
    setFile(null);
    onClose();
  };
  const handleChooseFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0] ?? null;
    setFile(file);
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <Dialog.Header title="Confirmar paciente">
        <AppointmentDateTime type="to-confirm" />
        <Alert
          severity="info"
          description="Profesional exige bono para confirmar paciente."
        />
      </Dialog.Header>

      <Dialog.Body className="max-h-[calc(100vh-360px)] overflow-y-auto gap-y-6">
        <InputFile label="Adjuntar Bono" onChange={handleChooseFile} />
        {showProfesionalData && <Professional />}
        <Patient />
        <PatientHistory />
      </Dialog.Body>

      <Dialog.Footer>
        <Button variant="text" onClick={handleClose} className="mr-auto">
          Cerrar
        </Button>
        <Button variant="destructive">
          Cancelar hora
          <IconDislike />
        </Button>
        <Button disabled={!file}>
          Confirmar hora
          <IconLike />
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

export default DialogAppointmentToConfirm;
