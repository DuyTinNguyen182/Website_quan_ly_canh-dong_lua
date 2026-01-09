const express = require("express");
const router = express.Router();
const diaryLogController = require("../controllers/diaryLogController");
const { protect } = require("../middlewares/authMiddleware");

router.use(protect);

router.get("/", diaryLogController.getBySeason); // ?seasonId=...
router.post("/", diaryLogController.create);
router.put("/:id", diaryLogController.update);
router.delete("/:id", diaryLogController.remove);

module.exports = router;