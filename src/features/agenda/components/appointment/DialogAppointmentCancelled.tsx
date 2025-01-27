import { DialogHandlerProps } from "@/config";
import { useViewProfessionalData } from "../../context";
import Dialog from "@/features/_core/components/ui/dialog/Dialog";
import SelectedAppointmentDateTime from "./SelectedAppointmentDatetime";
import Professional from "../shared/Professional";
import Patient from "../shared/Patient";
import PatientHistory from "../shared/PatientHistory";

type Props = DialogHandlerProps;

const DialogAppointmentCancelled: React.FC<Props> = ({ isOpen, onClose }) => {
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
        <SelectedAppointmentDateTime type="cancelled" />
      </Dialog.Header>

      <Dialog.Body className="gap-y-6">
        {showProfesionalData && <Professional />}
        <Patient />
        <PatientHistory />
      </Dialog.Body>
    </Dialog>
  );
};

export default DialogAppointmentCancelled;
