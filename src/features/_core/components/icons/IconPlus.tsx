import type { IconProps } from "@/config";
import { PlusIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconPlus: React.FC<IconProps> = (props) => {
  return <PlusIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconPlus;
