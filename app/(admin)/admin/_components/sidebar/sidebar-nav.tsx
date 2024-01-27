import { SIDEBAR_NAVS } from "@/constant";
import { NavItem } from "./nav-item";

export const SidebarNaV = () => {
  return (
    <div>
      {SIDEBAR_NAVS.map((nav, i) => (
        <NavItem key={i} {...nav} />
      ))}
    </div>
  );
};
