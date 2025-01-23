import React from "react";
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
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchCourseProgress,
  updateLessonProgress,
} from "@/services/ProgressService";
import { CourseProgressResponse, LessonProgressPayload } from "@/types";
import CustomTrigger from "../Lesson/CustomTrigger";

export function CourseSidebarMenu({ courseId }: { courseId: string }) {
  const { toggleSidebar, open } = useSidebar();
  const location = useLocation();
  const queryClient = useQueryClient();

  // React Query: Fetch course progress
  const { data, isLoading, isError, error } = useQuery<CourseProgressResponse>({
    queryKey: ["courseProgress", courseId],
    queryFn: () => fetchCourseProgress(courseId),
    enabled: !!courseId,
  });

  // Mutation for updating lesson progress with optimistic updates
  const mutation = useMutation({
    mutationFn: ({
      lessonId,
      payload,
    }: {
      lessonId: string;
      payload: LessonProgressPayload;
    }) => updateLessonProgress(courseId, lessonId, payload),
    onMutate: async ({ lessonId, payload }) => {
      // Cancel ongoing queries
      await queryClient.cancelQueries(["courseProgress", courseId]);

      // Snapshot previous state
      const previousData = queryClient.getQueryData<CourseProgressResponse>([
        "courseProgress",
        courseId,
      ]);

      // Optimistically update the UI
      if (previousData) {
        queryClient.setQueryData<CourseProgressResponse>(
          ["courseProgress", courseId],
          {
            ...previousData,
            progress: {
              ...previousData.progress,
              sections: previousData.progress.sections.map((section) => ({
                ...section,
                lessons: section.lessons.map((lesson) =>
                  lesson.lessonId._id === lessonId
                    ? { ...lesson, completed: payload.completed }
                    : lesson
                ),
              })),
            },
          }
        );
      }

      return { previousData };
    },
    onError: (err, variables, context) => {
      // Rollback the UI if the mutation fails
      if (context?.previousData) {
        queryClient.setQueryData<CourseProgressResponse>(
          ["courseProgress", courseId],
          context.previousData
        );
      }
    },
    onSettled: () => {
      // Refetch data to ensure consistency
      queryClient.invalidateQueries(["courseProgress", courseId]);
    },
  });

  // Toggle lesson completion
  const toggleLessonCompletion = (lessonId: string, currentState: boolean) => {
    mutation.mutate({
      lessonId,
      payload: { completed: !currentState },
    });
  };

  if (isLoading) return <div>Loading course content...</div>;
  if (isError && error instanceof Error)
    return <div>Error: {error.message}</div>;

  let lessonCounter = 0;

  return (
    <SidebarMenu className="gap-0 overflow-hidden">
      <div className="flex p-4 items-center justify-between border-b font-semibold">
        <span className="text-lg">Course content</span>
        {open && (
          <div className="pl-6 size">
            <CustomTrigger
              open={open}
              toggleSidebar={toggleSidebar}
              position="insideSidebar"
            />
          </div>
        )}
      </div>
      {data?.progress.sections.map((section) => (
        <Collapsible
          key={section.sectionId._id}
          className="group/collapsible py-4 border-b flex w-full"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger
              asChild
              className="overflow-visible font-bold focus:outline-none gap-0 pl-0 focus-visible:outline-none rounded-none"
            >
              <SidebarMenuButton className="overflow-visible focus:outline-none flex items-start justify-between pl-2 focus-visible:outline-none rounded-none">
                <div className="flex-1">
                  <span className="whitespace-normal pr-4 break-words text-sm">
                    {section.sectionId.title}
                  </span>
                </div>
                <FaChevronDown className="absolute ml-56 self-end transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub className="m-0 p-0 mt-5 border-l-0 w-full">
                {section.lessons.map((lesson) => {
                  lessonCounter += 1;
                  const isCurrentLesson =
                    location.pathname ===
                    `/course/${courseId}/lesson/${lesson.lessonId._id}/overview`;

                  return (
                    <SidebarMenuSubItem
                      className={
                        isCurrentLesson
                          ? "bg-slate-400 h-full w-full"
                          : "hover:bg-slate-400 h-full w-full"
                      }
                      key={lesson.lessonId._id}
                    >
                      <div className="flex items-center justify-between group w-full">
                        <SidebarMenuSubButton asChild>
                          <div className="flex items-center h-full">
                            <Checkbox
                              checked={lesson.completed}
                              onCheckedChange={() =>
                                toggleLessonCompletion(
                                  lesson.lessonId._id,
                                  lesson.completed
                                )
                              }
                              className="focus:outline-none focus-visible:outline-none hover:border-black border-2 self-start mt-1 rounded-none"
                            />
                            <div className="flex flex-col">
                              <Link
                                to={`/course/${courseId}/lesson/${lesson.lessonId._id}`}
                                className="flex-col ml-2"
                              >
                                <span className="">
                                  {lessonCounter}. {lesson.lessonId.title}
                                </span>
                                <span className="flex text-xs text-black items-center hover:text-black">
                                  <MdOndemandVideo className="text" />
                                  <span className="text-sm">
                                    {lesson.lessonId.duration} min
                                  </span>
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