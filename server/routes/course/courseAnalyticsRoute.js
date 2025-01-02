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

// Get all courses exist and their analytics
router.get("/", getAllAnalytics);

// get analytics of specific course by id
router.get("/:id", getAnalyticsById);

// create an analytics for a course
router.post("/", createAnalytics);

// update analytics of a specific course
router.put("/", updateAnalytics);

// delete course analytics by a specific course
router.delete("/", deleteAnalytics);

module.exports = router;
