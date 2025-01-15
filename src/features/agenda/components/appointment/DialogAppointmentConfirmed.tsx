import { IconSave } from "@/features/_core/components/icons";
import {
  Button,
  Dialog,
  SelectField,
  StateDialogProps,
} from "@/features/_core/components/ui";
import { Patient, Professional } from "../shared";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";
import { Option } from "@/config";

const STATUS: Option[] = [
  { label: "Sin seleccionar", value: "" },
  { label: "Atendido", value: "1" },
  { label: "En salada de espera", value: "2" },
  { label: "No se atendio", value: "3" },
  { label: "No se presento", value: "4" },
];

type Props = StateDialogProps;

export const DialogAppointmentConfirmed: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={handleClose}
      className="p-0 sm:max-w-[500px]"
    >
      <Dialog.Header
        className="p-6 pb-0"
        title="Seguimiento asistencia paciente"
      >
        <SelectedApointmentDateTime type="confirmed" />
      </Dialog.Header>

      <Dialog.Body className="divide-y divide-black/30">
        <div className="p-6 pt-4">
          <SelectField label="Estado" options={STATUS} />
          <Dialog.Description className="italic text-center mt-2">
            "Mantenga el estado de seguimiento de asistencia del paciente
            actualizado."
          </Dialog.Description>
        </div>
        <Professional />
        <Patient />
      </Dialog.Body>

      <Dialog.Footer className="p-6 pt-0">
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

/**
 * hora de llegada
 * estado de citacion: atendido / no se presento / no se atendio
 */
