import { IconDislike, IconLike } from "@/features/_core/components/icons";
import {
  Alert,
  Button,
  Dialog,
  InputFile,
} from "@/features/_core/components/ui";
import { Patient, PatientHistory, Professional } from "../shared";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";
import { DialogHandlerProps } from "@/config";
import { useState } from "react";

type Props = DialogHandlerProps;

export const DialogAppointmentToConfirm: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
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
        <SelectedApointmentDateTime type="to-confirm" />
        <Alert
          severity="info"
          description="Profesional exige bono para confirmar paciente."
        />
      </Dialog.Header>

      <Dialog.Body className="max-h-[calc(100vh-360px)] overflow-y-auto gap-y-6">
        <InputFile label="Adjuntar Bono" onChange={handleChooseFile} />
        <Professional />
        <Patient />
        <PatientHistory />
      </Dialog.Body>

      <Dialog.Footer>
        <Button variant="destructive" onClick={handleClose}>
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
