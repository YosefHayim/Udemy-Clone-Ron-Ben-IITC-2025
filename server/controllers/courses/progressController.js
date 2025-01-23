const User = require("../../models/users/userModel"); // Update the path to match your project structure
const Course = require("../../models/courses/courseModel");
const CourseProgress = require("././../../models/courses/courseProgressModel");
const mongoose = require("mongoose");


/**
 * Initialize progress for a user when they start a course.
 */
exports.initializeProgress = async (req, res) => {
  try {
    // Extract IDs from the request
    const courseId = req.params.id; // courseId comes as a string from URL params
    const userId = req.user?._id; // userId should already be an ObjectId

    console.log("Received courseId:", courseId, "Type:", typeof courseId);
    console.log("Received userId:", userId, "Type:", typeof userId);

    // Validate that courseId and userId are valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID or course ID" });
    }

    // Convert courseId to ObjectId
    const courseObjectId = new mongoose.Types.ObjectId(courseId); // Ensure ObjectId type
    const userObjectId = userId; // userId is already an ObjectId

    console.log("Converted courseId:", courseObjectId, "Type:", typeof courseObjectId);
    console.log("Converted userId:", userObjectId, "Type:", typeof userObjectId);

    // Check if the course and user exist
    const userExists = await User.findById(userObjectId);
    const courseExists = await Course.findById(courseObjectId);

    if (!userExists || !courseExists) {
      return res.status(404).json({ error: "User or course not found" });
    }

    // Check for existing progress
    const existingProgress = await CourseProgress.findOne({
      userId: userObjectId,
      courseId: courseObjectId,
    });

    if (existingProgress) {
      return res
        .status(400)
        .json({ error: "Progress already initialized for this course and user" });
    }

    // Prepare sections for progress
    const sections = courseExists.sections.map((section) => ({
      sectionId: section._id,
      lessons: section.lessons.map((lesson) => ({
        lessonId: lesson._id,
        completed: false,
        lastWatched: 0,
      })),
    }));

    // Create the new progress record
    const progress = new CourseProgress({
      userId: userObjectId,
      courseId: courseObjectId,
      sections,
    });

    await progress.save();
    res.status(201).json(progress);
  } catch (err) {
    console.error("Error initializing progress:", err.message);
    res
      .status(500)
      .json({ error: "Failed to initialize progress", details: err.message });
  }
};





/**
 * Update progress for a specific lesson.
 */
exports.updateLessonProgress = async (req, res) => {
  const { courseId, lessonId } = req.params;
  const userId = req.user._id;
  const { completed, lastWatched } = req.body;

  try {
    const progress = await CourseProgress.findOne({ userId, courseId });

    if (!progress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    let lessonUpdated = false;

    // Update the progress for the specific lesson
    for (const section of progress.sections) {
      for (const lesson of section.lessons) {
        if (lesson.lessonId.toString() === lessonId) {
          if (completed !== undefined) lesson.completed = completed;
          if (lastWatched !== undefined) lesson.lastWatched = lastWatched;
          lessonUpdated = true;
        }
      }
    }

    if (!lessonUpdated) {
      return res
        .status(404)
        .json({ message: "Lesson not found in progress data" });
    }

    await progress.save();
    res.status(200).json({ message: "Lesson progress updated", progress });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update progress", details: err.message });
  }
};

/**
 * Retrieve progress for a specific course and user.
 */
exports.getCourseProgress = async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user._id;

  try {
    // Find progress for the user and course
    const progress = await CourseProgress.findOne({ userId, courseId })
      .populate({
        path: "sections.sectionId", // Populate section information
        select: "title course totalSectionDuration totalSectionLessons", // Select required fields
      })
      .populate({
        path: "sections.lessons.lessonId", // Populate lesson information
        select: "title videoUrl duration order resources createdAt updatedAt", // Select required fields
      });

    if (!progress) {
      return res.status(404).json({ message: "Progress not found" });
    }

    // Calculate total lessons and completed lessons
    let totalLessons = 0;
    let completedLessons = 0;

    progress.sections.forEach((section) => {
      totalLessons += section.lessons.length; // Count all lessons
      section.lessons.forEach((lesson) => {
        if (lesson.completed) {
          completedLessons++; // Count completed lessons
        }
      });
    });

    // Calculate completion percentage as a float
    const completionPercentage = totalLessons > 0 ? completedLessons / totalLessons : 0;

    // Add the percentage to the response
    res.status(200).json({
      progress,
      completionPercentage,
    });
  } catch (err) {
    console.error("Error retrieving course progress:", err.message);
    res
      .status(500)
      .json({ error: "Failed to retrieve progress", details: err.message });
  }
};
