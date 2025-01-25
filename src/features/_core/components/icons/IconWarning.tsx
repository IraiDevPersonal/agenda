import type { IconProps } from "@/config";
import { TriangleAlertIcon } from "lucide-react";

const IconWarning: React.FC<IconProps> = (props) => {
  return <TriangleAlertIcon {...props} />;
};

export default IconWarning;
