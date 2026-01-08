import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// 1. Import các Layout
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";

// 2. Import các Page thật (QUAN TRỌNG: Phải import đúng đường dẫn)
import Dashboard from "./pages/Dashboard";
import Fields from "./pages/Fields"; // <-- Đảm bảo dòng này trỏ đúng vào file Fields.jsx bạn vừa tạo

// Layout chung
const MainLayout = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen font-sans text-gray-900">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          {" "}
          {/* Thêm overflow-hidden để map không bị vỡ layout */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// Component trang giả lập (cho các trang chưa làm)
const AICheckPage = () => (
  <div className="p-8 font-bold text-2xl">
    Trang AI Upload ảnh (Đang phát triển)
  </div>
);
const ReportsPage = () => (
  <div className="p-8 font-bold text-2xl">Trang Báo cáo (Đang phát triển)</div>
);
const CropsPage = () => (
  <div className="p-8 font-bold text-2xl">Trang Mùa vụ (Đang phát triển)</div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          {/* QUAN TRỌNG: Route này phải gọi component <Fields /> */}
          <Route path="fields" element={<Fields />} />

          <Route path="crops" element={<CropsPage />} />
          <Route path="ai-scan" element={<AICheckPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
