import {
  IconPlus,
  IconSave,
  IconSearch,
} from "@/features/_core/components/icons";
import {
  Alert,
  Button,
  Dialog,
  StateDialogProps,
} from "@/features/_core/components/ui";
import { FormPatient, SearchPatientByRut } from "@/features/patient/components";
import { PatientEntity } from "@/features/patient/domain/patient.entity";
import { useState } from "react";
import { SelectedApointmentTime } from "./SelectedApointmentDatetime";

type Props = StateDialogProps;

export const DialogAppointmentAvailable: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleClose = () => {
    onClose();
    setShowCreateForm(false);
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} className="sm:max-w-[500px]">
      {showCreateForm ? <FormCreatePatient /> : <FormSearchPatient />}
      <Dialog.Footer>
        <Button
          variant="info"
          className="mr-auto"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? "Buscar paciente" : "Registrar paciente"}
          {showCreateForm ? <IconSearch /> : <IconPlus />}
        </Button>
        <Button variant="light" onClick={handleClose}>
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

const FormSearchPatient = () => {
  const [patient, setPatient] = useState<PatientEntity | null>(null);
  function getPatient(patient: PatientEntity | null) {
    setPatient(patient);
  }

  return (
    <>
      <Dialog.Header title="Agendar Paciente">
        <SearchPatientByRut getPatient={getPatient} />
        <SelectedApointmentTime id="available" />
      </Dialog.Header>
      <Dialog.Body className="py-2">
        <h5 className="text-center font-semibold mb-4">Datos Paciente</h5>
        {patient ? (
          <FormPatient initialValues={patient} />
        ) : (
          <Dialog.Description className="text-center text-sm italic text-muted-foreground">
            Sin resultados...
          </Dialog.Description>
        )}
      </Dialog.Body>
    </>
  );
};

const FormCreatePatient = () => {
  return (
    <>
      <Dialog.Header title="Registrar y agendar paciente">
        <Alert
          severity="info"
          description="Al guardar se registrara al nuevo paciente y se agendara la hora asignada."
        />
        <SelectedApointmentTime id="available" />
      </Dialog.Header>
      <Dialog.Body>
        <FormPatient />
      </Dialog.Body>
    </>
  );
};
