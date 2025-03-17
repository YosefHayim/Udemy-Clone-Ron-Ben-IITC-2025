import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaChevronDown } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  fetchCourseProgress,
  updateLessonProgress,
} from "../../../services/ProgressService";
import { CourseProgressResponse, LessonProgressPayload } from "@/types/types";

const CourseContent: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();
  const queryClient = useQueryClient();

  const sanitizedCourseId = courseId?.trim();

  // React Query: Fetch course progress
  const { data, isLoading, isError, error } = useQuery<
    CourseProgressResponse | undefined
  >({
    queryKey: ["courseProgress", courseId],
    queryFn: () => fetchCourseProgress(courseId),
    enabled: !!courseId,
  });

  // Mutation with optimistic updates
  const mutation = useMutation({
    mutationFn: ({
      lessonId,
      payload,
    }: {
      lessonId: string;
      payload: LessonProgressPayload;
    }) => updateLessonProgress(sanitizedCourseId!, lessonId, payload),
    onMutate: async ({ lessonId, payload }) => {
      await queryClient.cancelQueries(["courseProgress", sanitizedCourseId]);

      const previousData = queryClient.getQueryData<CourseProgressResponse>([
        "courseProgress",
        sanitizedCourseId,
      ]);

      if (previousData) {
        queryClient.setQueryData<CourseProgressResponse>(
          ["courseProgress", sanitizedCourseId],
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
      if (context?.previousData) {
        queryClient.setQueryData<CourseProgressResponse>(
          ["courseProgress", sanitizedCourseId],
          context.previousData
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["courseProgress", sanitizedCourseId]);
    },
  });

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
    <div className="flex justify-center py-10 min-h-screen">
      <div>
        {data?.progress.sections.map((section, idx) => (
          <Collapsible
            key={section.sectionId._id}
            defaultOpen
            className="min-w-[800px] border-y group/collapsible"
          >
            <div className="flex items-center justify-between p-4 bg-bgCommercial">
              <CollapsibleTrigger asChild>
                <button className="focus:outline-none flex items-center w-full text-left focus:outline-none focus-visible:outline-none">
                  <span className="text-lg font-medium">
                    Section {idx + 1}: {section.sectionId.title}
                  </span>
                  <FaChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <ul className="mt-2 pl-4">
                {section.lessons.map((lesson) => {
                  const isCurrentLesson =
                    location.pathname ===
                      `/course/${sanitizedCourseId}/lesson/${lesson.lessonId._id}/course-content` ||
                    location.pathname ===
                      `/course/${sanitizedCourseId}/lesson/${lesson.lessonId._id}`;

                  lessonCounter += 1;

                  return (
                    <li
                      key={lesson.lessonId._id}
                      className={`flex items-center gap-3 mb-2 p-2 ${
                        isCurrentLesson ? "bg-slate-400 " : "hover:bg-slate-400"
                      }`}
                    >
                      <Checkbox
                        checked={lesson.completed}
                        onCheckedChange={() =>
                          toggleLessonCompletion(
                            lesson.lessonId._id,
                            lesson.completed
                          )
                        }
                        className={`hover:border-black focus:outline-none ${
                          isCurrentLesson ? "border-white" : ""
                        }`}
                      />
                      <div className="flex flex-col">
                        <Link
                          to={`/course/${sanitizedCourseId}/lesson/${lesson.lessonId._id}`}
                          state={{ courseId: sanitizedCourseId }}
                          className="flex-col ml-2"
                        >
                          <span>
                            {lessonCounter}. {lesson.lessonId.title}
                          </span>
                          <span
                            className={`flex items-center text-xs ${
                              isCurrentLesson ? "text-white" : "text-black"
                            }`}
                          >
                            <MdOndemandVideo />
                            <span>
                              {lesson.lessonId.duration
                                ? `${lesson.lessonId.duration} min`
                                : ""}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
