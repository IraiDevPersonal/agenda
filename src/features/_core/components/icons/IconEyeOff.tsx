import type { IconProps } from "@/config/types";
import { EyeOffIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconEyeOff: React.FC<IconProps> = (props) => {
  return <EyeOffIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconEyeOff;
