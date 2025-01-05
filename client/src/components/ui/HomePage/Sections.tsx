import sectionIMG1 from "../../../assets/images/sectionIMG1.jpg";
import sectionIMG2 from "../../../assets/images/sectionIMG2.jpg";
import sectionIMG3 from "../../../assets/images/sectionIMG3.jpg";
import sectionIMG4 from "../../../assets/images/sectionIMG4.jpg";
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
        <div className="text-left my-8 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            All the skills you need in one place
          </h1>
          <p className="text-gray-600 mt-2 text-base">
            From critical skills to technical topics, Udemy supports your professional development.
          </p>
        </div>

        <section className="px-8 py-6">
          {/* Navegação de Categorias */}
          <div className="flex space-x-4 mb-6 overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 flex items-center space-x-2 rounded-full border ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm overflow-hidden bg-white"
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
                    <span className="text-gray-500 ml-1">({course.reviews})</span>
                  </div>
                  <div className="flex items-baseline justify-between mt-2">
                    <div>
                      <span className="font-bold text-gray-900">{course.price}</span>
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

          {/* Botão Mostrar Mais */}
          <div className="mt-6 text-left">
            <button className="px-6 py-3 bg-white border border-black rounded-lg font-bold text-black hover:bg-gray-100">
              Show all {activeCategory} courses
            </button>
          </div>
        </section>
      </div>
  );
};

export default Section;
