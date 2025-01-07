import React from "react";
import { Outlet,Link } from "react-router-dom";
import TopNavbar from './TopNavbar'
import SideNavbar,{ SidebarItem } from './SideNavbar'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";


function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col">
       <TopNavbar></TopNavbar>
      {/* Sidebar */}
      <div className="flex h-screen flex-row">
      <div className="flex">
      
        <SideNavbar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert page="/home" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active page="/dashboard" />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </SideNavbar>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-gray-200 overflow-y-auto overflow-scroll">      
      <Outlet />
      </main>
    </div>
    </div>
  );
}

export default Layout;
