import type { IconProps } from "@/config/types";
import { EllipsisIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconDots: React.FC<IconProps> = (props) => {
  return <EllipsisIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconDots;
