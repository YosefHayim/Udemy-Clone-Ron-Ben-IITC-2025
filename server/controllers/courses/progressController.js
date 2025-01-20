const Course = require("../../models/courses/courseModel");
const CourseProgress = require("././../../models/courses/courseProgressModel");

/**
 * Initialize progress for a user when they start a course.
 */
exports.initializeProgress = async (req, res) => {
  const courseId = req.params.id;
  const userId = req.user._id;

  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Prepare sections and lessons for progress
    const sections = course.sections.map((section) => ({
      sectionId: section._id,
      lessons: section.lessons.map((lesson) => ({
        lessonId: lesson._id,
        completed: false,
        lastWatched: 0,
      })),
    }));

    const progress = new CourseProgress({
      userId,
      courseId,
      sections,
    });

    await progress.save();
    res.status(201).json(progress);
  } catch (err) {
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

    // Return the complete progress data
    res.status(200).json(progress);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to retrieve progress", details: err.message });
  }
};
