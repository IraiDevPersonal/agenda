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
import { DialogHandlerProps } from "@/config";
import { useForm } from "@/features/_core/hooks";

type Props = DialogHandlerProps;
type CommonProps = Pick<DialogHandlerProps, "onClose"> & {
  showCreateForm: boolean;
  toggleShowCreateForm(): void;
};

export const DialogAppointmentAvailable: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleClose = () => {
    onClose();
    setShowCreateForm(false);
  };
  const handleToggle = () => {
    setShowCreateForm((prev) => !prev);
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      {showCreateForm ? (
        <FormCreatePatient
          onClose={handleClose}
          showCreateForm={showCreateForm}
          toggleShowCreateForm={handleToggle}
        />
      ) : (
        <FormSearchPatient
          onClose={handleClose}
          showCreateForm={showCreateForm}
          toggleShowCreateForm={handleToggle}
        />
      )}
    </Dialog>
  );
};

type FormPatientProps = CommonProps & {
  initialValues?: PatientEntity;
  withAutofocus?: boolean;
};

const FormPatient: React.FC<FormPatientProps> = ({
  initialValues,
  withAutofocus,
  ...props
}) => {
  const { controller, handleSubmit } = useForm({
    defaultValues: initialValues,
    validationSchema: PatientEntity.validationSchema,
  });
  return (
    <form onSubmit={handleSubmit(() => console.log("submit XDDD"))}>
      <FormFieldsPatient
        withAutofocus={withAutofocus}
        controller={controller}
      />
      <DialogActions {...props} />
    </form>
  );
};

const FormSearchPatient: React.FC<CommonProps> = (props) => {
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
          <FormPatient initialValues={patient} {...props} />
        ) : (
          <>
            <Text type="text">Sin resultados...</Text>
            <DialogActions {...props} />
          </>
        )}
      </Dialog.Body>
    </>
  );
};

const FormCreatePatient: React.FC<CommonProps> = (props) => {
  return (
    <>
      <Dialog.Header
        title="Registrar y agendar paciente"
        classNames={{
          content: "flex-row gap-2 *:w-1/2 items-center",
        }}
      >
        <SelectedApointmentDateTime type="available" />
        <Alert
          severity="info"
          description="Al Registrar y agendar se creará al paciente y se le agendará la cita seleccionada."
        />
      </Dialog.Header>

      <Dialog.Body>
        <FormPatient withAutofocus {...props} />
      </Dialog.Body>
    </>
  );
};

const DialogActions: React.FC<CommonProps> = ({
  toggleShowCreateForm,
  showCreateForm,
  onClose,
}) => {
  return (
    <Dialog.Footer className="mt-6">
      <Button variant="info" className="mr-auto" onClick={toggleShowCreateForm}>
        {showCreateForm ? "Buscar paciente" : "Registrar paciente"}
        {showCreateForm ? <IconSearch /> : <IconPlus />}
      </Button>
      <Button variant="text" onClick={onClose}>
        Cancelar
      </Button>
      <Button type="submit">
        {showCreateForm ? "Registrar y agendar" : "Agendar"}
        <IconSave />
      </Button>
    </Dialog.Footer>
  );
};
