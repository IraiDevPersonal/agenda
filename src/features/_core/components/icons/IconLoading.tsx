import type { IconProps } from "@/config/types";
import { LoaderCircleIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconLoading: React.FC<IconProps> = (props) => {
  return <LoaderCircleIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconLoading;
