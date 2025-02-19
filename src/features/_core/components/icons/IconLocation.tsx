import type { IconProps } from "@/config/types";
import { MapPinIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconLocation: React.FC<IconProps> = (props) => {
  return <MapPinIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconLocation;
