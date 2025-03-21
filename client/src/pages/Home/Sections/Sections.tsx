import sectionIMG1 from "/images/sectionIMG1.jpg";
import sectionIMG2 from "/images/sectionIMG2.jpg";
import sectionIMG3 from "/images/sectionIMG3.jpg";
import sectionIMG4 from "/images/sectionIMG4.jpg";
import { useState } from "react";

const categories = [
  { name: "ChatGPT", learners: "3M+ learners" },
  { name: "Data Science", learners: "7M+ learners" },
  { name: "Python", learners: "46.6M+ learners" },
  { name: "Machine Learning", learners: "8M+ learners" },
  { name: "Deep Learning", learners: "2M+ learners" },
  { name: "Artificial Intelligence (AI)", learners: "3M+ learners" },
  { name: "Statistics", learners: "1M+ learners" },
  { name: "Natural Language Processing", learners: "794K+ learners" },
];

const courses = [
  {
    title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
    instructor: "Julian Melanson, Benza Maman",
    rating: 4.5,
    reviews: 42512,
    price: "₪49.90",
    oldPrice: "₪369.90",
    bestSeller: true,
    image: sectionIMG1,
  },
  {
    title: "The Complete AI-Powered Copywriting Course & ChatGPT",
    instructor: "Ing. Tomas Moravek",
    rating: 4.5,
    reviews: 1706,
    price: "₪39.90",
    oldPrice: "₪269.90",
    bestSeller: false,
    image: sectionIMG2,
  },
  {
    title: "ChatGPT & MidJourney & Gemini: Digital Marketing Assistants",
    instructor: "Anton Voroniuk",
    rating: 4.5,
    reviews: 446,
    price: "₪49.90",
    oldPrice: "₪199.90",
    bestSeller: false,
    image: sectionIMG3,
  },
  {
    title: "ChatGPT Master: Complete OpenAI ChatGPT Course",
    instructor: "Faisal Zamir",
    rating: 4.3,
    reviews: 413,
    price: "₪49.90",
    oldPrice: "₪89.90",
    bestSeller: false,
    image: sectionIMG4,
  },
];

const Section = () => {
  const [activeCategory, setActiveCategory] = useState("ChatGPT");

  return (
    <div>
      {/* Learning Section */}
      <div className="my-8 px-4 text-left">
        <h1 className="text-3xl font-bold text-gray-900">
          All the skills you need in one place
        </h1>
        <p className="mb-[2.5em] mt-2 text-base text-gray-600">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
        <hr />
      </div>

      <section className="px-8 py-6">
        {/* Navegação de Categorias */}
        <div className="mb-6 flex space-x-4 overflow-x-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center space-x-2 rounded-full border px-4 py-2 ${
                activeCategory === category.name
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span>{category.name}</span>
              <span className="text-sm text-gray-500">{category.learners}</span>
            </button>
          ))}
        </div>

        {/* Lista de Cursos */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        {/* Botão Mostrar Mais */}
        <div className="mt-6 text-left">
          <button className="rounded-lg border border-black bg-white px-6 py-3 font-bold text-black hover:bg-gray-100 focus:outline-none">
            Show all {activeCategory} courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section;
