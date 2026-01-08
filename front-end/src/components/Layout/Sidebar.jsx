import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Sprout,
  ScanLine,
  FileText,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Tổng quan", path: "/" },
    { icon: Map, label: "Quản lý Ruộng", path: "/fields" },
    { icon: Sprout, label: "Nhật ký Mùa vụ", path: "/crops" },
    { icon: ScanLine, label: "AI Chẩn đoán", path: "/ai-scan" },
    { icon: FileText, label: "Báo cáo & Giá", path: "/reports" },
  ];

  return (
    // FIX: Đổi w-72 thành w-64 cho gọn, thêm border-r chắc chắn
    <aside className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-50 transition-all duration-300">
      {/* 1. Logo Brand - FIX LỖI XUỐNG DÒNG */}
      <div className="h-20 flex items-center px-6 border-b border-gray-100">
        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 mr-3 flex-shrink-0">
          <Sprout className="text-white" size={24} />
        </div>
        <div className="flex flex-col">
          {/* whitespace-nowrap giúp chữ không bị xuống dòng */}
          <h3 className="text-xl font-bold text-gray-800 tracking-tight whitespace-nowrap">
            RiceMaster
          </h3>
          <p className="text-xs text-gray-500 font-medium whitespace-nowrap">
            Smart Agri Tech
          </p>
        </div>
      </div>

      {/* 2. Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Menu Chính
        </p>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-emerald-50 text-emerald-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
              }`
            }
          >
            <div className="flex items-center">
              <item.icon size={20} className="mr-3 stroke-[1.5]" />
              <span className="text-sm">{item.label}</span>
            </div>
            {/* Chỉ hiện mũi tên khi active để đỡ rối */}
            {({ isActive }) => isActive && <ChevronRight size={16} />}
          </NavLink>
        ))}
      </nav>

      {/* 3. Footer */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
          <LogOut size={20} className="mr-3" />
          <span className="text-sm font-medium">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
