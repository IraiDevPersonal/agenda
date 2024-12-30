import { LinkRouteProps } from "@/config/type";
import { Link, LinkProps } from "react-router-dom";
import { generateRoutePath } from "../../utils/helpers.util";

type Props = Omit<LinkProps, "to"> & LinkRouteProps;

export const LinkRouter: React.FC<Props> = ({
  to,
  params,
  query,
  ...props
}) => {
  return <Link {...props} to={generateRoutePath({ to, params, query })} />;
};
