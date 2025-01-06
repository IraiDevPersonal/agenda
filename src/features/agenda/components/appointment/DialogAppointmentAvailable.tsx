import { IconSave } from "@/features/_core/components/icons";
import {
  Button,
  Dialog,
  Input,
  Label,
  RadioGroup,
  StateDialogProps,
} from "@/features/_core/components/ui";

type Props = StateDialogProps;

export const DialogAppointmentAvailable: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog modal isOpen={isOpen} onClose={onClose}>
      <Dialog.Content className="sm:max-w-[500px]">
        <Dialog.Body className="py-2">
          <h3 className="font-bold text-lg">Paciente:</h3>
          <Input.Root>
            <Input.Search placeholder="Buscar por Rut/Nombre Paciente..." />
            <FilterPatient />
          </Input.Root>
          <h5 className="text-center font-semibold mt-4">Datos Paciente</h5>
          <span className="text-center text-sm text-muted-foreground italic">
            Sin resultados...
          </span>
        </Dialog.Body>
        <Dialog.Footer>
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

const FILTER_ITEMS = [
  { label: "Rut paciente", id: "rut" },
  { label: "Nombre paciente", id: "name" },
];

const FilterPatient = () => {
  return (
    <RadioGroup
      defaultValue="rut"
      orientation="horizontal"
      // className="justify-center"
    >
      {FILTER_ITEMS.map(({ id, label }) => (
        <div
          key={id}
          className="relative flex flex-col items-start gap-4 rounded-lg border border-input p-2 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:shadow-lg has-[[data-state=checked]]:bg-accent"
        >
          <div className="flex items-center gap-2">
            <RadioGroup.Item
              id={id}
              value={id}
              className="after:absolute after:inset-0"
            />
            <Label htmlFor={id}>{label}</Label>
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};
