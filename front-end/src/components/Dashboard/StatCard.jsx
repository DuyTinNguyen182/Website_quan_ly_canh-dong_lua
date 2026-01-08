import React from "react";

const StatCard = ({ title, value, unit, icon: Icon, trend, color }) => {
  // Map màu sắc dựa trên props color
  const colorStyles = {
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div
          className={`${
            colorStyles[color] || colorStyles.emerald
          } p-3 rounded-xl`}
        >
          <Icon size={24} />
        </div>
        {trend && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              trend > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {trend > 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">
          {value}{" "}
          <span className="text-sm text-gray-400 font-normal ml-1">{unit}</span>
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
