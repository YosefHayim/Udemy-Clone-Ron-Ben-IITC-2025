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
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import CustomTrigger from "./CustomTrigger";
import { MdOndemandVideo } from "react-icons/md";

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

  // State to track completed lessons
  const [completedLessons, setCompletedLessons] = useState<
    Record<string, boolean>
  >({});

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  return (
    <SidebarMenu className="gap-0 mt-[-20px]">
      <div className="flex items-center justify-between border-b font-semibold">
        <span className="text-sm">Course content</span>
        {open && (
          <div className="p-4 size">
            <CustomTrigger
              open={open}
              toggleSidebar={toggleSidebar}
              position="insideSidebar"
            />
          </div>
        )}
      </div>
      {sections.map((section) => (
        <Collapsible
          key={section._id}
          defaultOpen
          className="group/collapsible border-b flex p-4 items-center justify-between"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="overflow-visible font-bold focus:outline-none gap-0 pl-0 focus-visible:outline-none rounded-none">
                <span className="whitespace-normal break-words">
                  {section.title}
                </span>
                <FaChevronDown className="overflow-visible transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            {/* Collapsible Content for lessons */}
            <CollapsibleContent>
              <SidebarMenuSub className="m-0 p-0 mt-5 border-l-0 w-full">
                {section.lessons.map((lesson) => (
                  <SidebarMenuSubItem
                    className="hover:bg-slate-400 pt-4 h-full w-full"
                    key={lesson._id}
                  >
                    <div className="flex items-center justify-between text-s hover:bg-slate-400 w-full">
                      <Checkbox
                        checked={!!completedLessons[lesson._id]}
                        onCheckedChange={() =>
                          toggleLessonCompletion(lesson._id)
                        }
                        className="focus:outline-none focus-visible:outline-none hover:border-black border-2 rounded-none"
                      />
                      <SidebarMenuSubButton asChild>
                        <Link
                          to={`/course/${courseId}/lesson/${lesson._id}/overview`}
                        >
                          <MdOndemandVideo />. {lesson.duration}
                        </Link>
                      </SidebarMenuSubButton>
                    </div>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  );
}
