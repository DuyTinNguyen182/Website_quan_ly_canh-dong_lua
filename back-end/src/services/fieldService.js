const Field = require("../models/fieldModel");

const createField = async (data, userId) => {
  // Logic nghiệp vụ: Cánh đồng không được trùng tên
  const exists = await Field.findOne({ name: data.name, user: userId });
  if (exists) {
    throw new Error("Tên cánh đồng đã tồn tại!");
  }

  // Logic DB
  const newField = await Field.create({ ...data, user: userId });
  return newField;
};

const getAllFields = async (userId) => {
  return await Field.find({ user: userId });
};

module.exports = { createField, getAllFields };
