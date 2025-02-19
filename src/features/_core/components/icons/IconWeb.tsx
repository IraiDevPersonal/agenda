import type { IconProps } from "@/config/types";
import { GlobeIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconWeb: React.FC<IconProps> = (props) => {
  return <GlobeIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconWeb;
