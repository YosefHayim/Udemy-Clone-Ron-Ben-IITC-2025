const express = require("express");
const {
  getAllAnalytics,
  getAnalyticsById,
  createAnalytics,
  updateAnalytics,
  deleteAnalytics,
} = require("../../controllers/courses/courseAnalyticsController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.get("/", getAllAnalytics);
router.get("/:id", getAnalyticsById);
router.post("/", createAnalytics);
router.put("/", updateAnalytics);
router.delete("/", deleteAnalytics);

module.exports = router;
