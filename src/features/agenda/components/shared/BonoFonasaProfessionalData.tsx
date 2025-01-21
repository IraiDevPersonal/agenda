import { Button, Dialog, Text } from "@/features/_core/components/ui";
import { useDialog } from "@/features/_core/hooks";
import { DataItem } from "./DataItem";
import { IconInfo } from "@/features/_core/components/icons";

export const BonoFonasaProfessionalData = () => {
  const [isOepn, onToggleOpen] = useDialog();
  const handleClose = () => {
    onToggleOpen();
  };

  return (
    <>
      <Button onClick={onToggleOpen}>
        <IconInfo /> Datos Fonasa
      </Button>

      <Dialog
        isOpen={isOepn}
        showCloseButton
        onClose={handleClose}
        shouldEscapeKeyCloseDialog
        shouldClickOutsideCloseDialog
        className="sm:max-w-[450px] left-auto right-40 top-10 -translate-x-0 translate-y-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-40  data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-right-40 data-[state=open]:slide-in-from-top-10"
      >
        <Dialog.Header title="Bono Fonasa" />
        <Dialog.Body className="gap-2">
          <DataItem label="Nombre" value="Ignacio Arriagada I." />
          <DataItem label="Rut" value="19.050.844-7" />
          <DataItem label="Codigo prestación 1º sesión" value="0902001" />
          <DataItem
            label="Codigo prestaación siguientes sesiones"
            value="0902002"
          />
          <Text type="subtitle">Comprar en:</Text>
          <ul className="list-inside px-3">
            <li className="list-image-[url(web.svg)]">
              ONLINE EN MI FONASA (CON CLAVE UNICA)
            </li>
            <li className="list-image-[url(call.svg)]">
              SENCILLITO (LLAMAR AL <strong>600 360 3000</strong>)
            </li>
            <li className="list-image-[url(location.svg)]">
              FONASA (CALLE ALMAGRO #417)
            </li>
          </ul>
        </Dialog.Body>
      </Dialog>
    </>
  );
};
