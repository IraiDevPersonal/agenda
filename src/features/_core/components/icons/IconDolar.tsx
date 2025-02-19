import type { IconProps } from "@/config/types";
import { DollarSignIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconDolar: React.FC<IconProps> = (props) => {
  return <DollarSignIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconDolar;
