import type { IconProps } from "@/config";
import { SaveIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconSave: React.FC<IconProps> = (props) => {
  return <SaveIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconSave;
