const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: "Đăng ký thành công!", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await authService.loginUser(email, password);
    res.status(200).json({ message: "Đăng nhập thành công!", data });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { register, login };
