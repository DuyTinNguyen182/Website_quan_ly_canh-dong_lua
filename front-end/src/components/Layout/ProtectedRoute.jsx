import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const ProtectedLayout = () => {
  const { user } = useAuth();

  // Nếu chưa có user -> Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex bg-gray-50 min-h-screen font-sans text-gray-900">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
