import { cn } from "@/config";
import { IconDislike, IconLike } from "@/features/_core/components/icons";
import {
  Alert,
  Button,
  Dialog,
  Label,
  StateDialogProps,
} from "@/features/_core/components/ui";
import { ArrayMap } from "@/features/_core/components/utils";

type Props = StateDialogProps;

export const DialogAppointmentToBeConfirm: React.FC<Props> = ({
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
      className="sm:max-w-[500px] p-0"
    >
      <Dialog.Header title="Confirmación paciente" className="p-6 pb-0">
        <Alert
          severity="info"
          description="Profesional exige bono para confirmar paciente."
        />
        <Dialog.Description className="text-center italic">
          Verifique y confirme todos los datos del paciente antes de confirmar
          asistencia.
        </Dialog.Description>
      </Dialog.Header>

      <Dialog.Body className="divide-y divide-black/30">
        <Professional />
        <Patient />
        <PatienHistory />
      </Dialog.Body>

      <Dialog.Footer className="p-6 pt-0">
        <Button variant="destructive" onClick={handleClose}>
          Cancelar hora
          <IconDislike />
        </Button>
        <Button>
          Confirmar hora
          <IconLike />
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

const Professional = () => {
  return (
    <Wrapper title="Profesional" className="pt-0">
      <DataItem label="Nombre" value="Ignacio Rodigo Arriagada Iriarte" />
      <DataItem label="Profesión" value="Psicolog@" />
      <DataItem label="Forma de pago" value="Bono/Particular" />
      <DataItem
        label="Metodo de confirmación"
        value="whatsapp/teléfono/correo"
      />
    </Wrapper>
  );
};

const Patient = () => {
  return (
    <Wrapper title="Paciente">
      <DataItem label="Nombre" value="Ignacio Rodrigo Arriagada Iriarte" />
      <DataItem label="Rut" value="19.050.844-7" />
      <DataItem label="Teléfono" value="+56956980565" />
      <DataItem label="Correo" value="ignacio.arr01@gmail.com" />
    </Wrapper>
  );
};

const PatienHistory = () => {
  return (
    <Wrapper
      title={
        <>
          Historial paciente{" "}
          <small className="text-xs text-muted-foreground">
            (Ultimas 4 atenciones...)
          </small>
        </>
      }
    >
      <ul className="text-sm">
        <li className="flex justify-between items-center *:font-semibold">
          <strong>Fecha/Hora</strong>
          <strong>Estado</strong>
        </li>
        <ArrayMap dataset={[1, 2, 3, 4]}>
          {(item) => (
            <li
              key={item}
              className="flex items-center justify-between text-muted-foreground"
            >
              <span>07-01-2025/13:00</span>
              <span>{item === 1 ? "Cancelada" : "Confirmada"}</span>
            </li>
          )}
        </ArrayMap>
      </ul>
    </Wrapper>
  );
};

const Wrapper: React.FC<{
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}> = ({ title, children, className }) => {
  return (
    <section className={cn("flex flex-col gap-1.5 p-6", className)}>
      <h5 className="text-lg font-semibold">{title}</h5>
      {children}
    </section>
  );
};

const DataItem: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => {
  return (
    <Label>
      {label}: <span className="text-muted-foreground">{value}</span>
    </Label>
  );
};
