import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./App-Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full ">{children}</main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
