const Field = require("../models/fieldModel");
const Plot = require("../models/plotModel");

const createField = async (data, userId) => {
  const exists = await Field.findOne({ name: data.name, user: userId });
  if (exists) throw new Error("Tên cánh đồng đã tồn tại!");
  return await Field.create({ ...data, user: userId });
};

const getAllFields = async (userId) => {
  return await Field.find({ user: userId }).sort({ createdAt: -1 });
};

const updateField = async (id, data, userId) => {
  const field = await Field.findOneAndUpdate(
    { _id: id, user: userId },
    { name: data.name, address: data.address },
    { new: true }
  );
  if (!field) throw new Error("Không tìm thấy cánh đồng!");
  return field;
};

const deleteField = async (id, userId) => {
  // 1. Xóa cánh đồng
  const field = await Field.findOneAndDelete({ _id: id, user: userId });
  if (!field) throw new Error("Không tìm thấy cánh đồng!");

  // 2. TỰ ĐỘNG XÓA TẤT CẢ THỬA RUỘNG THUỘC CÁNH ĐỒNG NÀY
  await Plot.deleteMany({ field: id });

  return field;
};

module.exports = {
  createField,
  getAllFields,
  updateField,
  deleteField,
};