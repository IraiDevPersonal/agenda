import { DialogHandlerProps } from "@/config";
import { Dialog } from "@/features/_core/components/ui";
import { Patient, PatientHistory, Professional } from "../shared";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";
import { useViewProfessionalData } from "../../context";

type Props = DialogHandlerProps;

export const DialogAppointmentCancelled: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const { showProfesionalData } = useViewProfessionalData();
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={handleClose}
      showCloseButton
      shouldEscapeKeyCloseDialog
      shouldClickOutsideCloseDialog
    >
      <Dialog.Header title="Historial asistencia paciente">
        <SelectedApointmentDateTime type="cancelled" />
      </Dialog.Header>

      <Dialog.Body className="gap-y-6">
        {showProfesionalData && <Professional />}
        <Patient />
        <PatientHistory />
      </Dialog.Body>
    </Dialog>
  );
};
