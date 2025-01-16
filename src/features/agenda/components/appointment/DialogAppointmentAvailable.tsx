import {
  IconPlus,
  IconSave,
  IconSearch,
} from "@/features/_core/components/icons";
import { Alert, Button, Dialog, Text } from "@/features/_core/components/ui";
import {
  FormFieldsPatient,
  SearchPatientByRut,
} from "@/features/patient/components";
import { PatientEntity } from "@/features/patient/domain/patient.entity";
import { useState } from "react";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";
import { StateDialogProps } from "@/config";

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
          {showCreateForm ? "Registrar y agendar" : "Agendar"}
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
        <SelectedApointmentDateTime type="available" />
      </Dialog.Header>

      <Dialog.Body>
        <SearchPatientByRut getPatient={getPatient} />
        <Text type="subtitle" className="text-center">
          Datos Paciente
        </Text>
        {patient ? (
          <FormFieldsPatient initialValues={patient} />
        ) : (
          <Text type="text">Sin resultados...</Text>
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
        classNames={{
          content: "flex-row gap-2 *:w-1/2",
        }}
      >
        <SelectedApointmentDateTime type="available" />
        <Alert
          severity="info"
          description="Al guardar se registrará al paciente y se agendará la hora seleccionada."
        />
      </Dialog.Header>

      <Dialog.Body>
        <FormFieldsPatient />
      </Dialog.Body>
    </>
  );
};
