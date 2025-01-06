import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopNavBar from "./TopNavBar";
import { AppSidebar } from "./App-Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
      <TopNavBar />
        <AppSidebar />
        <main className=" bg-gray-100 w-full ">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
