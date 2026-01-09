const DiaryLog = require("../models/diaryLogModel");

// Lấy nhật ký của một vụ
const getLogsBySeason = async (seasonId, userId) => {
  return await DiaryLog.find({ season: seasonId, user: userId })
    .populate("plot", "name") // Lấy thêm tên thửa nếu có
    .sort({ date: -1 }); // Mới nhất lên đầu
};

const createLog = async (data, userId) => {
  // [FIX] Xử lý plotId: Nếu là chuỗi rỗng "" hoặc null thì gán là null
  const plotValue = (data.plotId && data.plotId !== "") ? data.plotId : null;

  return await DiaryLog.create({
    title: data.title,
    description: data.description,
    date: data.date,
    type: data.type,
    cost: data.cost,
    season: data.seasonId,
    plot: plotValue, // Sử dụng giá trị đã xử lý
    user: userId,
  });
};

const updateLog = async (id, data, userId) => {
  // [FIX] Cũng cần xử lý khi update
  const updateData = { ...data };
  if (updateData.plotId === "") updateData.plot = null;
  else if (updateData.plotId) updateData.plot = updateData.plotId;

  return await DiaryLog.findOneAndUpdate(
    { _id: id, user: userId },
    updateData,
    { new: true }
  );
};

const deleteLog = async (id, userId) => {
  return await DiaryLog.findOneAndDelete({ _id: id, user: userId });
};

module.exports = { getLogsBySeason, createLog, updateLog, deleteLog };