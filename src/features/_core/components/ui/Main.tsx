import { cn } from "@/config";

type Props = {
  className?: string;
  pageTitle?: string;
} & React.PropsWithChildren;

export const Main: React.FC<Props> = ({ className, ...props }) => {
  return (
    <main
      className={cn("w-full h-screen overflow-auto pb-4", className)}
      {...props}
    />
  );
};