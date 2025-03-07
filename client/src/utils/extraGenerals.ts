import { useLocation } from "react-router-dom";

export const isRootPathOnly = () => {
  const { pathname, search, hash } = useLocation();
  return pathname === "/" && !search && !hash;
};
