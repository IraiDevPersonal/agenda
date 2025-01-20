import { Link, LinkProps } from "react-router-dom";
import { generatePath } from "../../utils/helpers.util";
import type { CustomLinkProps } from "@/config";

type Props = Omit<LinkProps, "to"> & CustomLinkProps;

export const LinkRouter: React.FC<Props> = ({
  to,
  params,
  query,
  ...props
}) => {
  return <Link {...props} to={generatePath({ to, params, query })} />;
};
