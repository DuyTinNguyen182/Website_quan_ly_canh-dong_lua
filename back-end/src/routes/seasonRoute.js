const express = require("express");
const router = express.Router();
const seasonController = require("../controllers/seasonController");
const { protect } = require("../middlewares/authMiddleware");

router.use(protect);

router.get("/", seasonController.getByField); // ?fieldId=...
router.post("/", seasonController.create);
router.put("/:id/finish", seasonController.finish); // Kết thúc vụ
router.delete("/:id", seasonController.remove);

module.exports = router;