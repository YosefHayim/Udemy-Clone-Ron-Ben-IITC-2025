// import express from "express";
// import {
//   addNote,
//   deleteNote,
//   editNote,
//   getAllNotes,
//   getCourseProgress,
//   initializeProgress,
//   updateLessonProgress,
// } from "../../controllers/courses/progressController";
// import { grantedAccess } from "../../controllers/authorization/authController";

// const router = express.Router();
// // Initialize progress for a course
// router.post("/initialize/:id", grantedAccess, initializeProgress);

// // Update progress for a specific lesson
// router.patch(
//   "/:courseId/lessons/:lessonId",
//   grantedAccess,
//   updateLessonProgress
// );

// // Get progress for a course
// router.get("/:courseId", grantedAccess, getCourseProgress);

// router.post("/:courseId/lessons/:lessonId/notes", grantedAccess, addNote);

// // Delete a specific note
// router.delete(
//   "/:courseId/lessons/:lessonId/notes/:noteId",
//   grantedAccess,
//   deleteNote
// );

// // Get all notes for a specific course
// router.get("/:courseId/notes", grantedAccess, getAllNotes);

// router.put(
//   "/:courseId/lessons/:lessonId/notes/:noteId",
//   grantedAccess,
//   editNote
// );

// export default router;
