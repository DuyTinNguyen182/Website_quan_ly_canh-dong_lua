import React from "react";
import {
  MapPin,
  Droplets,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Sun,
  CloudRain,
} from "lucide-react";
import StatCard from "../components/Dashboard/StatCard";

const Dashboard = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-[calc(100vh-80px)]">
      {/* 1. Phần Chào mừng & Quick Action (Nhắc nhở mùa vụ) */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Tổng quan nông trại
          </h2>
          <p className="text-gray-500 mt-1">
            Hôm nay, 21 Tháng 2, 2025 - Thời tiết nắng nhẹ ☀️
          </p>
        </div>
      </div>

      {/* 2. Cards Thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Tổng diện tích"
          value="12.5"
          unit="ha"
          icon={MapPin}
          color="blue"
        />
        <StatCard
          title="Vụ đang chạy"
          value="Đông Xuân"
          unit="2025"
          icon={Sun}
          color="emerald"
        />
        <StatCard
          title="Cảnh báo bệnh"
          value="03"
          unit="vị trí"
          icon={AlertTriangle}
          color="orange"
          trend={+12}
        />
        <StatCard
          title="Dự báo sản lượng"
          value="85"
          unit="tấn"
          icon={TrendingUp}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[500px]">
        {/* 3. Bản đồ nhanh (Chiếm 2/3) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <MapPin size={20} className="text-emerald-600" /> Bản đồ canh tác
            </h3>
            <button className="text-sm text-emerald-600 font-medium hover:underline flex items-center">
              Mở bản đồ lớn <ArrowRight size={16} className="ml-1" />
            </button>
          </div>

          {/* Placeholder cho Leaflet Map */}
          <div className="flex-1 bg-emerald-50/50 rounded-xl border-2 border-dashed border-emerald-100 flex items-center justify-center relative overflow-hidden group cursor-pointer">
            <div className="text-center z-10">
              <MapPin size={40} className="mx-auto text-emerald-300 mb-2" />
              <p className="text-emerald-800 font-medium">
                Khu vực hiển thị Bản đồ Leaflet
              </p>
              <p className="text-emerald-600 text-sm">
                Click để xem chi tiết từng thửa
              </p>
            </div>
            {/* Giả lập hiệu ứng map */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/suburban-map-concept_23-2148609594.jpg')] opacity-10 bg-cover bg-center group-hover:opacity-20 transition-opacity"></div>
          </div>
        </div>

        {/* 4. "Smart Suggestion" - Sidebar bên phải (Chiếm 1/3) */}
        <div className="space-y-6">
          {/* Widget 1: Nhắc nhở mùa vụ (Quan trọng) */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-lg shadow-emerald-200">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Droplets size={24} className="text-white" />
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded text-white/90">
                Sắp tới
              </span>
            </div>
            <h3 className="text-lg font-bold mb-1">Chuẩn bị Vụ Hè Thu</h3>
            <p className="text-emerald-100 text-sm mb-4">
              Đã đến thời điểm làm đất. Bạn có muốn tạo kế hoạch vụ mới cho{" "}
              <strong>Thửa Bờ Kênh</strong> không?
            </p>
            <button className="w-full py-2.5 bg-white text-emerald-700 font-semibold rounded-lg text-sm hover:bg-emerald-50 transition-colors">
              + Tạo vụ mùa mới
            </button>
          </div>

          {/* Widget 2: Cảnh báo gần đây */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex-1">
            <h3 className="font-bold text-gray-800 mb-4">Cảnh báo cần xử lý</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={18} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Phát hiện Đạo ôn lá
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Thửa A2 • Mức độ: Nghiêm trọng
                  </p>
                  <button className="text-xs text-red-600 font-medium mt-2 hover:underline">
                    Xem hướng xử lý AI &rarr;
                  </button>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <CloudRain size={18} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Cảnh báo mưa lớn
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Chiều nay có thể mưa dông. Hạn chế phun thuốc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
