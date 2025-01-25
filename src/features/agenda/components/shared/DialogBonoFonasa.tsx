import IconInfo from "@/features/_core/components/icons/IconInfo";
import IconLocation from "@/features/_core/components/icons/IconLocation";
import IconPhone from "@/features/_core/components/icons/IconPhone";
import IconWeb from "@/features/_core/components/icons/IconWeb";
import Button from "@/features/_core/components/ui/Button";
import Dialog from "@/features/_core/components/ui/dialog/Dialog";
import Text from "@/features/_core/components/ui/Text";
import TextItem from "@/features/_core/components/ui/TextItem";
import { useDialog } from "@/features/_core/hooks";

// TODO: mejorar este componente visualemente
const DialogBonoFonasa = () => {
  const [isOepn, onToggleOpen] = useDialog();
  const handleClose = () => {
    onToggleOpen();
  };

  return (
    <>
      <Button onClick={onToggleOpen} className="bg-sky-800 hover:bg-sky-700">
        <IconInfo /> Datos Fonasa
      </Button>

      <Dialog
        isOpen={isOepn}
        showCloseButton
        onClose={handleClose}
        shouldEscapeKeyCloseDialog
        shouldClickOutsideCloseDialog
        className="sm:max-w-[450px] left-auto right-3.5 top-3.5 -translate-x-0 translate-y-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-3.5  data-[state=closed]:slide-out-to-top-3.5 data-[state=open]:slide-in-from-right-3.5 data-[state=open]:slide-in-from-top-3.5 bg-sky-50 text-sky-800 border-sky-800 shadow-sky-800/10 p-0 gap-0"
        classNames={{
          overlay: "bg-sky-900/30",
        }}
      >
        <Dialog.Header
          title="Bono Fonasa"
          className="p-6 pb-0"
          classNames={{ title: "leading-none" }}
        />
        <Dialog.Body className="*:p-6 *:space-y-2 gap-0">
          <div className="border-b border-sky-800 *:ps-3">
            <Text type="subtitle" className="!ps-0">
              Datos Prestador
            </Text>
            <TextItem label="Nombre">Ignacio Arriagada I.</TextItem>
            <TextItem label="Rut">19.050.844-7</TextItem>
            <TextItem label="Codigo prestación 1º sesión">0902001</TextItem>
            <TextItem label="Codigo prestación siguientes sesiones">
              0902002
            </TextItem>
          </div>
          <div>
            <Text type="subtitle">Comprar En</Text>
            <ul className="px-3 space-y-1 *:flex *:items-center *:gap-3 font-medium">
              <li>
                <IconWeb />
                <span>
                  Online en mi fonasa (<strong>CON CLAVE UNICA</strong>)
                </span>
              </li>
              <li>
                <IconPhone />
                <span>
                  Sencillito (LLAMAR AL <strong>600 360 3000</strong>)
                </span>
              </li>
              <li>
                <IconLocation />
                <span>
                  Fonasa (<strong>CALLE ALMAGRO #417</strong>)
                </span>
              </li>
            </ul>
          </div>
        </Dialog.Body>
      </Dialog>
    </>
  );
};

export default DialogBonoFonasa;
