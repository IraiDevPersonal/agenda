import type { IconProps } from "@/config";
import { CircleAlertIcon } from "lucide-react";

export const IconDanger: React.FC<IconProps> = (props) => {
  return <CircleAlertIcon {...props} />;
};
