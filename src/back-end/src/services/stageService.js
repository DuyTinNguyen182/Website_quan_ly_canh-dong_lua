const Stage = require("../models/stageModel");

const getAllStages = async () => {
  try {
    const stages = await Stage.find().sort({ order: 1 }).lean();
    return stages;
  } catch (error) {
    throw new Error(`Lấy danh sách giai đoạn thất bại: ${error.message}`);
  }
};

const getStageById = async (stageId) => {
  try {
    const stage = await Stage.findById(stageId).lean();
    if (!stage) {
      throw new Error("Không tìm thấy giai đoạn");
    }
    return stage;
  } catch (error) {
    throw new Error(`Lấy thông tin giai đoạn thất bại: ${error.message}`);
  }
};

const createStage = async (payload) => {
  try {
    const { name, order } = payload;

    if (!name || !name.trim()) {
      throw new Error("Tên giai đoạn là bắt buộc");
    }

    if (typeof order !== "number" || order < 0) {
      throw new Error("Thứ tự giai đoạn phải là một số không âm");
    }

    const existingStage = await Stage.findOne({
      name: { $regex: new RegExp(`^${name.trim()}$`, "i") },
    }).lean();

    if (existingStage) {
      throw new Error(`Giai đoạn có tên "${name}" đã tồn tại`);
    }

    const stage = new Stage({
      name: name.trim(),
      order,
    });

    await stage.save();
    return stage.toObject();
  } catch (error) {
    throw new Error(`Tạo giai đoạn thất bại: ${error.message}`);
  }
};

const updateStage = async (stageId, payload) => {
  try {
    const { name, order } = payload;

    const updateData = {};
    if (name !== undefined && name.trim()) {
      const existingStage = await Stage.findOne({
        _id: { $ne: stageId },
        name: { $regex: new RegExp(`^${name.trim()}$`, "i") },
      }).lean();

      if (existingStage) {
        throw new Error(`Giai đoạn có tên "${name}" đã tồn tại`);
      }

      updateData.name = name.trim();
    }

    if (order !== undefined && typeof order === "number" && order >= 0) {
      updateData.order = order;
    }

    const stage = await Stage.findByIdAndUpdate(stageId, updateData, {
      new: true,
    }).lean();

    if (!stage) {
      throw new Error("Không tìm thấy giai đoạn");
    }

    return stage;
  } catch (error) {
    throw new Error(`Cập nhật giai đoạn thất bại: ${error.message}`);
  }
};

const deleteStage = async (stageId) => {
  const Task = require("../models/taskModel");

  const dependentTasks = await Task.findOne({ stage: stageId }).lean();
  if (dependentTasks) {
    throw new Error("Không thể xóa giai đoạn vì còn công việc liên quan");
  }

  const stage = await Stage.findByIdAndDelete(stageId).lean();
  if (!stage) {
    throw new Error("Không tìm thấy giai đoạn");
  }

  return stage;
};

module.exports = {
  getAllStages,
  getStageById,
  createStage,
  updateStage,
  deleteStage,
};
