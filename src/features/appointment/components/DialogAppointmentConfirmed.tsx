import { useShowProfessionalData } from "../context/ShowProfessionalDataContext";
import Dialog from "@/features/_core/components/ui/dialog/Dialog";
import AppointmentDateTime from "./AppointmentDatetime";
import Select from "@/features/_core/components/ui/selects/Select";
import Text from "@/features/_core/components/ui/Text";
import Button from "@/features/_core/components/ui/Button";
import IconSave from "@/features/_core/components/icons/IconSave";
import Professional from "@/features/professional/components/Professional";
import Patient from "@/features/patient/components/Patient";
import { createOptions } from "@/features/_core/utils/create-options.util";
import type { Option, DialogPropsHandler } from "@/config/types";

const STATUS: Option[] = [
  { label: "Estado: Atendido", value: "1" },
  { label: "Estado: En salada de espera", value: "2" },
  { label: "Estado: No se atendio", value: "3" },
  { label: "Estado: No se presento", value: "4" },
];

type Props = DialogPropsHandler;

const DialogAppointmentConfirmed: React.FC<Props> = ({ isOpen, onClose }) => {
  const { showProfesionalData } = useShowProfessionalData();
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} className="sm:max-w-[500px]">
      <Dialog.Header title="Seguimiento asistencia paciente">
        <AppointmentDateTime type="confirmed" />
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
          "Mantenga el estado de seguimiento de asistencia del paciente actualizado"
        </Text>
        {showProfesionalData && <Professional />}
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

export default DialogAppointmentConfirmed;
