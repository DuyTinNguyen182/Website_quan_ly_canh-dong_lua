const diaryLogService = require("../services/diaryLogService");

exports.getBySeason = async (req, res) => {
  try {
    const logs = await diaryLogService.getLogsBySeason(req.query.seasonId, req.user.id);
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const log = await diaryLogService.createLog(req.body, req.user.id);
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const log = await diaryLogService.updateLog(req.params.id, req.body, req.user.id);
    res.json(log);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await diaryLogService.deleteLog(req.params.id, req.user.id);
    res.json({ message: "Đã xóa nhật ký" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};