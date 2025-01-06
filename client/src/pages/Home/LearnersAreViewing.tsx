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
      <h2 className="text-3xl font-bold mb-6">Learners are viewing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900 truncate">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 truncate">
                {course.instructor}
              </p>
              <div className="flex items-center text-yellow-500 text-sm mt-2">
                <span>{course.rating}</span>
                <span className="text-gray-500 ml-1">
                  ({course.reviews.toLocaleString()})
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <div>
                  <span className="font-bold text-gray-900">
                    {course.price}
                  </span>
                  {course.oldPrice && (
                    <span className="line-through text-gray-500 text-sm ml-2">
                      {course.oldPrice}
                    </span>
                  )}
                </div>
                {course.bestSeller && (
                  <span className="text-sm bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
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
