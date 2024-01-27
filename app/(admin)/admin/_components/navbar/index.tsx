import { Logo } from "@/components/logo";
import { NavMenu } from "./nav-menu";

export const Navbar = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto sticky top-0 z-50">
      <div className="h-14 shadow-md flex justify-between items-center px-3 bg-background dark:bg-background/80">
        <Logo label="Khayer Mart" />
        <NavMenu />
      </div>
    </div>
  );
};
