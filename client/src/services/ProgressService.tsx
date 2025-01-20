import { axiosClient, localhostUrl } from "../api/configuration";

// Define types for responses
type FetchProgressFn = (courseId: string) => Promise<any>;
type UpdateLessonProgressFn = (
  courseId: string,
  lessonId: string,
  payload: { completed?: boolean; lastWatched?: number }
) => Promise<any>;
type InitializeProgressFn = (courseId: string) => Promise<any>;

/**
 * Fetch progress for a specific course by course ID.
 */
const fetchCourseProgress: FetchProgressFn = async (courseId) => {
  if (!courseId || typeof courseId !== "string") {
    console.error("Invalid course ID provided.");
    return null;
  }

  const sanitizedCourseId = courseId.trim();
  const url = `${localhostUrl}/api/course-progress/${sanitizedCourseId}`;

  try {
    const response = await axiosClient.get(url);

    if (response?.data) {
      return response.data;
    }

    console.warn("No progress data found in the response.");
    return null;
  } catch (error) {
    console.error(`Error fetching progress for course ID ${sanitizedCourseId}:`, error);
    throw error;
  }
};

/**
 * Update progress for a specific lesson in a course.
 */
const updateLessonProgress: UpdateLessonProgressFn = async (
  courseId,
  lessonId,
  payload
) => {
  if (!courseId || typeof courseId !== "string" || !lessonId || typeof lessonId !== "string") {
    console.error("Invalid course ID or lesson ID provided.");
    return null;
  }

  const sanitizedCourseId = courseId.trim();
  const sanitizedLessonId = lessonId.trim();
  const url = `${localhostUrl}/api/course-progress/${sanitizedCourseId}/lessons/${sanitizedLessonId}`;

  try {
    const response = await axiosClient.patch(url, payload);

    if (response?.data) {
      return response.data;
    }

    console.warn("No data returned from updating lesson progress.");
    return null;
  } catch (error) {
    console.error(
      `Error updating progress for lesson ID ${sanitizedLessonId} in course ID ${sanitizedCourseId}:`,
      error
    );
    throw error;
  }
};

/**
 * Initialize progress for a course by course ID.
 */
const initializeCourseProgress: InitializeProgressFn = async (courseId) => {
  if (!courseId || typeof courseId !== "string") {
    console.error("Invalid course ID provided.");
    return null;
  }

  const sanitizedCourseId = courseId.trim();
  const url = `${localhostUrl}/api/course-progress/initialize`;

  try {
    const response = await axiosClient.post(url, { courseId });

    if (response?.data) {
      return response.data;
    }

    console.warn("No data returned from initializing course progress.");
    return null;
  } catch (error) {
    console.error(`Error initializing progress for course ID ${sanitizedCourseId}:`, error);
    throw error;
  }
};

// Export all methods as named exports
export { fetchCourseProgress, updateLessonProgress, initializeCourseProgress };
