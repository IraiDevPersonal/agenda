import type { IconProps } from "@/config";
import { InfoIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconInfo: React.FC<IconProps> = (props) => {
  return <InfoIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconInfo;
