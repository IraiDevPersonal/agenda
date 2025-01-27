import type { CustomLinkProps } from "@/config";
import { NavLink, NavLinkProps } from "react-router-dom";
import { generatePath } from "../../utils/generatePath.util";

type Props = Omit<NavLinkProps, "to"> & CustomLinkProps;

const NavLinkRouter: React.FC<Props> = ({ to, params, query, ...props }) => {
  return <NavLink {...props} to={generatePath({ to, params, query })} />;
};

export default NavLinkRouter;
