import type { IconProps } from "@/config";
import { CircleCheckIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconSuccess: React.FC<IconProps> = (props) => {
  return <CircleCheckIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconSuccess;
