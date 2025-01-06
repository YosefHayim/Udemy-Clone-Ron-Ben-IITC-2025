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
      <h2 className="text-3xl font-bold mb-6">
        Because you searched for <span className="text-blue-500">"js"</span>
      </h2>
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

export default SearchResult;
