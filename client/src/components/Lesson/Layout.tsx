import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Lesson/app-sidebar";
import TopNavBar from "./TopNavBar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TopNavBar />
      <SidebarProvider>
        <AppSidebar />
        <main className="ml-[200px] pt-[40px] p-6 bg-gray-100 w-full min-h-screen">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
