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
      {sections.map((section) => (
        <Collapsible key={section.id} defaultOpen className="group/collapsible">
          <SidebarMenuItem>
            {/* Collapsible Trigger for the main section */}
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                <span>{section.title}</span>
                <FaChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            {/* Collapsible Content for lessons */}
            <CollapsibleContent>
              <SidebarMenuSub>
                {section.lessons.map((lesson) => (
                  <SidebarMenuSubItem key={lesson.id}>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={!!completedLessons[lesson.id]}
                        onCheckedChange={() => toggleLessonCompletion(lesson.id)}
                      />
                      <SidebarMenuSubButton asChild>
                        <Link
                          to={`/lesson/${lesson.id}`}
                          className={`hover:underline ${
                            completedLessons[lesson.id] ? "line-through text-gray-500" : "text-blue-500"
                          }`}
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
