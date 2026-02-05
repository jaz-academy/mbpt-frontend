import { Link } from "react-router-dom";
import adultImg from "@/assets/img/adults.png";
import kidsImg from "@/assets/img/kids.png";
import { useApp } from "../app/hook";

type HomeHeroContent = {
  heroTitle?: string;
  heroDesc?: string;
  heroBtn?: string;
};

export default function HomeHero({
  heroTitle,
  heroDesc,
  heroBtn,
}: HomeHeroContent) {
  const { audience } = useApp();
  const title = heroTitle ?? "Kenali Diri, Bangun Arah";
  const desc =
    heroDesc ??
    "MBPT membantu individu dan pendidik memahami dorongan utama manusia secara mendalam.";
  const btn = heroBtn ?? "Mulai Tes";

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1
          className="text-3xl xl:text-4xl font-bold mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-md xl:text-xl text-gray-600 dark:text-gray-400 mb-8"
          id="heroDesc"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <Link to="/test">
          <button
            className={`cursor-pointer text-white px-6 py-3 rounded-xl transition-transform duration-700 ease-in-out scale-100 hover:scale-110 ${audience === "kids" ? "bg-pink-500" : "bg-indigo-600"}`}
            id="heroBtn"
          >
            {btn}
          </button>
        </Link>
      </div>
      <div className="h-72 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
        <img
          src={audience === "kids" ? kidsImg : adultImg}
          id="heroImage"
          className="w-full h-full object-cover animate-[smoothZoom_16s_ease-in-out_infinite]"
          alt=""
        />
      </div>
    </section>
  );
}
