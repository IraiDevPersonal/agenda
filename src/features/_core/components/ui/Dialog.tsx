import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { IconX } from "@/features/_core/components/icons/IconX";
import { cn } from "@/config";

type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

type DialogHeaderProps = {
  title: string;
  classNames?: Partial<{
    title: string;
  }>;
} & React.HTMLAttributes<HTMLDivElement>;

type DialogContentProps = {
  ref?: React.Ref<HTMLDivElement>;
  overlayRef?: React.Ref<HTMLDivElement>;
  classNames?: Partial<{
    overlay: string;
    close: string;
    icon: string;
  }>;
} & React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

export type StateDialogProps = {
  onClose(): void;
  isOpen: boolean;
};

type DialogProps = StateDialogProps &
  Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>,
    "open" | "onOpenChange"
  > &
  DialogContentProps;

export function Dialog({
  isOpen,
  onClose,
  children,
  defaultOpen,
  modal,
  ...props
}: DialogProps) {
  return (
    <DialogPrimitive.Root
      modal={modal}
      open={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={onClose}
    >
      <DialogContent {...props}>{children}</DialogContent>
    </DialogPrimitive.Root>
  );
}

const DialogContent: React.FC<DialogContentProps> = ({
  overlayRef,
  classNames,
  className,
  children,
  ref,
  ...props
}) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        ref={overlayRef}
        className={cn(
          "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          classNames?.overlay
        )}
        {...props}
      />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100%-4rem)] w-full -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border bg-background p-4 shadow-lg shadow-black/5 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-xl",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className={cn(
            "group absolute right-2 top-2 flex size-7 items-center justify-center rounded-lg outline-offset-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none",
            classNames?.close
          )}
        >
          <IconX
            className={cn(
              "opacity-60 transition-opacity group-hover:opacity-100",
              classNames?.icon
            )}
          />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

const DialogHeader: React.FC<DialogHeaderProps> = ({
  classNames,
  className,
  children,
  title,
  ...props
}) => {
  return (
    <header
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    >
      <DialogPrimitive.Title
        className={cn(
          "text-xl font-semibold tracking-tight first-letter:uppercase",
          classNames?.title
        )}
      >
        {title}
      </DialogPrimitive.Title>
      {children}
    </header>
  );
};

const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <footer
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3",
        className
      )}
      {...props}
    />
  );
};

const DialogDescription: React.FC<DialogDescriptionProps> = ({
  className,
  ...props
}) => {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};

const DialogBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={cn("flex flex-col gap-1.5", className)} {...props} />;
};

const DialogTrigger = DialogPrimitive.Trigger;

Dialog.Description = DialogDescription;
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Trigger = DialogTrigger;
