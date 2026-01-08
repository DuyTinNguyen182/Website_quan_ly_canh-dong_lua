const express = require("express");
const router = express.Router();
const fieldController = require("../controllers/fieldController");

// Giả sử có middleware checkAuth
router.post("/", fieldController.create);
router.get("/", fieldController.getAll);

module.exports = router;
