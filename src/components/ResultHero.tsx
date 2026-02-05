import adultFearImg from "@/assets/img/adult-fear.png";

type ResultHeroProps = {
  label: string;
  dominan: string;
  insight: string;
};

export default function ResultHero({
  label,
  dominan,
  insight,
}: ResultHeroProps) {
  const dominans = dominan.split("+");

  return (
    <section className="max-w-6xl mx-auto px-4 py-6 transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
      <div className="items-center justify-center flex md:hidden">
        <img
          src={adultFearImg}
          className="h-80 w-full object-cover object-top heroImage"
          alt=""
        />
      </div>
      <div className="h-72 overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div className="text-center md:text-left md:ml-6 px-4">
          <h3 className="text-4xl font-bold mb-4">{label}</h3>
          <h3 className="text-white text-xl font-semibold" id="title">
            <div className="flex justify-center md:justify-start gap-2">
              {dominans.map((dominan) => (
                <span className="px-3 py-1 rounded-2xl text-md font-semibold bg-pink-400 text-indigo-600 font-bold">
                  {dominan}
                </span>
              ))}
            </div>
          </h3>
          <p
            className="text-gray-200 mt-4 text-lg md:text-md xl:text-xl"
            id="intro"
          >
            {insight}
          </p>
        </div>
        <div className="items-center justify-center hidden md:flex">
          <img
            src={adultFearImg}
            className="h-60 w-full object-cover object-top heroImage"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
