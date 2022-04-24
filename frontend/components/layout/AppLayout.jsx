import { useState } from "react";
import { MobileSidebarItem, SidebarItem } from "./Sidebar";

export default function AppLayout({ children }) {

  const [menuOpen, toggleMenu] = useState(0);
  
  return (
    <div>
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      <div className="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-green-600 bg-opacity-75" aria-hidden="true" />
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-green-800">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Close sidebar</span>
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center px-4">
            <img className="h-8 w-auto" src="#" alt="Hinnik" />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              <MobileSidebarItem text="Home" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" path="/" />
              <MobileSidebarItem text="Home" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" path="/" />
              <MobileSidebarItem text="Home" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" path="/" />
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true"></div> {/* dummy */}
      </div>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-green-800">
          <div className="flex items-center h-16 flex-shrink-0 px-4">
            <img className="h-8 w-auto" src="#" alt="Hinnik" />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <SidebarItem text="Home" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" path="/" />
              <SidebarItem text="Home" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" path="/" />
              <SidebarItem text="Home" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" path="/" />
              <SidebarItem text="Home" icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" path="/" />
            </nav>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col">
        <main className="flex-1 bg-gray-50 min-h-screen">
          <div className="py-6">
            <div className="max-w-7xl md:max-w-full mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-3xl font-semibold text-green-900">Dashboard</h1>
              { children }
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}