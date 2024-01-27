import { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NavItem = ({ label, href, icon: Icon }: NavItemProps) => {
  return (
    <div className="hover:bg-slate-300 p-2 rounded-md text-black font-semibold cursor-pointer flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        {label}
      </div>
    </div>
  );
};
