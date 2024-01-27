import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex w-full max-w-screen-xl mx-auto">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
export default AdminLayout;
