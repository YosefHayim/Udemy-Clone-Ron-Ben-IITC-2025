import make2025YourYear from "/images/banner1.png";
import CertificationTheUltimate from "/images/banner2.png";
import LearningGetsYouBanner from "/images/banner3.jpg";
import skillsDriveYouBanner from "/images/banner4.jpg";
import thanksTryingFreeCourse from "/images/banner7.jpg";
import subscribeToTheBestOfUdemy from "/images/banner5.jpg";
import newsletterBanner from "/images/banner8.jpg";
import itCertification from "/images/banner.jpg";
import starYellowBanner from "/images/banner10.jpg";
import twentyFourHourSale from "/images/banner11.png";
import cravingSomeFlexibility from "/images/banner12.jpg";
import { Link } from "react-router-dom";

export const getBanners = ({
  coursesBoughtOrJoined = [],
  fullName,
  registerAt,
}: {
  coursesBoughtOrJoined?: string[];
  fullName?: string;
  registerAt?: Date;
}) => {
  const searchesOfUser = JSON.parse(localStorage.getItem("searchesOfUser") || "[]");

  const banners = [
    {
      src: CertificationTheUltimate,
      content: () => (
        <div className="absolute left-16 top-16 flex flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">Certifications - the ultimate career move</h1>
          <p className="pr-2 font-sans text-sm">
            Prepare for certification exams in COMPTIA, AWS, Cloud, and so much more — on sale now.
          </p>
        </div>
      ),
    },
    {
      src: make2025YourYear,
      content: () => (
        <div className="absolute left-16 top-16 flex flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">Make 2025 the year of your career</h1>
          <p className="pr-2 font-sans text-sm">
            The skills you need are on sale from 39.90 | Sale ends January 10.
          </p>
        </div>
      ),
    },
    {
      src: LearningGetsYouBanner,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[400px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">Learning that gets you</h1>
          <p className="pr-2 font-sans text-base">
            Skills for your present (and your future). Get started with us.
          </p>
        </div>
      ),
    },
    {
      src: skillsDriveYouBanner,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[450px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">Skills that drive you forward</h1>
          <p className="w-[380px] pr-2 font-sans text-sm">
            Technology and the world of work change fast — with us, you’re faster. Get the skills to
            achieve goals and stay competitive.
          </p>
          <div className="flex w-[370px] items-center justify-center gap-2">
            <button className="w-full rounded-[0.3em] bg-btnColor px-0 py-3 font-sans font-extrabold text-white hover:bg-btnHoverColor focus:outline-none">
              Plan for individuals
            </button>
            <button className="w-full rounded-[0.3em] border border-purple-800 px-2 py-3 font-sans font-extrabold text-purple-800 hover:bg-purple-100 focus:outline-none">
              Plan for organizations
            </button>
          </div>
        </div>
      ),
    },
    {
      src: newsletterBanner,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[450px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">Benefit big-time</h1>
          <p className="w-5/6 pr-2 font-sans text-sm">
            <Link
              to="/user/edit-notification-preferences/"
              className="font-medium text-purple-800 underline"
            >
              Join our email list
            </Link>{" "}
            for special offers, personalized course recommendations, and more.
          </p>
        </div>
      ),
    },
    {
      src: starYellowBanner,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[450px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">Every day a little closer</h1>
          <p className="w-5/6 pr-2 font-sans text-sm">
            Learning helps you reach your goals.
            <Link to="/wishlist" className="font-medium text-purple-800 underline">
              Keep learning
            </Link>
            and reap the rewards.
          </p>
        </div>
      ),
    },
    {
      src: twentyFourHourSale,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[450px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">24-Hour Flash Sale</h1>
          <p className="w-5/6 pr-2 font-sans text-sm">
            Learn from real-world experts for as low as ₪49.90 Sale ends tonight!
          </p>
        </div>
      ),
    },
    {
      src: cravingSomeFlexibility,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[450px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-[300px] font-extrabold">Craving some flexibility?</h1>
          <div className="flex w-5/6 flex-col items-start justify-start gap-2 pr-2 font-sans text-sm">
            <p>Explore thousands of highly-rated courses with Personal Plan.</p>
            <button className="w-min-max rounded-[0.3em] bg-btnColor  px-2 py-2 font-sans font-extrabold text-white hover:bg-btnHoverColor focus:outline-none">
              Start free week
            </button>
          </div>
        </div>
      ),
    },
  ];

  if (coursesBoughtOrJoined.length > 1) {
    banners.push({
      src: thanksTryingFreeCourse,
      content: () => (
        <div className="absolute left-16 top-16 flex flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">{fullName}, thanks for trying a free course</h1>
          <p className="pr-2 font-sans text-sm">
            Now, unlock our best features with courses as low as ₪49.90 — limited time only.
          </p>
        </div>
      ),
    });
  }

  if (searchesOfUser.includes("it") || searchesOfUser.includes("certification")) {
    banners.push({
      src: itCertification,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[450px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-start  text-black shadow-alertAlgoInfo">
          <h1 className="text-4xl font-extrabold">Prep for your IT certificate</h1>
          <p className="w-5/6 pr-2 font-sans text-sm">
            <Link to="/courses/search?q=it+certifications&page=1&limit=20">
              Explore a future in IT.
            </Link>
            Start learning toward AWS certification, CompTIA A+ certification, and more.
          </p>
        </div>
      ),
    });
  }

  const isWithin14Days =
    registerAt &&
    (new Date().getTime() - new Date(registerAt).getTime()) / (1000 * 60 * 60 * 24) <= 14;

  if (isWithin14Days) {
    banners.push({
      src: subscribeToTheBestOfUdemy,
      content: () => (
        <div className="absolute left-16 top-16 flex w-[450px] flex-col items-start gap-3 rounded-sm border-gray-100 bg-white px-5 py-7 text-black shadow-alertAlgoInfo">
          <h1 className="w-full font-extrabold">Subscribe to the best of Udemy</h1>
          <p className="w-[360px] pr-2 font-sans text-sm">
            With Personal Plan, you get access to 11,000+ of our top-rated courses in tech,
            business, and more.
          </p>
          <div>
            <button className="w-full rounded-[0.3em] bg-btnColor px-3 py-2 font-sans font-extrabold text-white hover:bg-btnHoverColor focus:outline-none">
              Try it free
            </button>
          </div>
        </div>
      ),
    });
  }

  return banners;
};
