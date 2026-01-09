const Season = require("../models/seasonModel");
const DiaryLog = require("../models/diaryLogModel");

// Lấy danh sách vụ của 1 cánh đồng
const getSeasonsByField = async (fieldId, userId) => {
  return await Season.find({ field: fieldId, user: userId }).sort({ createdAt: -1 });
};

// Tạo vụ mới
const createSeason = async (data, userId) => {
  const activeSeason = await Season.findOne({ 
    field: data.fieldId, 
    user: userId, 
    status: "active" 
  });
  
  if (activeSeason && data.status === "active") {
    // Tùy chọn: Có thể throw lỗi hoặc tự động đóng vụ cũ
    // throw new Error("Cánh đồng này đang có vụ canh tác chưa kết thúc!");
  }

  return await Season.create({
    name: data.name,
    field: data.fieldId,
    startDate: data.startDate,
    user: userId
  });
};

// Kết thúc vụ (Thu hoạch xong)
const finishSeason = async (id, userId) => {
  return await Season.findOneAndUpdate(
    { _id: id, user: userId },
    { status: "completed", endDate: new Date() },
    { new: true }
  );
};

const deleteSeason = async (id, userId) => {
  const season = await Season.findOneAndDelete({ _id: id, user: userId });
  if (season) {
    // Xóa luôn tất cả nhật ký của vụ này
    await DiaryLog.deleteMany({ season: id });
  }
  return season;
};

module.exports = { getSeasonsByField, createSeason, finishSeason, deleteSeason };