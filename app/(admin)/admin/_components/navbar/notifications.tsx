import { Bell } from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Notifications = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="relative focus-visible:bg-primary">
                <Bell className="text-primary dark:text-secondary" />
                <span className="absolute right-0 top-0 bg-rose-500 w-5 h-5 rounded-full text-white">
                  {5}
                </span>
              </MenubarTrigger>
              <MenubarContent align="end">
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </TooltipTrigger>
        <TooltipContent>Notification</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
