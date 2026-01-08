const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // Kiểm tra header có dạng: "Bearer eyJhbGciOi..."
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Lấy token ra khỏi chuỗi "Bearer <token>"
      token = req.headers.authorization.split(" ")[1];

      // Giải mã token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Gán id user vào request để các bước sau dùng
      req.user = decoded;

      next(); // Cho phép đi tiếp
    } catch (error) {
      res.status(401).json({ message: "Token không hợp lệ hoặc đã hết hạn" });
    }
  }

  if (!token) {
    res
      .status(401)
      .json({ message: "Bạn chưa đăng nhập, không có quyền truy cập" });
  }
};

module.exports = { protect };
