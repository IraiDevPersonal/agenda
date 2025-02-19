import type { IconProps } from "@/config/types";
import { UserRoundIcon } from "lucide-react";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

const IconUser: React.FC<IconProps> = (props) => {
  return <UserRoundIcon {...DEFAULT_ICON_SIZE} {...props} />;
};

export default IconUser;
