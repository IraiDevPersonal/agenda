import type { IconProps } from "@/config";
import { EyeIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconEye: React.FC<IconProps> = (props) => {
  return <EyeIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconEye;
