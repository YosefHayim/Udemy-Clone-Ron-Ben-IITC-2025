import React, { useState } from "react"; 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ReactQuill from "react-quill";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNote, deleteNote, fetchAllNotes  } from "@/services/NoteService";
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
  const [sortOption, setSortOption] = useState("mostRecent");
  const [lectureFilter, setLectureFilter] = useState("allLectures");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false); // Toggle sort dropdown
  const [isLectureDropdownOpen, setIsLectureDropdownOpen] = useState(false); // Toggle lecture dropdown
  const queryClient = useQueryClient();

  const { data: notes, isLoading, isError } = useQuery({
    queryKey: ["notes", courseId],
    queryFn: () => fetchAllNotes(courseId), // Pass the function to fetch notes
    enabled: !!courseId, // Ensures the query only runs if `courseId` is valid
  });
  

  const noteMutation = useMutation({
    mutationFn: async (params: 
      { action: "add"; text: string; seconds: number } |
      { action: "edit"; text: string; noteId?: string } |
      { action: "delete"; noteId?: string }
    ) => {
      if (params.action === "add") {
        return await addNote(courseId, lessonId, { seconds: params.seconds, text: params.text });
      } else if (params.action === "edit") {
        if (!params.noteId) throw new Error("Missing noteId for edit action");
        return await editNote(courseId, lessonId, params.noteId, { text: params.text });
      } else if (params.action === "delete") {
        if (!params.noteId) throw new Error("Missing noteId for delete action");
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
  
  
  const handleDeleteNote = (courseId: string, lessonId: string, noteId: string) => {

    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (confirmed) {
      deleteMutation.mutate({ courseId, lessonId, noteId });
    }
  };
  
  



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
    setContent("");
    setShowEditor(false); // Hide the editor after saving
  };



  
  const handleCancel = () => {
    setShowEditor(false); // Hide the editor
    setContent(""); // Clear content
  };

  return (
    <div id="notes" className="min-w-full px-80">
      {/* Dropdowns */}

      {/* Note Editor */}
      <div className="mt-10 min-w-full">
        {!showEditor ? (
          <div
            onClick={() => setShowEditor(true)} // Show editor on click
            className="hover:bg-[#F6F7F9] min-w-full flex justify-between items-center text-base font-semibold text-gray-400 border rounded-sm p-3 mb-4 cursor-pointer"
          >
            <p>Create new note at {formatTime(currentSec)}</p>
            <FaCirclePlus className=" text-[#303141]" />
          </div>
        ) : (
          <div className="flex  items-center justify-center">
            <span className="relative  self-start  mr-4 rounded-3xl text-white bg-black text-lg">
              {formatTime(currentSec)}
            </span>
            <div className=" min-w-full rounded-sm p-4 mb-4">
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
              <div className="flex justify-end gap-4  mt-4">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2  text-gray-700 rounded hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddNote}
                  className="px-6 py-2 bg-[#6D28D2] text-white rounded hover:bg-[#892DE1] transition duration-300"
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? "Saving..." : "Save Note"}
                </button>
              </div>
            </div>
          </div>
        )}

      <div className="flex gap-4">
        <Select>
      <SelectTrigger 
      className="w-[180px] size-25 text-xl border focus:ring-0 focus-visible:outline-none focus:outline-none hover:bg-[#EDE5F9] border-[#6D28D2] text-[#6D28D2]">
        <SelectValue placeholder="All lectures" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup >
          <SelectItem value="apple">All lectures</SelectItem>
          <SelectItem value="banana">Current lecture</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger 
      className="w-[180px] size-30 text-xl border focus:ring-0 focus-visible:outline-none focus:outline-none  border-[#6D28D2] text-[#6D28D2]">
        <SelectValue placeholder="Sort by most recent" />
      </SelectTrigger>
      <SelectContent className=" " >
        <SelectGroup  >
          <SelectItem className="hover:bg-[#EDE5F9]" value="apple">Sort by most recent</SelectItem>
          <SelectItem value="banana">Sort by oldest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>

      {/* Notes Display */}

      <div className="mt-10">
        {isLoading ? (
          <p>Loading notes...</p>
        ) : isError ? (
          <p>Error loading notes.</p>
        ) : notes && notes.length > 0 ? (
          <div>
            
            {notes.map((note: any, index: number) => (
             <div key={note.noteId} className="flex min-w-full px-12  " > 
            <span className="relative self-start px-2  mr-2 rounded-3xl text-white bg-black text-sm">
             {formatTime(note.seconds)}
            </span>
              <div
                key={index}
                className="min-w-full"
              >
                <div className=" flex items-center justify-between ">
            <span>
            <span className="text-black font-bold   pb-0 text-base	">{note.sectionIndex+1}. {note.sectionTitle}</span>
            <span className="text-gray-500 text-xs relative pb-0 mb-0 ml-4">{note.lessonIndex+1}. {note.lessonTitle}</span>
            </span>
            <span className="flex gap-2">
            <FaPen className="mr-2 text-[#303141] text-xl p-1 rounded-md hover:bg-[#E6E6E8]"/>
            <FaTrash
              className="mr-2 text-[#303141] cursor-pointer text-xl p-1 rounded-md hover:bg-[#E6E6E8]"
              onClick={() => handleDeleteNote(courseId, lessonId, note.noteId)}/>
          </span>
            </div>
                <div className="flex bg-[#F6F7F9]  border  min-w-full p-6 my-3">
                <div
                  dangerouslySetInnerHTML={{ __html: note.text }}
                  className="text-gray-800"
                />
              </div>
              </div>
              </div>
            ))}
          </div>
          
          
        ) : (
          <p>Click the "Create a new note" box, the "+" button, or press "B" to make your first note.</p>
        )}
      </div>
                    
      </div>
    </div>
  );
};

export default NotesTab;
