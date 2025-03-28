import { useQuery } from "@tanstack/react-query";
import AppointmentService from "../services/appointment.service";
import AppointmentEntity from "../domain/appointment.entity";
import { QUERY_KEYS } from "@/config/query-keys";

const appointmentService = new AppointmentService();

export default function useAppointmentDetail(uid: AppointmentEntity["uid"]) {
  const query = useQuery({
    queryKey: [QUERY_KEYS["APPOINTMENT-DETAIL"], uid],
    queryFn: () => appointmentService.getAppoinmentDetail(uid),
    enabled: !!uid,
  });

  return query;
}
