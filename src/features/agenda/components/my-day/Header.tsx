import { Box } from "@/features/_core/components/ui/Box";
import { Input } from "@/features/_core/components/ui/Input";

const CURRENT_DATE = new Date()
  .toLocaleDateString()
  .split("-")
  .reverse()
  .join("-");

export const Header = () => {
  return (
    <Box as="header" className="flex items-center w-full gap-4">
      <h1 className="mr-auto text-2xl font-bold">Mi Día</h1>
      <Input.Search className="w-80" placeholder="Buscar paciente..." />
      <Input className="w-max" type="date" defaultValue={CURRENT_DATE} />
    </Box>
  );
};
