import type { IconProps } from "@/config/types";
import { CircleAlertIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconDanger: React.FC<IconProps> = (props) => {
  return <CircleAlertIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconDanger;
