import type { IconProps } from "@/config";
import { CircleAlertIcon } from "lucide-react";

const IconDanger: React.FC<IconProps> = (props) => {
  return <CircleAlertIcon {...props} />;
};

export default IconDanger;
