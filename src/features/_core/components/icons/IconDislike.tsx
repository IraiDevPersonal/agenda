import type { IconProps } from "@/config";
import { ThumbsDownIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconDislike: React.FC<IconProps> = (props) => {
  return <ThumbsDownIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconDislike;
