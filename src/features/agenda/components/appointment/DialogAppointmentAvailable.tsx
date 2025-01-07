import {
  IconPlus,
  IconSave,
  IconSearch,
} from "@/features/_core/components/icons";
import {
  Button,
  Dialog,
  StateDialogProps,
} from "@/features/_core/components/ui";
import { FormPatient, SearchPatient } from "@/features/patient/components";
import { PatientEntity } from "@/features/patient/domain/patient.entity";
import { useState } from "react";

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
    <Dialog modal isOpen={isOpen} onClose={handleClose}>
      <Dialog.Content className="sm:max-w-[500px]">
        {showCreateForm ? <FormCreatePatient /> : <FormSearchPatien />}
        <Dialog.Footer>
          <Button
            variant="info"
            className="mr-auto"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? "Buscar paciente" : "Crear paciente"}
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
      </Dialog.Content>
    </Dialog>
  );
};

const FormSearchPatien = () => {
  const [patient, setPatient] = useState<PatientEntity | null>(null);
  function getPatient(patient: PatientEntity | null) {
    setPatient(patient);
  }

  return (
    <>
      <Dialog.Header title="Paciente">
        <SearchPatient getPatient={getPatient} />
      </Dialog.Header>
      <Dialog.Body className="py-2">
        <h5 className="text-center font-semibold">Datos Paciente</h5>
        {patient ? (
          <FormPatient initialValues={patient} />
        ) : (
          <Dialog.Description className="text-center text-sm italic">
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
      <Dialog.Header title="Crear nuevo paciente" />
      <Dialog.Body>
        <FormPatient />
      </Dialog.Body>
    </>
  );
};
