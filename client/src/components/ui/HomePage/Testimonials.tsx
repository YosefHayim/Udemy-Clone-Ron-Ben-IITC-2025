import stack from '../../../assets/images/logo_stack.svg';
import alvin from '../../../assets/images/Alvin_Lim.jpeg';
import ian from '../../../assets/images/Ian_Stevens.png';
import william from '../../../assets/images/William_A_Wachlin.jpeg';
import quoteIcon from '../../../assets/images/quote.svg'; // Imagem das aspas

const testimonials = [
  {
    quote:
      "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow's 2023 Developer survey.",
    author: "StackOverflow",
    details: "37,076 responses collected",
    linkText: "View Web Development courses →",
    link: "#",
    placeholderIcon: stack,
  },
  {
    quote:
      "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
    author: "Alvin Lim",
    details: "Technical Co-Founder, CTO at Dimensional",
    linkText: "View this iOS & Swift course →",
    link: "#",
    placeholderIcon: alvin,
  },
  {
    quote:
      "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
    author: "William A. Wachlin",
    details: "Partner Account Manager at Amazon Web Services",
    linkText: "View this AWS course →",
    link: "#",
    placeholderIcon: william,
  },
  {
    quote:
      "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
    author: "Ian Stevens",
    details: "Head of Capability Development, North America at Publicis Sapient",
    linkText: "Read full story →",
    link: "#",
    placeholderIcon: ian,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        See what others are achieving through learning
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-6 bg-white text-left"
          >
            {/* Aspas como imagem */}
            <div className="mb-4">
              <img
                src={quoteIcon}
                alt="Quote"
                className="w-6 h-6"
              />
            </div>
            {/* Texto do depoimento */}
            <p className="text-gray-900 mb-4">
              {testimonial.quote}
            </p>
            {/* Logo ou autor */}
            <div className="flex items-center mt-4">
              <img
                src={testimonial.placeholderIcon}
                alt={testimonial.author}
                className="w-8 h-8 object-contain mr-4"
              />
              <div>
                <h3 className="font-bold text-gray-900">{testimonial.author}</h3>
                <p className="text-sm text-gray-600">{testimonial.details}</p>
              </div>
            </div>
            {/* Link de ação */}
            <a
              href={testimonial.link}
              className="text-purple-600 font-bold mt-4 inline-block hover:underline"
            >
              {testimonial.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
