import { useShowProfessionalData } from "../context/ShowProfessionalDataContext";
import Dialog from "@/features/_core/components/ui/dialog/Dialog";
import AppointmentDateTime from "./AppointmentDatetime";
import Patient from "@/features/patient/components/Patient";
import PatientHistory from "@/features/patient/components/PatientHistory";
import Professional from "@/features/professional/components/Professional";
import type { DialogHandlerProps } from "@/config/types";

type Props = DialogHandlerProps;

const DialogAppointmentCancelled: React.FC<Props> = ({ isOpen, onClose }) => {
  const { showProfesionalData } = useShowProfessionalData();
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
        <AppointmentDateTime type="cancelled" />
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
