import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import ReactQuill from "react-quill";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNote,
  deleteNote,
  editNote,
  fetchAllNotes,
} from "@/services/NoteService";
import "react-quill/dist/quill.snow.css";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DeleteNoteDialog } from "../comp/dialog";
import { Note } from "../../../types/types";

interface NotesTabProps {
  currentSec: number;
  courseId: string;
  lessonId: string;
}
const NotesTab: React.FC<NotesTabProps> = ({
  currentSec,
  courseId,
  lessonId,
}) => {
  const [content, setContent] = useState(""); // State for notes content
  const [showEditor, setShowEditor] = useState(false); // State to toggle editor visibility
  const [timeSort, setTimeSort] = useState<string>("Sort by most recent");
  const [all, setAll] = useState<string>("All lectures"); //
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null); // Track which note is being edited
  const [editingContent, setEditingContent] = useState<string>(""); // Track the content being edited
  const [noteToDelete, setNoteToDelete] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const {
    data: notes,
    isLoading,
    isError,
  } = useQuery<Note[]>({
    queryKey: ["notes", courseId],
    queryFn: () => fetchAllNotes(courseId),
    enabled: !!courseId,
  });

  // Single useMutation for add, edit, and delete operations
  const noteMutation = useMutation({
    mutationFn: async (
      params:
        | { action: "add"; text: string; seconds: number }
        | { action: "edit"; text: string; noteId: string }
        | { action: "delete"; noteId: string }
    ) => {
      if (params.action === "add") {
        return await addNote(courseId, lessonId, {
          seconds: params.seconds,
          text: params.text,
        });
      } else if (params.action === "edit") {
        return await editNote(courseId, lessonId, params.noteId, {
          text: params.text,
        });
      } else if (params.action === "delete") {
        return await deleteNote(courseId, lessonId, params.noteId);
      }
      throw new Error("Invalid action");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notes", courseId]);
      setShowEditor(false);
      setContent("");
      setEditingNoteId(null);
      // Reset content after successful mutation
    },
    onError: (error: any) => {
      console.log("Failed to process note:", error.message);
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
    setNoteToDelete(noteId);
  };

  const startEditing = (noteId: string, text: string) => {
    setEditingNoteId(noteId);
    setEditingContent(text);
  };

  const saveEditedNote = (noteId: string) => {
    if (!editingContent.trim()) {
      alert("Cannot save an empty note.");
      return;
    }
    noteMutation.mutate({
      action: "edit",
      noteId,
      text: editingContent,
    });
    setEditingNoteId(null); // Close editor after saving
  };

  const filteredNotes = (notes || []).filter((note: any) =>
    all === "Current lecture" ? note.lessonId === lessonId : true
  );

  console.log("filtered notes", filteredNotes);

  return (
    <div id="notes" className="min-w-full px-80">
      <div className="mt-10 min-w-full">
        {!showEditor ? (
          <div
            onClick={() => setShowEditor(true)}
            className="hover:bg-[#F6F7F9] min-w-full flex justify-between items-center text-base font-semibold text-gray-400 border rounded-sm p-3 mb-4 cursor-pointer"
          >
            <p>Create new note at {formatTime(currentSec)}</p>
            <FaCirclePlus className=" text-courseNameColorTxt" />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <span className="relative self-start px-2 mr-2 rounded-3xl text-white bg-black text-sm">
              {formatTime(currentSec)}
            </span>
            <div className="min-w-full rounded-sm p-4 mb-4">
              <ReactQuill
                value={content}
                onChange={setContent}
                placeholder="Write something..."
                theme="snow"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setShowEditor(false)}
                  className="px-6 py-2 text-gray-700 rounded font-extrabold hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddNote}
                  className="px-6 py-2 bg-btnColor text-white font-extrabold rounded hover:bg-[#892DE1] transition duration-300"
                  disabled={noteMutation.isLoading}
                >
                  {noteMutation.isLoading ? "Saving..." : "Save Note"}
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center  gap-2 border rounded-sm text-btnColor text-base font-bold p-2 border-btnColor hover:bg-[#EDE5F9] hover:border-btnColor focus:outline-none data-[state=open]:bg-[#EDE5F9]  ">
              {all} <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white ">
              <DropdownMenuItem
                onClick={() => setAll("All lectures")}
                className="hover:bg-[#EDE5F9] data-[highlighted]:bg-[#EDE5F9]"
              >
                All lectures
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setAll("Current lecture")}
                className="hover:bg-[#EDE5F9] data-[highlighted]:bg-[#EDE5F9]"
              >
                Current lecture
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 border rounded-sm text-btnColor text-base font-bold p-2 border-btnColor hover:bg-[#EDE5F9] hover:border-btnColor focus:outline-none data-[state=open]:bg-[#EDE5F9]  ">
              {timeSort} <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white ">
              <DropdownMenuItem
                onClick={() => setTimeSort("Sort by most recent")}
                className="hover:bg-[#EDE5F9] data-[highlighted]:bg-[#EDE5F9]"
              >
                Sort by most recent
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTimeSort("Sort by oldest")}
                className="hover:bg-[#EDE5F9] data-[highlighted]:bg-[#EDE5F9]"
              >
                Sort by oldest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-10">
          {isLoading ? (
            <p>Loading notes...</p>
          ) : isError ? (
            <p>Error loading notes.</p>
          ) : notes && notes.length > 0 ? (
            (filteredNotes ?? []).length > 0 ? (
              <div>
                {filteredNotes.map((note: any) => (
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
                            className="mr-2 text-courseNameColorTxt text-xl p-1 rounded-md hover:bg-[#E6E6E8]"
                            onClick={() => startEditing(note.noteId, note.text)}
                          />
                          <Dialog>
                            <DialogTrigger asChild>
                              <FaTrash
                                className="mr-2 text-courseNameColorTxt cursor-pointer text-xl p-1 rounded-md hover:bg-[#E6E6E8]"
                                onClick={() => setNoteToDelete(note.noteId)}
                              />
                            </DialogTrigger>
                            <DeleteNoteDialog
                              onConfirm={() => {
                                if (noteToDelete) {
                                  noteMutation.mutate({
                                    action: "delete",
                                    noteId: noteToDelete,
                                  });
                                  setNoteToDelete(null);
                                }
                              }}
                            />
                          </Dialog>
                        </span>
                      </div>

                      {/* Show ReactQuill editor if this note is being edited */}
                      {editingNoteId === note.noteId ? (
                        <div className="flex flex-col bg-[#F6F7F9] border min-w-full p-6 my-3">
                          <ReactQuill
                            value={editingContent}
                            onChange={setEditingContent}
                            modules={{
                              toolbar: [
                                [{ header: [1, 2, 3, false] }],
                                ["bold", "italic", "underline", "strike"],
                                [{ list: "ordered" }, { list: "bullet" }],
                                ["code-block"],
                                ["clean"],
                              ],
                            }}
                            placeholder="Edit your note..."
                            theme="snow"
                            className="custom-quill"
                          />
                          <div className="flex justify-end gap-4 mt-4">
                            <button
                              onClick={() => setEditingNoteId(null)}
                              className="px-6 py-2 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => saveEditedNote(note.noteId)}
                              className="px-6 py-2 bg-btnColor text-white rounded hover:bg-[#892DE1] transition duration-300"
                              disabled={noteMutation.isLoading}
                            >
                              {noteMutation.isLoading ? "Saving..." : "Save"}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex bg-[#F6F7F9] border min-w-full p-6 my-3">
                          <div
                            dangerouslySetInnerHTML={{ __html: note.text }}
                            className="text-gray-800"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg p-9">
                Click the "Create a new note" box to make your first note.
              </p>
            )
          ) : (
            <p className="text-lg p-9">
              Click the "Create a new note" box to make your first note.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesTab;
