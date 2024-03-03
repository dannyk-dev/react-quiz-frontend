import { LinkProps, Link } from "react-router-dom";

interface ILinkProps extends LinkProps {}

export const LinkButton = ({ children, ...props }: ILinkProps) => {
  return (
    <Link {...props} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </Link>
  );
};
