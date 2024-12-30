import { LinkRouteProps } from "@/config/type";
import { NavLink, NavLinkProps } from "react-router-dom";
import { generateRoutePath } from "../../utils/helpers.util";

type Props = Omit<NavLinkProps, "to"> & LinkRouteProps;

export const NavLinkRouter: React.FC<Props> = ({
  to,
  params,
  query,
  ...props
}) => {
  return <NavLink {...props} to={generateRoutePath({ to, params, query })} />;
};
