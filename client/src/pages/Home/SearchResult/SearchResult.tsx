import jsCourse1 from "/images/js1.jpg";
import jsCourse2 from "/images/js2.jpg";
import jsCourse3 from "/images/js3.jpg";
import jsCourse4 from "/images/js4.jpg";

const courses = [
  {
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviews: 217830,
    price: "₪79.90",
    oldPrice: "₪619.90",
    bestSeller: true,
    image: jsCourse1,
  },
  {
    title: "Complete JAVASCRIPT with HTML5, CSS3 from zero to Expert",
    instructor: "Hemanth Kumar",
    rating: 4.3,
    reviews: 5377,
    price: "₪39.90",
    oldPrice: "₪179.90",
    bestSeller: false,
    image: jsCourse2,
  },
  {
    title: "JavaScript for Beginners - The Complete introduction to JS",
    instructor: "Yassin Marco MBA",
    rating: 4.6,
    reviews: 2541,
    price: "₪39.90",
    oldPrice: "₪79.90",
    bestSeller: false,
    image: jsCourse3,
  },
  {
    title: "JavaScript: Understanding the Weird Parts (2024 Edition)",
    instructor: "Anthony Alicea",
    rating: 4.8,
    reviews: 48598,
    price: "₪49.90",
    oldPrice: "₪369.90",
    bestSeller: false,
    image: jsCourse4,
  },
];

const SearchResult = () => {
  return (
    <section className="px-6 py-8">
      <h2 className="mb-6 text-3xl font-bold">
        Because you searched for <span className="text-blue-500">"js"</span>
      </h2>
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

export default SearchResult;
