import React from "react";
import useDialog from "@/features/_core/hooks/useDialog";
import ArrayMap from "@/features/_core/components/utils/ArrayMap";
import Dialog from "@/features/_core/components/ui/dialog/Dialog";
import TextItem from "@/features/_core/components/ui/TextItem";
import IconDots from "@/features/_core/components/icons/IconDots";
import cn from "@/config/tailwind-merge";
import DateHelper from "@/config/date-helper";
import CalendarEntity from "../domain/calendar.entity";

type Props = CalendarEntity & {
  isSelected: boolean;
};

const DialogCalendarDay: React.FC<Props> = React.memo(
  ({ isSelected, date, appointments }) => {
    const [isOpen, onOpenChange] = useDialog();
    const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
      e.stopPropagation();
      onOpenChange();
    };

    return (
      <>
        <li
          onClick={handleClick}
          className={cn(
            "px-1 py-0.5 w-max text-left hover:bg-primary/10 transition-colors duration-300 rounded-md",
            isSelected && "hover:bg-accent/20",
          )}
        >
          <IconDots width={16} height={16} />
        </li>
        <Dialog
          isOpen={isOpen}
          onClose={onOpenChange}
          shouldClickOutsideCloseDialog
          shouldEscapeKeyCloseDialog
          showCloseButton
        >
          <Dialog.Header
            title={`Citas para ${DateHelper.format(DateHelper.getFullDate(date), "dd-of-mmmm-of-yyyy")}`}
          />
          <Dialog.Body>
            <ul className="space-y-2">
              <ArrayMap dataset={appointments}>
                {(item) => (
                  <li
                    key={item.uid}
                    className="relative overflow-hidden rounded-xl p-4 pl-7 space-y-1 shadow-lg hover:bg-primary hover:text-accent transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:w-3 before:h-full before:bg-primary"
                  >
                    <TextItem label="Profesional">{item.professional_name}</TextItem>
                    <TextItem label="Paciente">{item.pattient_name}</TextItem>
                    <TextItem label="Rut Paciente">{item.patient_rut}</TextItem>
                    <TextItem label="Horario">{item.appointment_time}</TextItem>
                  </li>
                )}
              </ArrayMap>
            </ul>
          </Dialog.Body>
        </Dialog>
      </>
    );
  },
);

export default DialogCalendarDay;
