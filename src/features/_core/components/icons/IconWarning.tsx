import type { IconProps } from "@/config/types";
import { TriangleAlertIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconWarning: React.FC<IconProps> = (props) => {
  return <TriangleAlertIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconWarning;
