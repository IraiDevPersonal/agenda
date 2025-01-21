import { cn, HTMLTags } from "@/config";
import { CreateElement } from "../utils";

const HASH_TEXT_TYPE: Record<Props["type"], { tag: HTMLTags; styles: string }> =
  {
    paragraph: { tag: "p", styles: "text-muted-foreground" },
    subtitle: { tag: "h5", styles: "text-xl font-bold" },
    text: {
      tag: "span",
      styles: "text-center text-sm italic text-muted-foreground leading-none",
    },
    title: { tag: "h1", styles: "text-2xl font-bold" },
  };

type Props = {
  type: "paragraph" | "title" | "subtitle" | "text";
  children?: React.ReactNode;
  className?: string;
};

export const Text: React.FC<Props> = ({ type, children, className }) => {
  return (
    <CreateElement
      as={HASH_TEXT_TYPE[type].tag}
      className={cn(HASH_TEXT_TYPE[type].styles, className)}
    >
      {children}
    </CreateElement>
  );
};
