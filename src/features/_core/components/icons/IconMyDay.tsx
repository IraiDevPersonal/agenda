import type { IconProps } from "@/config/types";
import { CalendarHeartIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconMyDay: React.FC<IconProps> = (props) => {
  return <CalendarHeartIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconMyDay;
