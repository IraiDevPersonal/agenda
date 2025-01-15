import { IconDislike, IconLike } from "@/features/_core/components/icons";
import {
  Alert,
  Button,
  Dialog,
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
        <Dialog.Description className="text-center italic">
          "Verifique y confirme todos los datos del paciente antes de confirmar
          asistencia."
        </Dialog.Description>
      </Dialog.Header>

      <Dialog.Body className="divide-y divide-black/30">
        <Professional className="pt-0" />
        <Patient />
        <PatientHistory className="pb-2" />
      </Dialog.Body>

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
