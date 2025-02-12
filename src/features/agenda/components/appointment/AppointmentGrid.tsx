import Box from "@/features/_core/components/ui/Box";

type Props = {
  children: React.ReactNode;
};

const AppointmentGrid: React.FC<Props> = ({ children }) => {
  return (
    <Box as="div" className="flex flex-wrap p-0 gap-4 *:max-w-96">
      {children}
    </Box>
  );
};

export default AppointmentGrid;
