import type { IconProps } from "@/config/types";
import { CircleCheckBigIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconAvailable: React.FC<IconProps> = (props) => {
  return <CircleCheckBigIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconAvailable;
