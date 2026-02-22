import React from "react";
import { Link } from "react-router-dom";
import { 
  Sprout, 
  MapPin, 
  Activity, 
  Bot, 
  ArrowRight, 
  Leaf, 
  Tractor,
  CheckCircle2
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-emerald-200">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-600 rounded-xl text-white">
              <Sprout size={28} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight">AgriSmart</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Đăng nhập
            </Link>
            <Link 
              to="/register" 
              className="px-5 py-2.5 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-200 active:scale-95 transition-all"
            >
              Bắt đầu miễn phí
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-semibold mb-6 animate-fade-in-up">
            <Leaf size={16} /> Nền tảng Nông nghiệp Số 4.0
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            Quản lý Cánh đồng Lúa <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Thông minh & Hiệu quả
            </span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Giải pháp toàn diện giúp bà con nông dân theo dõi mùa vụ, quản lý chi phí, tối ưu diện tích canh tác và dự báo dịch bệnh bằng AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/register" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-200 active:scale-95 transition-all"
            >
              Tạo tài khoản ngay <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 bg-white border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mọi thứ bạn cần cho vụ mùa bội thu</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tích hợp đầy đủ các công cụ quản lý từ lúc làm đất, gieo sạ cho đến khi thu hoạch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quản lý Thửa Ruộng</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Số hóa bản đồ cánh đồng. Theo dõi diện tích, phân lô và trạng thái canh tác của từng thửa một cách trực quan.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Tractor size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nhật ký Mùa vụ</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Ghi chép chi tiết các công việc: làm đất, bơm nước, bón phân. Quản lý chi phí minh bạch cho từng vụ.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Bot size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI Nhận diện Bệnh</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Tích hợp AI phân tích hình ảnh lá lúa. Phát hiện sớm đạo ôn, rầy nâu và đề xuất phương án xử lý kịp thời.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Thống kê & Báo cáo</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Bảng điều khiển thông minh tổng hợp sản lượng dự kiến, tổng chi phí và nhắc nhở thời tiết mỗi ngày.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 text-white opacity-80">
            <Sprout size={24} />
            <span className="text-lg font-bold">AgriSmart</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Nền tảng Quản lý Cánh Đồng Lúa. Tối ưu hóa cho nông dân Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;