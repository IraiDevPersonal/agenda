import useQuery from "@/features/_core/hooks/useQuery";
import ProfessionService from "../services/profession.service";

const professionService = new ProfessionService();

export default function useProfessionsAsOptions() {
  const { refetch, data, isLoading } = useQuery({
    queryKey: ["proffesions-filters"],
    queryFn: professionService.getProfessionsToOptions,
  });

  return {
    professionOptions: isLoading ? [] : data!,
    isLoading,
    refetch,
  };
}
