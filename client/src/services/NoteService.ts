import { axiosClient, localhostUrl } from "../api/configuration";

// Define response types
type Note = {
  _id: string;
  seconds: number;
  text: string;
  lessonIndex: number;
  lessonId: string;
};

type AddNotePayload = {
  seconds: number;
  text: string;
};

type EditNoteFn = (
  courseId: string,
  lessonId: string,
  noteId: string,
  payload: AddNotePayload
) => Promise<Note>;


type FetchNotesFn = (courseId: string) => Promise<Note[]>;
type AddNoteFn = (
  courseId: string,
  lessonId: string,
  payload: AddNotePayload
) => Promise<Note>;
type DeleteNoteFn = (
  courseId: string,
  lessonId: string,
  noteId: string
) => Promise<void>;

/**
 * Fetch all notes for a specific course.
 */
const fetchAllNotes: FetchNotesFn = async (courseId) => {
  if (!courseId) {
    console.error("Invalid course ID provided.");
    throw new Error("Course ID is required.");
  }

  const url = `${localhostUrl}/api/course-progress/${courseId.trim()}/notes`;

  try {
    const response = await axiosClient.get<{ notes: Note[] }>(url);

    if (response?.data?.notes) {
      return response.data.notes;
    }

    console.warn("Unexpected response structure:", response?.data);
    throw new Error("Invalid response format.");
  } catch (error: any) {
    console.error(`Error fetching notes for course ID ${courseId}:`, error);
    throw new Error(
      error.response?.data?.message ||
        `Failed to fetch notes for course ID ${courseId}`
    );
  }
};

/**
 * Add a note to a specific lesson in a course.
 */
const addNote: AddNoteFn = async (courseId, lessonId, payload) => {
  if (!courseId || !lessonId) {
    console.error("Invalid course ID or lesson ID provided.");
    throw new Error("Course ID and Lesson ID are required.");
  }

  const url = `${localhostUrl}/api/course-progress/${courseId.trim()}/lessons/${lessonId.trim()}/notes`;

  try {
    const response = await axiosClient.post<{ note: Note }>(url, payload);

    if (response?.data?.note) {
      return response.data.note;
    }

    console.warn("Unexpected response structure:", response?.data);
    throw new Error("Failed to add note.");
  } catch (error: any) {
    console.error(
      `Error adding note for course ${courseId} and lesson ${lessonId}:`,
      error
    );
    throw new Error(
      error.response?.data?.message ||
        `Failed to add note for course ID ${courseId} and lesson ID ${lessonId}`
    );
  }
};

/**
 * Delete a note from a specific lesson in a course.
 */
const deleteNote: DeleteNoteFn = async (courseId, lessonId, noteId) => {
  if (!courseId || !lessonId || !noteId) {
    console.error("Invalid course ID, lesson ID, or note ID provided.");
    throw new Error("Course ID, Lesson ID, and Note ID are required.");
  }

  const url = `${localhostUrl}/api/course-progress/${courseId.trim()}/lessons/${lessonId.trim()}/notes/${noteId.trim()}`;

  try {
    const response = await axiosClient.delete(url);

    if (!response?.data) {
      console.warn("No data returned from deleting the note.");
    }
  } catch (error: any) {
    console.error(
      `Error deleting note for course ${courseId}, lesson ${lessonId}, and note ${noteId}:`,
      error
    );
    throw new Error(
      error.response?.data?.message ||
        `Failed to delete note for course ID ${courseId}, lesson ID ${lessonId}, and note ID ${noteId}`
    );
  }
};

const editNote: EditNoteFn = async (courseId, lessonId, noteId, payload) => {
  if (!courseId || !lessonId || !noteId || !payload.text) {
    console.error("Invalid parameters provided for editing note.");
    throw new Error("All parameters are required.");
  }

  const url = `${localhostUrl}/api/course-progress/${courseId.trim()}/lessons/${lessonId}/notes/${noteId}`;

  try {
    const response = await axiosClient.put<Note>(url, payload);

    if (response?.data) {
      return response.data;
    }

    console.warn("Unexpected response structure:", response?.data);
    throw new Error("Invalid response format.");
  } catch (error: any) {
    console.error(`Error editing note for course ID ${courseId}:`, error);
    throw new Error("Error editing note.");
  }
};

// Export all methods as named exports
export {
  fetchAllNotes,
  addNote,
  deleteNote,
  editNote
};
