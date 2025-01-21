import { DialogHandlerProps } from "@/config";
import {
  IconPlus,
  IconSave,
  IconSearch,
} from "@/features/_core/components/icons";
import {
  Alert,
  Button,
  Dialog,
  SelectField,
  Text,
} from "@/features/_core/components/ui";
import { useForm } from "@/features/_core/hooks";
import { createOptions } from "@/features/_core/utils/helpers.util";
import {
  FormFieldsPatient,
  SearchPatientByRut,
} from "@/features/patient/components";
import { PatientEntity } from "@/features/patient/domain/patient.entity";
import { useState } from "react";
import { PAYMENT_METHODS } from "../../utils/constants.util";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";

type Props = DialogHandlerProps;
type CommonProps = Pick<DialogHandlerProps, "onClose"> & {
  toggleShowCreateForm(): void;
  showCreateForm: boolean;
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
        <CreatePatient
          onClose={handleClose}
          showCreateForm={showCreateForm}
          toggleShowCreateForm={handleToggle}
        />
      ) : (
        <SearchPatient
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
  const [paymentMethod, setPaymentMethod] = useState("");
  const handleChangePaymentMethod: React.ChangeEventHandler<
    HTMLSelectElement
  > = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit((values) =>
        alert(JSON.stringify(values, null, 2))
      )}
    >
      <SelectField
        error={
          paymentMethod ? undefined : 'Debe seleccionar una "Forma de pago"'
        }
        options={createOptions({ options: PAYMENT_METHODS }, true)}
        onChange={handleChangePaymentMethod}
        value={paymentMethod}
        label="Forma de pago"
        className="mb-2"
      />
      <FormFieldsPatient
        withAutofocus={withAutofocus}
        controller={controller}
      />
      <DialogActions {...props} disableSaveButton={!paymentMethod} />
    </form>
  );
};

/**
 * datos para bono fonasa
 *
 */

const SearchPatient: React.FC<CommonProps> = (props) => {
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

const CreatePatient: React.FC<CommonProps> = (props) => {
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

const DialogActions: React.FC<
  CommonProps & { disableSaveButton?: boolean }
> = ({
  disableSaveButton = false,
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
      <Button type="submit" disabled={disableSaveButton}>
        {showCreateForm ? "Registrar y agendar" : "Agendar"}
        <IconSave />
      </Button>
    </Dialog.Footer>
  );
};
