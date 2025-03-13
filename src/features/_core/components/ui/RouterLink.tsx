import { Link, LinkProps } from "react-router-dom";
import type { Paths } from "@/config/types";

type Props = Omit<LinkProps, "to"> & { to: Paths; searchParams?: string };

const RouterLink: React.FC<Props> = ({ to, searchParams, ...props }) => {
  return <Link {...props} to={`${to}?${searchParams}`} />;
};

export default RouterLink;
