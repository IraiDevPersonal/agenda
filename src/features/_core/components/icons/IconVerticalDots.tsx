import type { IconProps } from "@/config/types";
import { EllipsisVerticalIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconVerticalDots: React.FC<IconProps> = (props) => {
  return <EllipsisVerticalIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconVerticalDots;
