import * as React from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import IconChevronLeft from "../icons/IconChevronLeft";
import IconChevronRight from "../icons/IconChevronRight";
import { buttonVariants } from "./Button";
import cn from "@/config/tailwind-merge";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar: React.FC<CalendarProps> = ({
  showOutsideDays = true,
  classNames,
  components,
  className,
  ...props
}) => {
  const defaultClassNames = {
    months: "relative flex flex-col sm:flex-row gap-4",
    month: "w-full",
    month_caption: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
    caption_label: "text-lg font-semibold first-letter:uppercase w-40 text-center",
    nav: "absolute top-0 flex w-full gap-40 justify-center z-30",
    button_previous: cn(buttonVariants({ variant: "text", size: "icon" })),
    button_next: cn(buttonVariants({ variant: "text", size: "icon" })),
    weekday: "text-base p-2 font-semibold text-muted-foreground/80",
    day_button:
      "relative flex p-2 h-36 w-40 whitespace-nowrap bg-accent rounded-xl border-2 border-transparent hover:border-primary/40 text-foreground transition-all duration-300 hover:scale-105 outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary group-data-[selected]:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:bg-transparent group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground",
    day: "group p-0.5",
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today:
      "*:after:pointer-events-none *:after:absolute *:after:top-3.5 *:after:right-2 *:after:z-10 *:after:size-2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors",
    outside: "text-muted-foreground pointer-events-none",
    hidden: "invisible",
    week_number: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
  };

  const mergedClassNames: typeof defaultClassNames = Object.keys(
    defaultClassNames,
  ).reduce(
    (acc, key) => ({
      ...acc,
      [key]: classNames?.[key as keyof typeof classNames]
        ? cn(
            defaultClassNames[key as keyof typeof defaultClassNames],
            classNames[key as keyof typeof classNames],
          )
        : defaultClassNames[key as keyof typeof defaultClassNames],
    }),
    {} as typeof defaultClassNames,
  );

  const defaultComponents = {
    Chevron: (props: any) => {
      if (props.orientation === "left") {
        return <IconChevronLeft {...props} aria-hidden="true" />;
      }
      return <IconChevronRight {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...components,
  };

  return (
    <DayPicker
      className={cn("w-fit", className)}
      showOutsideDays={showOutsideDays}
      classNames={mergedClassNames}
      components={mergedComponents}
      locale={es}
      {...props}
    />
  );
};

export default Calendar;
