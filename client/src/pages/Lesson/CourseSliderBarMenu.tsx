import React, { useState } from "react";
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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCourseProgress, updateLessonProgress } from "@/services/ProgressService";
import CustomTrigger from "../Lesson/CustomTrigger";
import { CourseProgressResponse } from "@/types/types";

export function CourseSidebarMenu({ courseId }: { courseId: string }) {
  const [hover, setHover] = useState("gray-600");
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
    mutationFn: ({ lessonId, payload }: { lessonId: string; payload: {} }) =>
      updateLessonProgress(courseId, lessonId, payload),
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
        queryClient.setQueryData<CourseProgressResponse>(["courseProgress", courseId], {
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
        });
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
  if (isError && error instanceof Error) return <div>Error: {error.message}</div>;

  let lessonCounter = 0;

  return (
    <SidebarMenu className=" ">
      <div className="flex items-center  justify-between border-b-2  font-semibold"></div>
      {data?.progress.sections.map((section, index) => (
        <Collapsible
          key={section.sectionId._id}
          className="group/collapsible  w-full border-2  border-t-0 bg-[#F6F7F9] pt-10 group-open:pb-0   group-data-[state=open]/collapsible:pb-0"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger
              asChild
              className=" gap-0 rounded-none pl-0 focus:outline-none focus-visible:outline-none"
            >
              <SidebarMenuButton className="flex  items-center justify-between overflow-visible  rounded-none p-0 pl-2 focus:outline-none focus-visible:outline-none">
                <div className=" flex w-full flex-col ">
                  <div className="flex  items-center break-words font-sans text-lg font-extrabold text-courseNameColorTxt">
                    <span>
                      Section {index + 1}: {section.sectionId.title}
                    </span>
                    <FaChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </div>
                  <p className="mb-10 text-xs font-semibold text-courseNameColorTxt">
                    {section.completedLessonsInSection}/ {section.totalLessonsInSection} | 42min
                  </p>
                </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub className="m-0 mt-4 w-full border-l-0 bg-white p-0">
                {section.lessons.map((lesson) => {
                  lessonCounter += 1;
                  const isCurrentLesson = location.pathname.startsWith(
                    `/course/${courseId}/lesson/${lesson.lessonId._id}`
                  );

                  return (
                    <SidebarMenuSubItem
                      className={
                        isCurrentLesson
                          ? "h-full w-full bg-slate-400"
                          : "h-full  w-full hover:bg-slate-400"
                      }
                      key={lesson.lessonId._id}
                    >
                      <div className="  group w-full  overflow-visible ">
                        <SidebarMenuSubButton className="overflow-visible hover:bg-[#94A3B8]">
                          <div className="flex  h-full items-center">
                            <Checkbox
                              checked={lesson.completed}
                              onCheckedChange={() =>
                                toggleLessonCompletion(lesson.lessonId._id, lesson.completed)
                              }
                              className=" mt-0 self-start rounded-none border-2 hover:border-purple-500 focus:outline-none focus-visible:outline-none"
                            />
                            <div className="ml-2   flex flex-col ">
                              <Link
                                to={`/course/${courseId}/lesson/${lesson.lessonId._id}`}
                                className="  w-full"
                              >
                                <span>
                                  {lessonCounter}. {lesson.lessonId.title}
                                </span>
                                <span className="flex items-center  overflow-visible text-xs text-black hover:text-black">
                                  <MdOndemandVideo className=" text-gray-600" />
                                  <span className="relative text-xs  text-gray-600">
                                    {lesson.lessonId.duration}min
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
