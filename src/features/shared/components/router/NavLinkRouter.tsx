import { RoutePaths } from "@/config/routes";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = Omit<NavLinkProps, "to"> & {
  to: RoutePaths;
};

export const NavLinkRouter: React.FC<Props> = (props) => {
  return <NavLink {...props} />;
};
