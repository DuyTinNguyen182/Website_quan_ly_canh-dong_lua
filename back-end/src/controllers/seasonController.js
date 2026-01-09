const seasonService = require("../services/seasonService");

exports.getByField = async (req, res) => {
  try {
    const seasons = await seasonService.getSeasonsByField(req.query.fieldId, req.user.id);
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const season = await seasonService.createSeason(req.body, req.user.id);
    res.status(201).json(season);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.finish = async (req, res) => {
  try {
    const season = await seasonService.finishSeason(req.params.id, req.user.id);
    res.json(season);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await seasonService.deleteSeason(req.params.id, req.user.id);
    res.json({ message: "Đã xóa vụ mùa" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};