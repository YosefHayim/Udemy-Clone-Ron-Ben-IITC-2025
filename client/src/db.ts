const course = {
  id: "course-1",
  title: "Introduction to Programming",
  sections: [
    {
      id: "section-1",
      title: "Getting Started",
      lessons: [
        {
          id: "lesson-1",
          title: "Welcome to Programming",
          videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          completed: false, // Boolean to track completion
          notes: [
            {
              time: 30,
              content: "Introduction to programming basics.",
            },
            {
              time: 120,
              content: "Explained the importance of problem-solving.",
            },
          ], // Array of notes with time and content
        },
        {
          id: "lesson-2",
          title: "Setting Up Your Environment",
          videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          completed: false,
          notes: [
            {
              time: 15,
              content: "Overview of development tools.",
            },
            {
              time: 90,
              content: "Installing and configuring the IDE.",
            },
          ],
        },
      ],
    },
    {
      id: "section-2",
      title: "Basics of Programming",
      lessons: [
        {
          id: "lesson-3",
          title: "Variables and Data Types",
          videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          completed: false,
          notes: [
            {
              time: 45,
              content: "Definition of variables and data types.",
            },
            {
              time: 150,
              content: "Examples of different data types.",
            },
          ],
        },
        {
          id: "lesson-4",
          title: "Control Structures",
          videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          completed: false,
          notes: [
            {
              time: 20,
              content: "Introduction to control structures.",
            },
            {
              time: 180,
              content: "Detailed explanation of loops.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
