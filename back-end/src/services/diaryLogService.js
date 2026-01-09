const DiaryLog = require("../models/diaryLogModel");

// Lấy nhật ký của một vụ
const getLogsBySeason = async (seasonId, userId) => {
  return await DiaryLog.find({ season: seasonId, user: userId })
    .populate("plot", "name") // Lấy thêm tên thửa nếu có
    .sort({ date: -1 }); // Mới nhất lên đầu
};

const createLog = async (data, userId) => {
  return await DiaryLog.create({
    title: data.title,
    description: data.description,
    date: data.date,
    type: data.type,
    cost: data.cost,
    season: data.seasonId,
    plot: data.plotId || null, // Nếu không chọn thửa thì là null
    user: userId,
  });
};

const updateLog = async (id, data, userId) => {
  return await DiaryLog.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true }
  );
};

const deleteLog = async (id, userId) => {
  return await DiaryLog.findOneAndDelete({ _id: id, user: userId });
};

module.exports = { getLogsBySeason, createLog, updateLog, deleteLog };