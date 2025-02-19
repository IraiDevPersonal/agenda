import type { IconProps } from "@/config/types";
import { FileTextIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconDocument: React.FC<IconProps> = (props) => {
  return <FileTextIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconDocument;
