import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

interface Section {
  _id: string;
  title: string;
  lessons: Lesson[];
}

interface Lesson {
  _id: string;
  title: string;
  duration?: string;
}

interface CollapsibleSectionsProps {
  sections: Section[];
}

const CollapsibleSections: React.FC<CollapsibleSectionsProps> = ({ sections }) => {
  return (
    <div>
      {sections.map((section, idx) => (
        <Collapsible
          key={section._id}
          defaultOpen
          className="group/collapsible min-w-[800px] border-y"
        >
          <div className="flex items-center justify-between bg-bgCommercial p-4">
            <CollapsibleTrigger asChild>
              <button className="flex w-full items-center text-left focus:outline-none">
                <span className="text-lg font-medium">
                  Section {idx + 1}: {section.title}
                </span>
                <FaChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <ul className="mt-0 pl-4">
              {section.lessons.map((lesson, lessonIdx) => (
                <li
                  key={lesson._id}
                  className="mb-2 flex items-center gap-3 p-2 hover:bg-slate-400"
                >
                  <div className="flex flex-col">
                    <span>
                      {lessonIdx + 1}. {lesson.title}
                    </span>
                    {lesson.duration && (
                      <span className="flex items-center text-xs text-black">
                        <MdOndemandVideo />
                        <span>{`${lesson.duration} min`}</span>
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default CollapsibleSections;
