import { useShowProfessionalData } from "../context/ShowProfessionalDataContext";
import Dialog from "@/modules/_core/components/ui/dialog/Dialog";
import AppointmentDateTime from "./AppointmentDatetime";
import Patient from "@/modules/patient/components/Patient";
import PatientHistory from "@/modules/patient/components/PatientHistory";
import Professional from "@/modules/professional/components/Professional";
import type { DialogPropsHandler } from "@/config/types";

type Props = DialogPropsHandler;

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
