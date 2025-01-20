import { Option, DialogHandlerProps } from "@/config";
import { IconSave } from "@/features/_core/components/icons";
import { Button, Dialog, Select, Text } from "@/features/_core/components/ui";
import { Patient, Professional } from "../shared";
import { SelectedApointmentDateTime } from "./SelectedApointmentDatetime";
import { createOptions } from "@/features/_core/utils/helpers.util";

const STATUS: Option[] = [
  { label: "Estado: Atendido", value: "1" },
  { label: "Estado: En salada de espera", value: "2" },
  { label: "Estado: No se atendio", value: "3" },
  { label: "Estado: No se presento", value: "4" },
];

type Props = DialogHandlerProps;

export const DialogAppointmentConfirmed: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} className="sm:max-w-[500px]">
      <Dialog.Header title="Seguimiento asistencia paciente">
        <SelectedApointmentDateTime type="confirmed" />
      </Dialog.Header>

      <Dialog.Body className="gap-y-6">
        <Select
          className="mt-2"
          options={createOptions({
            options: STATUS,
            customLabel: "Estado: Sin seleción",
          })}
        />
        <Text type="text" className="mt-2">
          "Mantenga el estado de seguimiento de asistencia del paciente
          actualizado"
        </Text>
        <Professional />
        <Patient />
      </Dialog.Body>

      <Dialog.Footer>
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
