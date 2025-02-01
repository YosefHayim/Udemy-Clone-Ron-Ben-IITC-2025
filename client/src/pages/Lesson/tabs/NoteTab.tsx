import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactQuill from "react-quill";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNote, deleteNote, editNote, fetchAllNotes } from "@/services/NoteService";
import "react-quill/dist/quill.snow.css";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";

interface NotesTabProps {
  currentSec: number;
  courseId: string;
  lessonId: string;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const NotesTab: React.FC<NotesTabProps> = ({ currentSec, courseId, lessonId }) => {
  const [content, setContent] = useState(""); // State for notes content
  const [showEditor, setShowEditor] = useState(false); // State to toggle editor visibility
  const queryClient = useQueryClient();

  const { data: notes, isLoading, isError } = useQuery({
    queryKey: ["notes", courseId],
    queryFn: () => fetchAllNotes(courseId),
    enabled: !!courseId,
  });

  // Single useMutation for add, edit, and delete operations
  const noteMutation = useMutation({
    mutationFn: async (params: 
      { action: "add"; text: string; seconds: number } |
      { action: "edit"; text: string; noteId: string } |
      { action: "delete"; noteId: string }
    ) => {
      if (params.action === "add") {
        return await addNote(courseId, lessonId, { seconds: params.seconds, text: params.text });
      } else if (params.action === "edit") {
        return await editNote(courseId, lessonId, params.noteId, { text: params.text });
      } else if (params.action === "delete") {
        return await deleteNote(courseId, lessonId, params.noteId);
      }
      throw new Error("Invalid action");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notes", courseId]);
      setShowEditor(false);
      setContent(""); // Reset content after successful mutation
    },
    onError: (error: any) => {
      console.error("Failed to process note:", error.message);
    },
  });

  // Function to handle adding a new note
  const handleAddNote = () => {
    if (!content.trim()) {
      alert("Please enter some content for the note.");
      return;
    }
    noteMutation.mutate({
      action: "add",
      text: content,
      seconds: currentSec,
    });
  };

  // Function to handle deleting a note
  const handleDeleteNote = (noteId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (confirmed) {
      noteMutation.mutate({ action: "delete", noteId });
    }
  };

  // Function to handle editing a note
  const handleEditNote = (noteId: string, updatedText: string) => {
    if (!updatedText.trim()) {
      alert("Cannot save an empty note.");
      return;
    }
    noteMutation.mutate({
      action: "edit",
      noteId,
      text: updatedText,
    });
  };

  return (
    <div id="notes" className="min-w-full px-80">
      <div className="mt-10 min-w-full">
        {!showEditor ? (
          <div
            onClick={() => setShowEditor(true)}
            className="hover:bg-[#F6F7F9] min-w-full flex justify-between items-center text-base font-semibold text-gray-400 border rounded-sm p-3 mb-4 cursor-pointer"
          >
            <p>Create new note at {formatTime(currentSec)}</p>
            <FaCirclePlus className=" text-[#303141]" />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <span className="relative self-start mr-4 rounded-3xl text-white bg-black text-lg">
              {formatTime(currentSec)}
            </span>
            <div className="min-w-full rounded-sm p-4 mb-4">
              <ReactQuill
                value={content}
                onChange={setContent}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["code-block"],
                    ["clean"],
                  ],
                }}
                placeholder="Write something amazing..."
                theme="snow"
                className="custom-quill"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setShowEditor(false)}
                  className="px-6 py-2 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddNote}
                  className="px-6 py-2 bg-[#6D28D2] text-white rounded hover:bg-[#892DE1] transition duration-300"
                  disabled={noteMutation.isLoading}
                >
                  {noteMutation.isLoading ? "Saving..." : "Save Note"}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10">
          {isLoading ? (
            <p>Loading notes...</p>
          ) : isError ? (
            <p>Error loading notes.</p>
          ) : notes && notes.length > 0 ? (
            <div>
              {notes.map((note: any) => (
                <div key={note.noteId} className="flex min-w-full px-12">
                  <span className="relative self-start px-2 mr-2 rounded-3xl text-white bg-black text-sm">
                    {formatTime(note.seconds)}
                  </span>
                  <div className="min-w-full">
                    <div className="flex items-center justify-between">
                      <span>
                        <span className="text-black font-bold pb-0 text-base">
                          {note.sectionIndex + 1}. {note.sectionTitle}
                        </span>
                        <span className="text-gray-500 text-xs relative pb-0 mb-0 ml-4">
                          {note.lessonIndex + 1}. {note.lessonTitle}
                        </span>
                      </span>
                      <span className="flex gap-2">
                        <FaPen
                          className="mr-2 text-[#303141] text-xl p-1 rounded-md hover:bg-[#E6E6E8]"
                          onClick={() => handleEditNote(note.noteId, note.text)}
                        />
                        <FaTrash
                          className="mr-2 text-[#303141] cursor-pointer text-xl p-1 rounded-md hover:bg-[#E6E6E8]"
                          onClick={() => handleDeleteNote(note.noteId)}
                        />
                      </span>
                    </div>
                    <div className="flex bg-[#F6F7F9] border min-w-full p-6 my-3">
                      <div dangerouslySetInnerHTML={{ __html: note.text }} className="text-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Click the "Create a new note" box to make your first note.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesTab;
