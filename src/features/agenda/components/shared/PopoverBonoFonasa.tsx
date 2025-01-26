import IconInfo from "@/features/_core/components/icons/IconInfo";
import IconLocation from "@/features/_core/components/icons/IconLocation";
import IconPhone from "@/features/_core/components/icons/IconPhone";
import IconWeb from "@/features/_core/components/icons/IconWeb";
import Button from "@/features/_core/components/ui/Button";
import Popover from "@/features/_core/components/ui/Popover";
import Text from "@/features/_core/components/ui/Text";
import TextItem from "@/features/_core/components/ui/TextItem";

const PopoverBonoFonasa = () => {
  return (
    <Popover>
      <Button asChild>
        <Popover.Trigger>
          <IconInfo /> Datos Fonasa
        </Popover.Trigger>
      </Button>

      <Popover.Content
        showArrow
        align="end"
        className="p-0 divide-y-2 divide-foreground border-2 border-foreground"
      >
        <div className="space-y-1.5 *:ps-3 p-6">
          <Text type="subtitle" className="!ps-0 pb-1.5">
            Datos Prestador
          </Text>
          <TextItem label="Nombre">Ignacio Arriagada I.</TextItem>
          <TextItem label="Rut">19.050.844-7</TextItem>
          <TextItem label="Codigo prestación 1º sesión">0902001</TextItem>
          <TextItem label="Codigo prestación siguientes sesiones">
            0902002
          </TextItem>
        </div>
        <div className="p-6">
          <Text type="subtitle" className="mb-3">
            Comprar En
          </Text>
          <ul className="px-3 space-y-1 *:flex *:items-center *:gap-3 text-muted-foreground [&_strong]:text-foreground">
            <li>
              <IconWeb />
              <span>
                Online en mi fonasa <strong>CON CLAVE UNICA</strong>
              </span>
            </li>
            <li>
              <IconPhone />
              <span>
                Sencillito LLAMAR AL <strong>600 360 3000</strong>
              </span>
            </li>
            <li>
              <IconLocation />
              <span>
                Fonasa <strong>CALLE ALMAGRO #417</strong>
              </span>
            </li>
          </ul>
        </div>
      </Popover.Content>
    </Popover>
  );
};

export default PopoverBonoFonasa;
