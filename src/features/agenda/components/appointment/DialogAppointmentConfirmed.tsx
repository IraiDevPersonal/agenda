import { IconSave } from "@/features/_core/components/icons";
import {
  Alert,
  Button,
  Dialog,
  StateDialogProps,
} from "@/features/_core/components/ui";

type Props = StateDialogProps;

export const DialogAppointmentConfirmed: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} className="sm:max-w-[500px]">
      <Dialog.Header title="Estado asistencia paciente">
        <Alert
          severity="info"
          description="Mantener seguimiento de asistencia de paciente actualizado."
        />
        <Dialog.Description></Dialog.Description>
      </Dialog.Header>

      <Dialog.Body></Dialog.Body>

      <Dialog.Footer>
        <Button variant="text" onClick={handleClose}>
          Cancelar
        </Button>
        <Button>
          Guardar
          <IconSave />
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};
