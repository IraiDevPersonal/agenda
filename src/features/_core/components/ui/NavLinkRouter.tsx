import { NavLink, NavLinkProps } from "react-router-dom";
import { generatePath } from "../../utils/generate-path.util";
import type { CustomLinkProps } from "@/config/types";

type Props = Omit<NavLinkProps, "to"> & CustomLinkProps;

const NavLinkRouter: React.FC<Props> = ({ to, params, query, ...props }) => {
  return <NavLink {...props} to={generatePath({ to, params, query })} />;
};

export default NavLinkRouter;
