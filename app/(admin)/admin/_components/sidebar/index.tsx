"use client";

import { SidebarNaV } from "./sidebar-nav";

export const Sidebar = () => {
  return (
    <div
      className={
        "w-56 fixed top-0 pt-16 h-full bg-background dark:bg-background/80 hidden md:flex flex-col flex-shrink-0 p-2"
      }
    >
      <SidebarNaV />
    </div>
  );
};
