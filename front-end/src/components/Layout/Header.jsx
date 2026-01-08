import React from "react";
import { Bell, Search, User } from "lucide-react";

const Header = () => {
  return (
    // FIX: Bỏ ml-72 ở đây. Sử dụng sticky top-0 để dính lên trên cùng
    // Thêm z-40 để đè lên nội dung khi cuộn trang
    <header className="h-20 bg-white/90 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40 w-full">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100/80 px-4 py-2.5 rounded-xl w-96 border border-transparent focus-within:border-emerald-200 focus-within:bg-white transition-all">
        <Search size={18} className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Tìm kiếm thửa ruộng, giống lúa..."
          className="bg-transparent border-none outline-none text-sm text-gray-700 w-full placeholder-gray-400"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {/* User Profile - FIX: Căn chỉnh lại text */}
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200 h-8">
          <div className="text-right hidden md:block leading-tight">
            <p className="text-sm font-bold text-gray-800">Nguyễn Văn A</p>
            <p className="text-[11px] text-gray-500">Chủ hộ canh tác</p>
          </div>
          <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-200 text-emerald-700 cursor-pointer hover:bg-emerald-200 transition-colors">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
