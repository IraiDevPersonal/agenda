import type { IconProps } from "@/config";
import { ChevronLeftIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconChevronLeft: React.FC<IconProps> = (props) => {
  return <ChevronLeftIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconChevronLeft;
