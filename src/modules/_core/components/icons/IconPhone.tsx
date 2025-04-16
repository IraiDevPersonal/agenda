import type { IconProps } from "@/config/types";
import { PhoneCallIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconPhone: React.FC<IconProps> = (props) => {
  return <PhoneCallIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconPhone;
