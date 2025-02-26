import useQuery from "@/features/_core/hooks/useQuery";
import ProfessionalService from "../services/professional.service";

const professionalService = new ProfessionalService();

export default function useProfessionalsAsOptions() {
  const { refetch, data, isLoading } = useQuery({
    queryKey: ["proffesionals-filters"],
    queryFn: professionalService.getProfessionalsToOptions,
  });

  return {
    professionalOptions: isLoading ? [] : data!,
    isLoading,
    refetch,
  };
}
