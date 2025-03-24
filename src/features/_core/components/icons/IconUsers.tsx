import type { IconProps } from "@/config/types";
import { UsersIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants.util";

const IconUsers: React.FC<IconProps> = (props) => {
  return <UsersIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconUsers;
