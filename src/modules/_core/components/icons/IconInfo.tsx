import type { IconProps } from "@/config/types";
import { InfoIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconInfo: React.FC<IconProps> = (props) => {
  return <InfoIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconInfo;
