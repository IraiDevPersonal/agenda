import { XIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";
import type { IconProps } from "@/config/types";

const IconX = (props: IconProps) => {
  return <XIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconX;
