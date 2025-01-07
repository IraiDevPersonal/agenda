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
import { useState } from "react";

type Props = StateDialogProps;

export const DialogAppointmentAvailable: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <Dialog modal isOpen={isOpen} onClose={onClose}>
      <Dialog.Content className="sm:max-w-[500px]">
        {showCreateForm ? <FormCreatePatient /> : <SearchPatienForm />}
        <Dialog.Footer>
          <Button
            variant="info"
            className="mr-auto"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? "Buscar paciente" : "Crear paciente"}
            {showCreateForm ? <IconSearch /> : <IconPlus />}
          </Button>
          <Button variant="light" onClick={onClose}>
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

const SearchPatienForm = () => {
  const [patientNotFound] = useState(false);
  return (
    <>
      <Dialog.Header title="Paciente">
        <SearchPatient getPatient={console.log} />
      </Dialog.Header>
      <Dialog.Body className="py-2">
        <h5 className="text-center font-semibold">Datos Paciente</h5>
        {patientNotFound ? (
          <FormPatient />
        ) : (
          <span className="text-center text-sm text-muted-foreground italic">
            Sin resultados...
          </span>
        )}
      </Dialog.Body>
    </>
  );
};

const FormCreatePatient = () => {
  return (
    <Dialog.Body>
      <FormPatient />
    </Dialog.Body>
  );
};
