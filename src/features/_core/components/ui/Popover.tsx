import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn, DialogHandlerProps } from "@/config";

type Props = {
  children: React.ReactNode;
  defaultOpen?: boolean;
} & Partial<DialogHandlerProps>;

function Popover({ isOpen, children, defaultOpen, onClose }: Props) {
  return (
    <PopoverPrimitive.Root
      defaultOpen={defaultOpen}
      onOpenChange={onClose}
      open={isOpen}
    >
      {children}
    </PopoverPrimitive.Root>
  );
}

type PopoverContentProps = {
  ref?: React.Ref<HTMLDivElement>;
} & React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    showArrow?: boolean;
  };

const PopoverContent: React.FC<PopoverContentProps> = ({
  showArrow = false,
  align = "center",
  sideOffset = 4,
  className,
  children,
  ref,
  ...props
}) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-h-[var(--radix-popover-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-2xl border border-border bg-popover p-6 text-popover-foreground shadow-xl shadow-black/10 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 scrollbar-styles",
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <PopoverPrimitive.Arrow className="-my-px fill-popover drop-shadow-[0_1px_0_hsl(var(--border))]" />
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
};

export default Popover;

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Anchor = PopoverPrimitive.Anchor;
Popover.Content = PopoverContent;
