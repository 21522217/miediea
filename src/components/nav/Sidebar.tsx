import React from "react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 h-screen bg-gray-800 text-white">
      <Menubar className="h-full p-4">
        <MenubarMenu>
          <MenubarTrigger className="text-lg font-semibold mb-4 text-red-700">
            Navigation
          </MenubarTrigger>
          <MenubarContent className="flex flex-col space-y-2">
            <MenubarItem asChild>
              <Link to="/" className="hover:bg-gray-700 p-2 rounded">
                Home
              </Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link to="/profile" className="hover:bg-gray-700 p-2 rounded">
                Profile
              </Link>
            </MenubarItem>
            <MenubarSeparator className="my-4 border-gray-600" />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Sidebar;
