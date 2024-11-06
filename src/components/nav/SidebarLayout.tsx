import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const SidebarLayout: React.FC = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
