import type { IconProps } from "@/config";
import { RefreshCcwIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconReload: React.FC<IconProps> = (props) => {
  return <RefreshCcwIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconReload;
