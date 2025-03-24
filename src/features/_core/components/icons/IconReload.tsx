import type { IconProps } from "@/config/types";
import { RefreshCcwIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconReload: React.FC<IconProps> = (props) => {
  return <RefreshCcwIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconReload;
