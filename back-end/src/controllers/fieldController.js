const fieldService = require("../services/fieldService");

const create = async (req, res) => {
  try {
    const result = await fieldService.createField(req.body, req.user.id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const fields = await fieldService.getAllFields(req.user.id);
    res.json(fields);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID từ URL
    const result = await fieldService.updateField(id, req.body, req.user.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await fieldService.deleteField(id, req.user.id);
    res.json({ message: "Đã xóa thành công" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
  update,
  remove,
};
