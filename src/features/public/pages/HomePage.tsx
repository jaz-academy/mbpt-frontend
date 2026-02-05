import { Link } from "react-router-dom";
import { useIntro } from "../hooks";
import { useApp } from "../../../app/hook";
import HomeHero from "../../../components/HomeHero";
import HomeCardIcon from "../../../components/HomeCardIcon";
import HomeCardAbout from "../../../components/HomeCardAbout";
import {
  EyeIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const { audience, language } = useApp();
  const { data, isLoading, isError } = useIntro({
    segment: audience,
    locale: language,
  });

  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
      </div>
    );

  if (isError || !data?.data)
    return (
      <div className="text-center font-semibold m-8">Result not found</div>
    );

  const content = data.data.content as {
    heroTitle?: string;
    heroDesc?: string;
    heroBtn?: string;
    v1?: string;
    v2?: string;
    v3?: string;
    v4?: string;
    ctaTitle?: string;
    ctaDesc?: string;
    ctaBtn?: string;
    ab1?: string;
    ab2?: string;
    ab3?: string;
  };

  return (
    <>
      {/* <!-- HERO --> */}
      <HomeHero
        heroTitle={content.heroTitle}
        heroDesc={content.heroDesc}
        heroBtn={content.heroBtn}
      />

      {/* <!-- VALUE SECTION --> */}
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <h2 className="text-2xl font-bold text-center mb-10" id="valueTitle">
          {language === "id" ? "Empat Motivasi Manusia" : "The Four Fuel Types"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <HomeCardIcon
            icon={EyeIcon}
            label="Vision"
            segment={audience}
            description={content.v1 ?? ""}
          />
          <HomeCardIcon
            icon={CheckBadgeIcon}
            label="Meaning"
            segment={audience}
            description={content.v2 ?? ""}
          />
          <HomeCardIcon
            icon={ExclamationTriangleIcon}
            label="Fear"
            segment={audience}
            description={content.v3 ?? ""}
          />
          <HomeCardIcon
            icon={GiftIcon}
            label="Validation"
            segment={audience}
            description={content.v4 ?? ""}
          />
        </div>
      </section>

      {/* <!-- CTA --> */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="rounded-3xl p-12 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4" id="ctaTitle">
            {content.ctaTitle ?? ""}
          </h2>
          <p
            className="text-md md:text-xl max-w-2xl mx-auto opacity-90 mb-8"
            id="ctaDesc"
          >
            {content.ctaDesc ?? ""}
          </p>
          <Link to="/about">
            <button
              className="cursor-pointer bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold transition-transform duration-700 ease-in-out scale-100 hover:scale-110"
              id="ctaBtn"
            >
              {content.ctaBtn ?? ""}
            </button>
          </Link>
        </div>
      </section>

      {/* <!-- VALUE ABOUT --> */}
      <section className="max-w-6xl mx-auto px-4 py-10" id="about">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          <HomeCardAbout title="MBPT Project" description={content.ab1 ?? ""} />
          <HomeCardAbout
            title="Four Fuel Types"
            description={content.ab2 ?? ""}
          />
          <HomeCardAbout
            title="Personality Test"
            description={content.ab3 ?? ""}
          />
        </div>
      </section>
    </>
  );
}
