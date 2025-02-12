import type { IconProps } from "@/config";
import { CircleAlertIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconDanger: React.FC<IconProps> = (props) => {
  return <CircleAlertIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconDanger;
