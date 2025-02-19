import type { IconProps } from "@/config/types";
import { CalendarPlusIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconAgenda: React.FC<IconProps> = (props) => {
  return <CalendarPlusIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconAgenda;
