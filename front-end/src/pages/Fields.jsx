import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polygon, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapPin,
  Plus,
  Search,
  Layers,
  Maximize,
  Ruler,
  ChevronRight,
  Leaf,
  MoreVertical,
  Navigation,
} from "lucide-react";
import { mockFields } from "../data/mockFields";

// --- CONFIG ICON (GIỮ NGUYÊN) ---
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// --- COMPONENT MAP UPDATER (GIỮ NGUYÊN) ---
const MapUpdater = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.2, easeLinearity: 0.25 });
    }
  }, [center, zoom, map]);
  return null;
};

const MapFix = () => {
  const map = useMap();
  useEffect(() => {
    // Chờ 0.5s cho layout ổn định rồi bắt map vẽ lại kích thước
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 500);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
};

// --- TRANG CHÍNH ---
const Fields = () => {
  const [selectedField, setSelectedField] = useState(mockFields[0]);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [mapCenter, setMapCenter] = useState([10.3706, 106.6661]);
  const [zoomLevel, setZoomLevel] = useState(13);

  const handleSelectField = (field) => {
    setSelectedField(field);
    setSelectedPlot(null);
    if (field.plots.length > 0) {
      setMapCenter(field.plots[0].center);
      setZoomLevel(15);
    }
  };

  const handleSelectPlot = (plot) => {
    setSelectedPlot(plot);
    setMapCenter(plot.center);
    setZoomLevel(17);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-gray-50">
      {/* 1. SIDEBAR TRÁI: ĐƯỢC THIẾT KẾ LẠI */}
      <div className="w-[400px] bg-white border-r border-gray-100 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
        {/* Header Sidebar */}
        <div className="px-6 py-6 border-b border-gray-50">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                Danh sách Ruộng
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Quản lý {mockFields.length} khu vực canh tác
              </p>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl transition-all shadow-lg shadow-emerald-200 active:scale-95">
              <Plus size={20} />
            </button>
          </div>

          {/* Search Bar đẹp hơn */}
          <div className="relative group">
            <Search
              className="absolute left-3.5 top-3 text-gray-400 group-focus-within:text-emerald-600 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm cánh đồng, vị trí..."
              className="w-full bg-gray-50 pl-11 pr-4 py-2.5 rounded-xl border border-transparent focus:bg-white focus:border-emerald-100 focus:ring-4 focus:ring-emerald-50/50 outline-none transition-all text-sm font-medium text-gray-700"
            />
          </div>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {mockFields.map((field) => {
            const isSelected = selectedField?.id === field.id;
            return (
              <div
                key={field.id}
                onClick={() => handleSelectField(field)}
                className={`group relative rounded-2xl p-4 cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? "bg-emerald-50/60 border-emerald-100 shadow-sm"
                    : "bg-white border-transparent hover:border-gray-100 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {/* Thanh đánh dấu khi Active */}
                {isSelected && (
                  <div className="absolute left-0 top-4 bottom-4 w-1 bg-emerald-500 rounded-r-full"></div>
                )}

                <div className="flex justify-between items-start mb-2 pl-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-100 text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                      } transition-colors`}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-sm ${
                          isSelected ? "text-emerald-900" : "text-gray-700"
                        }`}
                      >
                        {field.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {field.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phần danh sách thửa con (Nested List) */}
                <div
                  className={`grid transition-all duration-300 ${
                    isSelected
                      ? "grid-rows-[1fr] opacity-100 mt-3 pl-2"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-[1px] flex-1 bg-emerald-200/50"></div>
                      <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">
                        Chi tiết thửa
                      </span>
                      <div className="h-[1px] flex-1 bg-emerald-200/50"></div>
                    </div>

                    <div className="space-y-1">
                      {field.plots.length > 0 ? (
                        field.plots.map((plot) => (
                          <div
                            key={plot.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectPlot(plot);
                            }}
                            className={`flex items-center justify-between p-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                              selectedPlot?.id === plot.id
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                                : "text-gray-600 hover:bg-white hover:text-emerald-700 hover:shadow-sm"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Leaf size={12} />
                              {plot.name}
                            </div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  plot.status === "active"
                                    ? "bg-green-400"
                                    : "bg-orange-400"
                                } ${
                                  selectedPlot?.id === plot.id
                                    ? "ring-2 ring-white/50"
                                    : ""
                                }`}
                              ></span>
                              {selectedPlot?.id === plot.id && (
                                <ChevronRight size={12} />
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-2 text-xs text-gray-400 bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                          Chưa có dữ liệu thửa
                        </div>
                      )}
                    </div>

                    <button className="w-full mt-3 py-1.5 text-xs font-semibold text-emerald-600 border border-dashed border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1">
                      <Plus size={12} /> Vẽ thửa mới
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. MAIN MAP: HIỆN ĐẠI HÓA */}
      <div className="flex-1 relative z-0">
        <MapContainer
          center={mapCenter}
          zoom={zoomLevel}
          scrollWheelZoom={true}
          className="h-full w-full z-0 outline-none"
          zoomControl={false} // Tắt zoom mặc định để tự làm đẹp hơn
        >
          {/* Nền bản đồ đẹp hơn: CartoDB Voyager (Sáng và sạch) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          <MapUpdater center={mapCenter} zoom={zoomLevel} />
          <MapFix />

          {/* Render Polygon */}
          {selectedField?.plots.map((plot) => (
            <Polygon
              key={plot.id}
              positions={plot.coordinates}
              pathOptions={{
                color: selectedPlot?.id === plot.id ? "#059669" : "#10b981",
                fillColor: plot.status === "active" ? "#34d399" : "#fbbf24",
                fillOpacity: selectedPlot?.id === plot.id ? 0.6 : 0.4,
                weight: selectedPlot?.id === plot.id ? 3 : 1,
                dashArray: selectedPlot?.id === plot.id ? null : "5, 10", // Viền nét đứt nếu chưa chọn
                lineCap: "round",
                lineJoin: "round",
              }}
              eventHandlers={{ click: () => handleSelectPlot(plot) }}
            >
              {/* Popup Custom */}
              <Popup className="custom-popup" closeButton={false}>
                <div className="p-3 min-w-[200px]">
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        plot.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {plot.status === "active"
                        ? "Đang canh tác"
                        : "Chờ vụ mới"}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">
                    {plot.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-[10px] text-gray-500 uppercase">
                        Diện tích
                      </p>
                      <p className="text-xs font-bold text-gray-800">
                        {plot.area} m²
                      </p>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center transition-colors">
                      <Navigation size={14} />
                    </button>
                  </div>
                </div>
              </Popup>
            </Polygon>
          ))}
        </MapContainer>

        {/* --- FLOATING CONTROLS (Nút bấm lơ lửng - Điểm nhấn) --- */}
        <div className="absolute top-6 right-6 z-[400] flex flex-col gap-3">
          {/* Cụm công cụ bản đồ */}
          <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-white/50 flex flex-col gap-1">
            <ControlButton icon={Layers} title="Lớp bản đồ" />
            <ControlButton icon={Ruler} title="Đo đạc" />
            <div className="h-[1px] bg-gray-200 mx-2 my-1"></div>
            <ControlButton icon={Maximize} title="Toàn màn hình" />
          </div>
        </div>

        {/* Legend / Info Box (Góc dưới phải) */}
        <div className="absolute bottom-6 right-6 z-[400] bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/50 text-xs text-gray-600 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-green-400 border border-green-600"></span>{" "}
            Đang canh tác
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-yellow-400 border border-yellow-600"></span>{" "}
            Đã thu hoạch
          </div>
        </div>
      </div>
    </div>
  );
};

// Component nút bấm phụ
const ControlButton = ({ icon: Icon, title }) => (
  <button
    className="p-2.5 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all active:scale-95 group relative"
    title={title}
  >
    <Icon size={20} strokeWidth={1.5} />
    {/* Tooltip nhỏ bên trái */}
    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {title}
    </span>
  </button>
);

export default Fields;
