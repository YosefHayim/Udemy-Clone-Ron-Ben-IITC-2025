import pythonImg from "/images/learner1.jpg";
import webDevImg from "/images/learner2.jpg";
import awsPractitionerImg from "/images/learner3.jpg";
import awsArchitectImg from "/images/learner4.jpg";

const courses = [
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    rating: 4.7,
    reviews: 343169,
    price: "₪49.90",
    oldPrice: "₪419.90",
    bestSeller: true,
    image: pythonImg,
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    rating: 4.7,
    reviews: 418422,
    price: "₪39.90",
    oldPrice: "₪319.90",
    bestSeller: true,
    image: webDevImg,
  },
  {
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
    instructor: "Stephane Maarek | AWS Certified Cloud Practitioner",
    rating: 4.7,
    reviews: 231914,
    price: "₪69.90",
    oldPrice: "₪519.90",
    bestSeller: true,
    image: awsPractitionerImg,
  },
  {
    title: "Ultimate AWS Certified Solutions Architect Associate 2025",
    instructor: "Stephane Maarek | AWS Certified Cloud Practitioner",
    rating: 4.7,
    reviews: 244647,
    price: "₪69.90",
    oldPrice: "₪519.90",
    bestSeller: true,
    image: awsArchitectImg,
  },
];

const LearnersAreViewing = () => {
  return (
    <section className="px-6 py-8">
      <h2 className="mb-6 text-3xl font-bold">Learners are viewing</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border bg-white shadow-sm"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="truncate text-lg font-bold text-gray-900">
                {course.title}
              </h3>
              <p className="truncate text-sm text-gray-600">
                {course.instructor}
              </p>
              <div className="mt-2 flex items-center text-sm text-yellow-500">
                <span>{course.rating}</span>
                <span className="ml-1 text-gray-500">({course.reviews})</span>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <div>
                  <span className="font-bold text-gray-900">
                    {course.price}
                  </span>
                  {course.oldPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      {course.oldPrice}
                    </span>
                  )}
                </div>
                {course.bestSeller && (
                  <span className="rounded-full bg-yellow-200 px-2 py-1 text-sm text-yellow-800">
                    Bestseller
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnersAreViewing;
