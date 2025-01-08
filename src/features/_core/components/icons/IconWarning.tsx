import type { IconProps } from "@/config";
import { TriangleAlertIcon } from "lucide-react";

export const IconWarning: React.FC<IconProps> = (props) => {
  return <TriangleAlertIcon {...props} />;
};
