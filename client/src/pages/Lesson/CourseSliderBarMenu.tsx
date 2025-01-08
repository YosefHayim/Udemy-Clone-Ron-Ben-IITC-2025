import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
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

interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  completed?: boolean; // Add completed property
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export function CourseSidebarMenu({ sections }: { sections: Section[] }) {
  // State to track completed lessons
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  return (
    <SidebarMenu>
      <span className="text-lg"> Course content</span>
      {sections.map((section) => (
        <Collapsible key={section.id} defaultOpen className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="bg-[#F7F9FA] focus:outline-none focus-visible:outline-none border-y rounded-none hover:border-y-inherit  ">
                <span >{section.title}</span>
                <FaChevronDown className=" ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            {/* Collapsible Content for lessons */}
            <CollapsibleContent>
              <SidebarMenuSub>
                {section.lessons.map((lesson) => (
                  <SidebarMenuSubItem key={lesson.id}>
                    <div className="flex items-center hover:bg-slate-400  gap-2">
                      <Checkbox
                        checked={!!completedLessons[lesson.id]}
                        onCheckedChange={() => toggleLessonCompletion(lesson.id)}
                        className="focus:outline-none focus-visible:outline-none"
                      />
                      <SidebarMenuSubButton asChild>
                        <Link
                          to={`/lesson/${lesson.id}`}
                          
          
                        >
                          {lesson.title}
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
