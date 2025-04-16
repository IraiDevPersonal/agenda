import type { IconProps } from "@/config/types";
import { EyeIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconEye: React.FC<IconProps> = (props) => {
  return <EyeIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconEye;
