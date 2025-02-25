import { createContext, use, useMemo, useState } from "react";
import useForm from "@/features/_core/hooks/useForm";
import Dialog from "@/features/_core/components/ui/dialog/Dialog";
import SelectField from "@/features/_core/components/ui/selects/SelectField";
import FormFieldsPatient from "@/features/patient/components/FormFieldsPatient";
import ApointmentDateTime from "./AppointmentDatetime";
import SearchPatientByRut from "@/features/patient/components/SearchPatientByRut";
import Text from "@/features/_core/components/ui/Text";
import Alert from "@/features/_core/components/ui/Alert";
import Button from "@/features/_core/components/ui/Button";
import IconSearch from "@/features/_core/components/icons/IconSearch";
import IconPlus from "@/features/_core/components/icons/IconPlus";
import IconSave from "@/features/_core/components/icons/IconSave";
import { PAYMENT_METHODS } from "../utils/constants.util";
import { createOptions } from "@/features/_core/utils/create-options.util";
import { PatientEntity } from "@/features/patient/domain/patient.entity";
import type { DialogHandlerProps, SelectChangeEvHandler } from "@/config/types";

type Props = DialogHandlerProps;
type ContextProps = {
  component: "create" | "search";
  onToggleComponent(): void;
  resetComponent(): void;
};

const Context = createContext<ContextProps | undefined>(undefined);

const DialogAppointmentAvailable: React.FC<Props> = ({ onClose, isOpen }) => {
  const [component, setComponent] = useState<ContextProps["component"]>("search");

  const value: ContextProps = useMemo(() => {
    return {
      component,
      onToggleComponent: () => {
        setComponent((prevValue) => (prevValue === "create" ? "search" : "create"));
      },
      resetComponent: () => {
        setComponent("search");
      },
    };
  }, [component]);

  return (
    <Context value={value}>
      <Dialog isOpen={isOpen} onClose={onClose}>
        {component === "create" ? <CreatePatient /> : <SearchPatient />}
      </Dialog>
    </Context>
  );
};

type FormPatientProps = {
  initialValues?: PatientEntity;
  withAutofocus?: boolean;
};

const FormPatient: React.FC<FormPatientProps> = ({ initialValues, withAutofocus }) => {
  const { controller, handleSubmit } = useForm({
    defaultValues: initialValues,
    validationSchema: PatientEntity.getValidationSchema(),
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const handleChangePaymentMethod: SelectChangeEvHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit((values) => alert(JSON.stringify(values, null, 2)))}>
      <SelectField
        error={paymentMethod ? undefined : 'Debe seleccionar una "Forma de pago"'}
        options={createOptions({ options: PAYMENT_METHODS }, true)}
        onChange={handleChangePaymentMethod}
        value={paymentMethod}
        label="Forma de pago"
        className="mb-2"
      />
      <FormFieldsPatient withAutofocus={withAutofocus} controller={controller} />
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
        <ApointmentDateTime type="available" />
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
        <ApointmentDateTime type="available" />
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
  const { component, resetComponent, onToggleComponent } = useComponentContext();
  return (
    <Dialog.Footer className="mt-6">
      {({ onClose }) => (
        <>
          <Button variant="info" className="mr-auto" onClick={onToggleComponent}>
            {component === "create" ? "Buscar paciente" : "Registrar paciente"}
            {component === "create" ? <IconSearch /> : <IconPlus />}
          </Button>
          <Button
            variant="text"
            onClick={() => {
              onClose();
              resetComponent();
            }}
          >
            Cancelar
          </Button>
          <Button type="submit" disabled={disableSaveButton}>
            {component === "create" ? "Registrar y agendar" : "Agendar"}
            <IconSave />
          </Button>
        </>
      )}
    </Dialog.Footer>
  );
};

export default DialogAppointmentAvailable;

const useComponentContext = () => {
  const context = use(Context);
  if (!context) {
    throw new Error("useContext solo puede usarse dentro de: FormContext");
  }
  return context;
};
