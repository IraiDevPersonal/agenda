import type { CustomLinkProps } from "@/config";
import { NavLink, NavLinkProps } from "react-router-dom";
import { generatePath } from "../../utils/helpers.util";

type Props = Omit<NavLinkProps, "to"> & CustomLinkProps;

export const NavLinkRouter: React.FC<Props> = ({
  to,
  params,
  query,
  ...props
}) => {
  return <NavLink {...props} to={generatePath({ to, params, query })} />;
};
