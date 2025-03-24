import type { IconProps } from "@/config/types";
import { GlobeIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconWeb: React.FC<IconProps> = (props) => {
  return <GlobeIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconWeb;
