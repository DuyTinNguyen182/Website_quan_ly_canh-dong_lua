const Plot = require("../models/plotModel");
const Field = require("../models/fieldModel");

const getPlotsByField = async (fieldId, userId) => {
  const field = await Field.findOne({ _id: fieldId, user: userId });
  if (!field) throw new Error("Cánh đồng không tồn tại hoặc không có quyền truy cập");

  return await Plot.find({ field: fieldId }).sort({ createdAt: 1 });
};

const createPlot = async (data, userId) => {
  const newPlot = await Plot.create({
    name: data.name,
    area: data.area,
    field: data.fieldId,
    user: userId,
  });
  return newPlot;
};

const updatePlot = async (id, data, userId) => {
  const plot = await Plot.findOneAndUpdate(
    { _id: id, user: userId },
    { name: data.name, area: data.area, status: data.status },
    { new: true }
  );
  if (!plot) throw new Error("Không tìm thấy thửa ruộng!");
  return plot;
};

const deletePlot = async (id, userId) => {
  const plot = await Plot.findOneAndDelete({ _id: id, user: userId });
  if (!plot) throw new Error("Không tìm thấy thửa ruộng!");
  return plot;
};

module.exports = {
  getPlotsByField,
  createPlot,
  updatePlot,
  deletePlot,
};