export const mockFields = [
  {
    id: 1,
    name: "Cánh đồng Gò Công",
    address: "Xã Long Hòa, Tiền Giang",
    totalArea: 45000, // m2
    plots: [
      {
        id: "p1",
        name: "Thửa A1 - Gần kênh",
        area: 2000,
        status: "active", // Đang canh tác
        // Tọa độ Polygon (Hình dáng thửa ruộng)
        coordinates: [
          [10.3705, 106.6651],
          [10.3715, 106.6661],
          [10.3708, 106.6672],
          [10.3698, 106.6662],
        ],
        center: [10.3706, 106.6661], // Tâm để map zoom vào
      },
      {
        id: "p2",
        name: "Thửa A2 - Giữa đồng",
        area: 2500,
        status: "harvested", // Đã thu hoạch
        coordinates: [
          [10.3716, 106.6662],
          [10.3726, 106.6672],
          [10.3719, 106.6683],
          [10.3709, 106.6673],
        ],
        center: [10.3717, 106.6672],
      },
    ],
  },
  {
    id: 2,
    name: "Cánh đồng Tháp Mười",
    address: "Huyện Tháp Mười, Đồng Tháp",
    totalArea: 60000,
    plots: [], // Chưa có thửa
  },
];
