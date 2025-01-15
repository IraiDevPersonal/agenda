import { IconDislike, IconLike } from "@/features/_core/components/icons";
import {
  Alert,
  Button,
  Dialog,
  InputFile,
  StateDialogProps,
} from "@/features/_core/components/ui";
import { Patient, PatientHistory, Professional } from "../shared";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";

type Props = StateDialogProps;

export const DialogAppointmentToConfirm: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} className="p-0">
      <Dialog.Header className="p-6 pb-0" title="Confirmar paciente">
        <SelectedApointmentDateTime type="to-confirm" />
        <Alert
          severity="info"
          description="Profesional exige bono para confirmar paciente."
        />
        <InputFile label="Adjuntar Bono" />
      </Dialog.Header>

      <Dialog.Description
        asChild
        className="divide-y divide-black/30 max-h-[min(400px,60vh)] scrollbar-styles"
      >
        <Professional className="pt-0" />
        <Patient />
        <PatientHistory className="pb-2" />
      </Dialog.Description>

      <Dialog.Footer className="p-6 pt-0">
        <Button variant="destructive" onClick={handleClose}>
          Cancelar hora
          <IconDislike />
        </Button>
        <Button>
          Confirmar hora
          <IconLike />
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
