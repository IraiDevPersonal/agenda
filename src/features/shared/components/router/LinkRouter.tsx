import { RoutePaths } from "@/config/routes";
import { Link, LinkProps } from "react-router-dom";

type Props = Omit<LinkProps, "to"> & {
  to: RoutePaths;
};

export const LinkRouter: React.FC<Props> = (props) => {
  return <Link {...props} />;
};
