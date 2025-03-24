import { useNavigate, useSearchParams } from "react-router-dom";
import useDialog from "@/features/_core/hooks/useDialog";
import AppointmentEntity from "../domain/appointment.entity";
import ROUTES from "@/config/routes";

export default function useAppointmentDialog() {
  const [query] = useSearchParams();
  const [isOpen, onToggleIsOpen] = useDialog();
  const navigate = useNavigate();

  const handleOpen = (item: AppointmentEntity) => {
    const searchParams = query.size > 0 ? `?${query.toString()}` : "";
    navigate(`${ROUTES.MY_DAY}/${item.uid}${searchParams}`);
    onToggleIsOpen();
  };

  const handleClose = () => {
    onToggleIsOpen();
    navigate(-1);
  };

  return {
    handleClose,
    handleOpen,
    isOpen,
  };
}
