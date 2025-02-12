import type { IconProps } from "@/config";
import { ThumbsUpIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconLike: React.FC<IconProps> = (props) => {
  return <ThumbsUpIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconLike;
