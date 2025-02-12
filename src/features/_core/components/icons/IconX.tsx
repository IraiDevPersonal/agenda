import { XIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";
import type { IconProps } from "@/config";

const IconX = (props: IconProps) => {
  return <XIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconX;
