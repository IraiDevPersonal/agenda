import type { IconProps } from "@/config";
import { CircleCheckBigIcon } from "lucide-react";

const IconAvailable: React.FC<IconProps> = (props) => {
  return <CircleCheckBigIcon {...props} />;
};

export default IconAvailable;
