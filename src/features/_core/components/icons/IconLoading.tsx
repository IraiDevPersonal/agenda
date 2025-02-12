import type { IconProps } from "@/config";
import { LoaderCircleIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconLoading: React.FC<IconProps> = (props) => {
  return <LoaderCircleIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconLoading;
