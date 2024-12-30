import { Link, LinkProps } from "react-router-dom";
import { generateRoutePath } from "../../utils/helpers.util";
import type { LinkRouteProps } from "@/config";

type Props = Omit<LinkProps, "to"> & LinkRouteProps;

export const LinkRouter: React.FC<Props> = ({
  to,
  params,
  query,
  ...props
}) => {
  return <Link {...props} to={generateRoutePath({ to, params, query })} />;
};
