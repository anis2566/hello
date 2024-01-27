import { UserButton } from "@clerk/nextjs";
import { Notifications } from "./notifications";
import { ModeToggle } from "@/components/mode-toggle";

export const NavMenu = () => {
  return (
    <div className="flex justify-center items-center gap-x-2">
      <ModeToggle />
      <Notifications />
      <UserButton />
    </div>
  );
};
