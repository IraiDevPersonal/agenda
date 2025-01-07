import type { IconProps } from "@/config";
import { ThumbsDownIcon } from "lucide-react";

export const IconDislike: React.FC<IconProps> = (props) => {
  return <ThumbsDownIcon {...props} />;
};
