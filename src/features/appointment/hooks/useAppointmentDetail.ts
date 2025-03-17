import useQuery from "@/features/_core/hooks/useQuery";
import AppointmentService from "../services/appointment.service";
import AppointmentEntity from "../domain/appointment.entity";

const appointmentService = new AppointmentService();

export default function useAppointmentDetail(uid: AppointmentEntity["uid"]) {
  const query = useQuery({
    queryKey: ["appointments", uid],
    queryFn: () => appointmentService.getAppoinmentDetail(uid),
    // initialData: null,
    enabled: !!uid,
  });

  return query;
}
