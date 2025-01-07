const course = {
  id: "677d2556ad47969e12bb35b6",
  title: "Mastering React",
  description: "A comprehensive course to learn React.js from beginner to advanced levels.",
  image: "https://img-c.udemycdn.com/course/480x270/883142_b67d_3.jpg",
  price: 199.99,
  category: "Development",
  subCategory: "Web Development",
  topic: "React",
  level: "Intermediate",
  language: "English",
  instructor: "677d0f13f6cc7b1a8a68558a",
  moneyBackGuarantee: "2025-01-01T00:00:00.000+00:00",
  averageRating: 4.5,
  totalRatings: 50,
  totalStudentsEnrolled: {
    count: 150,
    male: 90,
    female: 60,
  },
  isActive: true,
  reviews: [
    {
      reviewId: "r1",
      studentId: "s1",
      reviewDate: "2025-01-05T12:00:00.000+00:00",
      reviewText: "Great course! I learned a lot about React fundamentals.",
      rating: 4,
    },
    {
      reviewId: "r2",
      studentId: "s2",
      reviewDate: "2025-01-06T15:30:00.000+00:00",
      reviewText: "Good explanations but could use more practical examples.",
      rating: 3,
    },
    {
      reviewId: "r3",
      studentId: "s3",
      reviewDate: "2025-01-07T10:00:00.000+00:00",
      reviewText: "Excellent course for intermediate learners!",
      rating: 5,
    },
  ],
  sections: [
    {
      id: "section-1",
      title: "Getting Started",
      lessons: [
        {
          id: "lesson-1",
          title: "Welcome to React",
          videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          completed: false,
          notes: [
            {
              time: 30,
              content: "Introduction to React and its features.",
            },
            {
              time: 120,
              content: "Explained the benefits of using React.",
            },
          ],
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
              content: "Overview of development tools for React.",
            },
            {
              time: 90,
              content: "Installing Node.js and setting up the React environment.",
            },
          ],
        },
      ],
    },
    {
      id: "section-2",
      title: "React Basics",
      lessons: [
        {
          id: "lesson-3",
          title: "JSX and Components",
          videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          completed: false,
          notes: [
            {
              time: 45,
              content: "Introduction to JSX and component structure.",
            },
            {
              time: 150,
              content: "Examples of functional and class components.",
            },
          ],
        },
        {
          id: "lesson-4",
          title: "State and Props",
          videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          completed: false,
          notes: [
            {
              time: 20,
              content: "Understanding state and props in React.",
            },
            {
              time: 180,
              content: "Practical examples of state management.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
