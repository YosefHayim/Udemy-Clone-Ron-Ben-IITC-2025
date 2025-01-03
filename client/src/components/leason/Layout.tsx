import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/leason/app-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main className=""> {/* Adjust margin to match sidebar width */}
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
