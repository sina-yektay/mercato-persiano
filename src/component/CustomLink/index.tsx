import { memo } from "react";
import { Link } from "react-router-dom";
import { useCustomLink } from "./index.hooks";

type CustomLinkProps = {
  to: string;
  buttonText: string;
};

export const CustomLink = memo(({ to, buttonText }: CustomLinkProps) => {
  const {} = useCustomLink();
  return (
    <Link
      style={{textDecoration: "none"}}
      to={to}
    >
      {buttonText}
    </Link>
  );
});
CustomLink.displayName = "CustomLink";
