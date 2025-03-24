import type { IconProps } from "@/config/types";
import { PlusIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconPlus: React.FC<IconProps> = (props) => {
  return <PlusIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconPlus;
