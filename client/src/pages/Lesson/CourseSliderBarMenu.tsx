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

interface Lesson {
  _id: string;
  title: string;
  videoUrl: string;
  completed?: boolean; // Add completed property
}

interface Section {
  _id: string;
  title: string;
  lessons: Lesson[];
}

export function CourseSidebarMenu({ sections }: { sections: Section[] }) {
  const { toggleSidebar, open } = useSidebar();

  // State to track completed lessons
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  return ( 
    <SidebarMenu className="gap-0">
       <div className="flex items-center space-between border-b-2 font-semibold">
       <span className="text-sm "> Course content</span>
      {open && (
            <div className="p-4 size">
              <CustomTrigger open={open} toggleSidebar={toggleSidebar} position="insideSidebar" />
            </div>
          )}
      </div>
      {sections.map((section) => (
        <Collapsible key={section._id} defaultOpen className="group/collapsible">
          <SidebarMenuItem className="">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="bg-[#F7F9FA] font-bold focus:outline-none gap-0 focus-visible:outline-none border-b-2 rounded-none hover:border-y-inherit  ">
                <span >{section.title}</span>
                <FaChevronDown className=" ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            {/* Collapsible Content for lessons */}
            <CollapsibleContent>
              <SidebarMenuSub>
                {section.lessons.map((lesson) => (
                  <SidebarMenuSubItem key={lesson._id}>
                    <div className="flex items-center py-2 text-s hover:bg-slate-400 gap-2">
                      <Checkbox
                        checked={!!completedLessons[lesson._id]}
                        onCheckedChange={() => toggleLessonCompletion(lesson._id)}
                        className="focus:outline-none focus-visible:outline-none  hover:border-black border-2 rounded-none"
                      />
                      <SidebarMenuSubButton asChild>
                        <Link
                          to={`/lesson/${lesson._id}`}
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
