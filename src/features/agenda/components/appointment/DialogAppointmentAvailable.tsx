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
import { useAvailableAppointmentToggleFormContext } from "../../context";
import { PAYMENT_METHODS } from "../../utils/constants.util";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";
import { DialogHandlerProps } from "@/config";

type Props = DialogHandlerProps;

export const DialogAppointmentAvailable: React.FC<Props> = ({
  onClose,
  isOpen,
}) => {
  const { selectedForm } = useAvailableAppointmentToggleFormContext();

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      {selectedForm === "create" ? <CreatePatient /> : <SearchPatient />}
    </Dialog>
  );
};

type FormPatientProps = {
  initialValues?: PatientEntity;
  withAutofocus?: boolean;
};

const FormPatient: React.FC<FormPatientProps> = ({
  initialValues,
  withAutofocus,
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
      <DialogActions disableSaveButton={!paymentMethod} />
    </form>
  );
};

const SearchPatient = () => {
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
          <FormPatient initialValues={patient} />
        ) : (
          <>
            <Text type="text">Sin resultados...</Text>
            <DialogActions />
          </>
        )}
      </Dialog.Body>
    </>
  );
};

const CreatePatient = () => {
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
        <FormPatient withAutofocus />
      </Dialog.Body>
    </>
  );
};

const DialogActions: React.FC<{ disableSaveButton?: boolean }> = ({
  disableSaveButton = false,
}) => {
  const { selectedForm, resetSelectedForm, handleToggleSelectedForm } =
    useAvailableAppointmentToggleFormContext();
  return (
    <Dialog.Footer className="mt-6">
      {({ onClose }) => (
        <>
          <Button
            variant="info"
            className="mr-auto"
            onClick={handleToggleSelectedForm}
          >
            {selectedForm === "create"
              ? "Buscar paciente"
              : "Registrar paciente"}
            {selectedForm === "create" ? <IconSearch /> : <IconPlus />}
          </Button>
          <Button
            variant="text"
            onClick={() => {
              onClose();
              resetSelectedForm();
            }}
          >
            Cancelar
          </Button>
          <Button type="submit" disabled={disableSaveButton}>
            {selectedForm === "create" ? "Registrar y agendar" : "Agendar"}
            <IconSave />
          </Button>
        </>
      )}
    </Dialog.Footer>
  );
};
