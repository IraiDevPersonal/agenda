import { NavLink, NavLinkProps } from "react-router-dom";
import type { Paths } from "@/config/types";

type Props = Omit<NavLinkProps, "to"> & { to: Paths; searchParams?: string };

const RouterNavLink: React.FC<Props> = ({ to, searchParams, ...props }) => {
  return <NavLink {...props} to={`${to}?${searchParams}`} />;
};

export default RouterNavLink;
