import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/config";

type Props = {
  ref?: React.Ref<HTMLDivElement>;
  defaultOpen?: boolean;
  onClose?(): void;
  isOpen?: boolean;
} & React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    showArrow?: boolean;
  };

function Popover({
  defaultOpen = false,
  showArrow = false,
  align = "center",
  sideOffset = 4,
  className,
  onClose,
  isOpen,
  ref,
  ...props
}: Props) {
  return (
    <PopoverPrimitive.Root
      defaultOpen={defaultOpen}
      onOpenChange={onClose}
      open={isOpen}
    >
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            "z-50 max-h-[var(--radix-popover-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg shadow-black/5 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          {...props}
        >
          {props.children}
          {showArrow && (
            <PopoverPrimitive.Arrow className="-my-px fill-popover drop-shadow-[0_1px_0_hsl(var(--border))]" />
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

export default Popover;

Popover.Triger = PopoverPrimitive.Trigger;
Popover.Anchor = PopoverPrimitive.Anchor;
