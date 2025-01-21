import { cn, DialogHandlerProps } from "@/config";
import { IconX } from "@/features/_core/components/icons/IconX";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

type DialogProps = DialogContentProps &
  DialogHandlerProps & {
    shouldClickOutsideCloseDialog?: boolean;
    overlayRef?: React.Ref<HTMLDivElement>;
    shouldEscapeKeyCloseDialog?: boolean;
    ref?: React.Ref<HTMLDivElement>;
    showCloseButton?: boolean;
    modal?: boolean;
    classNames?: Partial<{
      overlay: string;
      close: string;
      icon: string;
    }>;
  };

export function Dialog({
  shouldClickOutsideCloseDialog = false,
  shouldEscapeKeyCloseDialog = false,
  onInteractOutside,
  onEscapeKeyDown,
  showCloseButton,
  overlayRef,
  classNames,
  className,
  children,
  onClose,
  isOpen,
  modal,
  ref,
  ...props
}: DialogProps) {
  return (
    <DialogPrimitive.Root
      modal={modal}
      open={isOpen}
      onOpenChange={onClose}
      // defaultOpen={defaultOpen}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          ref={overlayRef}
          className={cn(
            "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            classNames?.overlay
          )}
        />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "absolute left-1/2 top-1/2 z-50 grid max-h-[calc(100%-4rem)] w-full -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border bg-background p-6 shadow-lg shadow-black/5 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl",
            "sm:max-w-[600px] scrollbar-styles",
            className
          )}
          {...props}
          onEscapeKeyDown={(e) => {
            onEscapeKeyDown?.(e);
            if (shouldEscapeKeyCloseDialog) return;
            e.preventDefault();
          }}
          onInteractOutside={(e) => {
            onInteractOutside?.(e);
            if (shouldClickOutsideCloseDialog) return;
            e.preventDefault();
          }}
        >
          {children}
          {showCloseButton && (
            <>
              <DialogPrimitive.Close
                className={cn(
                  "group absolute right-3 top-3 flex size-7 items-center justify-center rounded-lg outline-offset-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none",
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
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  classNames?: {
    title?: string;
    content?: string;
  };
};

const DialogHeader: React.FC<DialogHeaderProps> = ({
  classNames,
  className,
  children,
  title,
  ...props
}) => {
  return (
    <header className={cn("flex flex-col gap-y-2", className)} {...props}>
      <DialogPrimitive.Title
        className={cn(
          "text-2xl font-bold first-letter:uppercase text-left",
          children && "leading-none pb-2",
          classNames?.title
        )}
      >
        {title}
      </DialogPrimitive.Title>
      {children && (
        <div className={cn("flex flex-col gap-2", classNames?.content)}>
          {children}
        </div>
      )}
    </header>
  );
};

type DialogBodyProps = React.HTMLAttributes<HTMLElement> & {
  asDescription?: boolean;
};

const DialogBody: React.FC<DialogBodyProps> = ({
  asDescription = false,
  className,
  ...props
}) => {
  if (asDescription) {
    return (
      <DialogPrimitive.Description
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    );
  }

  return (
    <DialogPrimitive.Description asChild>
      <div
        className={cn("flex flex-col gap-4 scrollbar-styles", className)}
        {...props}
      />
    </DialogPrimitive.Description>
  );
};

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

const DialogFooter: React.FC<DialogFooterProps> = ({ className, ...props }) => {
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

Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Header = DialogHeader;
Dialog.Trigger = DialogPrimitive.Trigger;
