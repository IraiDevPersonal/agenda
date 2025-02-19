import type { IconProps } from "@/config/types";
import { LockIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconLock: React.FC<IconProps> = (props) => {
  return <LockIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconLock;
