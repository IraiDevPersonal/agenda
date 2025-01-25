import type { IconProps } from "@/config";
import { ThumbsDownIcon } from "lucide-react";

const IconDislike: React.FC<IconProps> = (props) => {
  return <ThumbsDownIcon {...props} />;
};

export default IconDislike;
