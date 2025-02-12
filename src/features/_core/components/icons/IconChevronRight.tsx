import type { IconProps } from "@/config";
import { ChevronRightIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconChevronRight: React.FC<IconProps> = (props) => {
  return <ChevronRightIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconChevronRight;
