import { Box } from "@/features/_core/components/ui";

type Props = React.PropsWithChildren;

export const AgendaGrid: React.FC<Props> = ({ children }) => {
  return (
    <Box as="div" className="flex flex-wrap p-0 gap-4 *:max-w-96">
      {children}
    </Box>
  );
};
