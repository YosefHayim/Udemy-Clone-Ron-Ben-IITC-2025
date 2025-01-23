import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLessonProgress } from "@/services/ProgressService";
import CustomTrigger from "./CustomTrigger";

interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
  completed?: boolean; // Add completed property
  duration?: number;
}

interface Section {
  _id: string;
  title: string;
  lessons: Lesson[];
}

export function CourseSidebarMenu({
  sections,
  courseId,
}: {
  sections: Section[];
  courseId: string;
}) {
  const { toggleSidebar, open } = useSidebar();
  const location = useLocation();
  const queryClient = useQueryClient();

  // Initialize completedLessons from local state
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : {};
  });

  // Save completedLessons to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  // Mutation for lesson completion
  const mutation = useMutation({
    mutationFn: ({ lessonId, completed }: { lessonId: string; completed: boolean }) =>
      updateLessonProgress(courseId, lessonId, { completed }),
    onMutate: async ({ lessonId, completed }) => {
      // Cancel any ongoing queries for this course
      await queryClient.cancelQueries(["courseProgress", courseId]);

      // Snapshot the previous state
      const previousState = completedLessons;

      // Optimistically update the state
      setCompletedLessons((prev) => ({
        ...prev,
        [lessonId]: completed,
      }));

      return { previousState };
    },
    onError: (error, variables, context) => {
      // Rollback to the previous state on error
      if (context?.previousState) {
        setCompletedLessons(context.previousState);
      }
    },
    onSettled: () => {
      // Optionally refetch the data
      queryClient.invalidateQueries(["courseProgress", courseId]);
    },
  });

  // Toggle lesson completion
  const toggleLessonCompletion = (lessonId: string, currentState: boolean) => {
    mutation.mutate({
      lessonId,
      completed: !currentState,
    });
  };

  let lessonCounter = 0;

  return (
    <SidebarMenu className="gap-0 overflow-hidden">
      <div className="flex p-4 items-center justify-between border-b font-semibold">
        <span className="text-lg">Course content</span>
        {open && (
          <div className="pl-6 size">
            <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="insideSidebar" />
          </div>
        )}
      </div>
      {sections.map((section) => (
        <Collapsible
          key={section._id}
          className="group/collapsible py-4 border-b flex w-full"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger
              asChild
              className="overflow-visible font-bold focus:outline-none gap-0 pl-0 focus-visible:outline-none rounded-none"
            >
              <SidebarMenuButton className="overflow-visible focus:outline-none flex items-start justify-between pl-2 focus-visible:outline-none rounded-none">
                <div className="flex-1">
                  <span className="whitespace-normal pr-4 break-words text-sm">{section.title}</span>
                </div>
                <FaChevronDown className="absolute ml-56 self-end transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub className="m-0 p-0 mt-5 border-l-0 w-full">
                {section.lessons.map((lesson) => {
                  lessonCounter += 1;
                  const isCurrentLesson =
                    location.pathname === `/course/${courseId}/lesson/${lesson._id}/overview`;

                  return (
                    <SidebarMenuSubItem
                      className={
                        isCurrentLesson
                          ? "bg-slate-400 h-full w-full"
                          : "hover:bg-slate-400 h-full w-full"
                      }
                      key={lesson._id}
                    >
                      <div className="flex items-center justify-between group w-full">
                        <SidebarMenuSubButton asChild>
                          <div className="flex items-center h-full">
                            <Checkbox
                              checked={!!completedLessons[lesson._id]}
                              onCheckedChange={() =>
                                toggleLessonCompletion(lesson._id, !!completedLessons[lesson._id])
                              }
                              className="focus:outline-none focus-visible:outline-none hover:border-black border-2 self-start mt-1 rounded-none"
                            />
                            <div className="flex flex-col">
                              <Link to={`/course/${courseId}/lesson/${lesson._id}/overview`}>
                                <span className="">
                                  {lessonCounter}. {lesson.title}
                                </span>
                                <span className="flex text-xs text-black items-center hover:text-black">
                                  <MdOndemandVideo className="text" />
                                  <span className="text-sm"> {lesson.duration} min </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </SidebarMenuSubButton>
                      </div>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  );
}
