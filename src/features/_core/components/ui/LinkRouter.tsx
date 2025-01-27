import { Link, LinkProps } from "react-router-dom";
import { generatePath } from "../../utils/generate-path.util";
import type { CustomLinkProps } from "@/config";

type Props = Omit<LinkProps, "to"> & CustomLinkProps;

const LinkRouter: React.FC<Props> = ({ to, params, query, ...props }) => {
  return <Link {...props} to={generatePath({ to, params, query })} />;
};

export default LinkRouter;
