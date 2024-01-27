import { create } from "zustand";

interface SidebarState {
  open: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<SidebarState>()((set) => ({
  open: false,
  onExpand: () => set({ open: true }),
  onCollapse: () => set({ open: false }),
}));
