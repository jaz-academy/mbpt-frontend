type QuestionCardProps = {
  language: string;
  question: string;
  onAnswer: (value: number) => void;
};

export default function QuestionCard({
  language,
  question,
  onAnswer,
}: QuestionCardProps) {
  const scale = [1, 2, 3, 4, 5];

  return (
    <section className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow">
      {/* <!-- Question --> */}
      <div className="mb-6 text-center">
        <h2
          className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-3"
          id="question"
        >
          {question}
        </h2>
      </div>

      {/* <!-- Slider --> */}
      <div className="flex items-center justify-center md:justify-between max-w-xl my-8">
        <span className="text-sm text-indigo-500 hidden md:block">
          {language === "id" ? "Tidak Setuju" : "Not Agree"}
        </span>

        <div className="flex items-center gap-4">
          {scale.map((value) => (
            <button
              key={value}
              onClick={() => onAnswer(value)}
              className="dot cursor-pointer"
            >
              {value}
            </button>
          ))}
        </div>

        <span className="text-sm text-indigo-500 text-right hidden md:block">
          {language === "id" ? "Setuju" : "Agree"}
        </span>
      </div>
      <div className="text-center">
        <p className="text-slate-400 dark:text-gray-600 text-sm" id="hint">
          {language === "id"
            ? "Pilih skala 1 s.d. 5 yang paling sesuai dengan pernyataan."
            : "Choose a scale from 1 to 5 that best fits the statement."}
        </p>
      </div>
    </section>
  );
}
