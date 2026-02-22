import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Sprout,
  ScanLine,
  FileText,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Tổng quan", path: "/dashboard" },
    { icon: Map, label: "Quản lý Ruộng", path: "/fields" },
    { icon: Sprout, label: "Nhật ký Mùa vụ", path: "/crops" },
    { icon: ScanLine, label: "AI Chẩn đoán", path: "/ai-scan" },
    { icon: FileText, label: "Báo cáo & Giá", path: "/reports" },
  ];

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-50
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-100">
        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
          <Sprout className="text-white" size={24} />
        </div>

        {!collapsed && (
          <div className="ml-3 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 whitespace-nowrap">
              RiceMaster
            </h3>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              Smart Agri Tech
            </p>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        <p
          className={`px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2
            ${collapsed ? "hidden" : "block"}
          `}
        >
          Menu Chính
        </p>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group relative flex items-center rounded-xl px-3 py-3 transition-all
              ${collapsed ? "justify-center" : "justify-between"}
              ${
                isActive
                  ? "bg-emerald-50 text-emerald-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
              }`
            }
          >
            <div className="flex items-center">
              <item.icon size={20} className="stroke-[1.5]" />
              {!collapsed && <span className="ml-3 text-sm">{item.label}</span>}
            </div>

            {/* Tooltip khi collapse */}
            {collapsed && (
              <span
                className="absolute left-20 top-1/2 -translate-y-1/2
                  bg-gray-800 text-white text-xs px-3 py-1 rounded-md
                  opacity-0 group-hover:opacity-100 transition
                  whitespace-nowrap z-50"
              >
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer - Toggle */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full px-3 py-2
            text-gray-600 hover:bg-gray-100 rounded-xl transition cursor-pointer"
        >
          <ChevronLeft
            size={20}
            className={`transition-transform duration-300
              ${collapsed ? "rotate-180" : ""}
            `}
          />
          {!collapsed && <span className="ml-3 text-sm font-medium"></span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
