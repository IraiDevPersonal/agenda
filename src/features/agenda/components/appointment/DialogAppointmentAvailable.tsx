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
import {
  FormFieldsPatient,
  SearchPatientByRut,
} from "@/features/patient/components";
import { PatientEntity } from "@/features/patient/domain/patient.entity";
import { useState } from "react";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";

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
    <Dialog isOpen={isOpen} onClose={handleClose}>
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

const FormSearchPatient = () => {
  const [patient, setPatient] = useState<PatientEntity | null>(null);
  function getPatient(patient: PatientEntity | null) {
    setPatient(patient);
  }

  return (
    <>
      <Dialog.Header title="Agendar Paciente">
        <SearchPatientByRut getPatient={getPatient} />
        <SelectedApointmentDateTime type="available" />
      </Dialog.Header>
      <Dialog.Body className="py-2">
        <h5 className="text-center font-semibold mb-4">Datos Paciente</h5>
        {patient ? (
          <FormFieldsPatient initialValues={patient} />
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
      <Dialog.Header
        title="Registrar y agendar paciente"
        classNames={{ title: "text-center" }}
      >
        <Alert
          severity="info"
          description="Al guardar se registrará al paciente y se agendará la hora seleccionada."
        />
        <SelectedApointmentDateTime type="available" />
      </Dialog.Header>
      <Dialog.Body>
        <FormFieldsPatient />
      </Dialog.Body>
    </>
  );
};
