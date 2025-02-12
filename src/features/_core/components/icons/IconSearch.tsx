import type { IconProps } from "@/config";
import { SearchIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconSearch: React.FC<IconProps> = (props) => {
  return <SearchIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconSearch;
