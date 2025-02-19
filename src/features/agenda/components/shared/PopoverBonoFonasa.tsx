import React from "react";
import IconInfo from "@/features/_core/components/icons/IconInfo";
import IconLocation from "@/features/_core/components/icons/IconLocation";
import IconPhone from "@/features/_core/components/icons/IconPhone";
import IconWeb from "@/features/_core/components/icons/IconWeb";
import Button from "@/features/_core/components/ui/Button";
import Popover from "@/features/_core/components/ui/Popover";
import Text from "@/features/_core/components/ui/Text";
import TextItem from "@/features/_core/components/ui/TextItem";

const PopoverBonoFonasa = React.memo(() => {
  return (
    <Popover>
      <Button asChild>
        <Popover.Trigger>
          <IconInfo /> Datos Fonasa
        </Popover.Trigger>
      </Button>

      <Popover.Content showArrow align="end" className="p-0">
        <div className="p-6">
          <Text type="subtitle" className="pb-3">
            Datos Prestador
          </Text>
          <ul className="px-3">
            <li className="space-y-1.5">
              <TextItem label="Nombre">Ignacio Rodrigo Arriagada Iriarte</TextItem>
              <TextItem label="Rut">19.050.844-7</TextItem>
              <TextItem label="Codigo prestación 1º sesión">0902001</TextItem>
              <TextItem label="Codigo prestación siguientes sesiones">0902002</TextItem>
            </li>
          </ul>
        </div>
        <div className="p-6 bg-accent">
          <Text type="subtitle" className="mb-3">
            Comprar En
          </Text>
          <ul className="px-3 space-y-1 *:flex *:items-center *:gap-3 [&_strong]:font-semibold">
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
});

export default PopoverBonoFonasa;
