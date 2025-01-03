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
  import { Link } from "react-router-dom";
  import { FaChevronDown } from "react-icons/fa";

  interface Lesson {
    id: string;
    title: string;
    videoUrl: string;
  }
  
  interface Section {
    id: string;
    title: string;
    lessons: Lesson[];
  }
  
  export function CourseSidebarMenu({ sections }: { sections: Section[] }) {
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
                      <SidebarMenuSubButton asChild>
                        <Link
                          to={`/lesson/${lesson.id}`}
                          className="text-blue-500 hover:underline"
                        >
                          {lesson.title}
                        </Link>
                      </SidebarMenuSubButton>
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
  