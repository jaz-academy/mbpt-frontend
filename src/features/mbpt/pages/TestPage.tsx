import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../../../components/TestQuestionCard";
import ProgressBar from "../../../components/TestProgressBar";
import adultImg from "@/assets/img/adults.png";
import kidsImg from "@/assets/img/kids.png";
import { useApp } from "../../../app/hook";
import { useCreateResult, useQuestions } from "../hooks";
import { sendResult } from "../api";
import type { Question } from "../types";

export default function Test() {
  const navigate = useNavigate();
  const { audience, language } = useApp();
  const { data, isLoading, isError } = useQuestions(audience, language);
  const { mutateAsync, isPending } = useCreateResult();

  const questions = useMemo<Question[]>(
    () => (data?.data as Question[]) ?? [],
    [data],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState<Record<string, number>>({
    vision: 0,
    meaning: 0,
    validation: 0,
    fear: 0,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formError, setFormError] = useState("");

  const total = questions.length;
  const isCompleted = total > 0 && currentIndex >= total;
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (scale: number, question: Question) => {
    const value = scale * question.weight;
    setAnswers((prev) => ({ ...prev, [question.id]: scale }));
    setScores((prev) => ({
      ...prev,
      [question.motivation]: (prev[question.motivation] ?? 0) + value,
    }));
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError("Nama, email, dan nomor HP wajib diisi.");
      return;
    }

    try {
      const response = await mutateAsync({
        answers,
        scores,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        segment: audience,
        locale: language,
      });
      const id = response?.data?.id;
      if (id) {
        await sendResult(id).catch((error) => {
          console.error(error);
        });
        navigate(`/result/${id}`);
      } else {
        setFormError("Gagal menyimpan hasil. Silakan coba lagi.");
      }
    } catch (error) {
      console.error(error);
      setFormError("Gagal menyimpan hasil. Silakan coba lagi.");
    }
  };

  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
      </div>
    );

  if (isError || total === 0)
    return <div className="text-center font-semibold m-8">Test not found</div>;

  return (
    <div className="text-slate-100 min-h-[80vh] flex items-center justify-center">
      <main className="w-full max-w-xl px-5">
        {!isCompleted ? (
          <>
            <div className="flex items-center justify-center">
              <img
                src={audience === "kids" ? kidsImg : adultImg}
                className="h-40 w-full object-cover"
                alt=""
                id="heroImage"
              />
            </div>
            <ProgressBar
              current={currentIndex + 1}
              total={total}
              language={language}
            />
            <QuestionCard
              language={language}
              key={currentQuestion.id}
              question={currentQuestion.text}
              onAnswer={(scale) => handleAnswer(scale, currentQuestion)}
            />
          </>
        ) : (
          <section className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow text-gray-700 dark:text-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-center text-indigo-600">
              {language === "id"
                ? "Isi data untuk melihat hasil"
                : "Fill in the data to see the result"}
            </h2>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm">
                Name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder={language === "id" ? "Nama lengkap" : "Full Name"}
                />
              </label>
              <label className="grid gap-2 text-sm">
                Email
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="name@domain.com"
                />
              </label>
              <label className="grid gap-2 text-sm">
                Phone
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  type="tel"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="08xxxxxxxxxx"
                />
              </label>
              {formError ? (
                <p className="text-sm text-red-500">{formError}</p>
              ) : null}
              <button
                type="submit"
                disabled={isPending}
                className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-white font-semibold transition-transform duration-700 ease-in-out scale-100 hover:scale-105 disabled:opacity-70"
              >
                {isPending
                  ? language === "id"
                    ? "Menyimpan..."
                    : "Saving..."
                  : language === "id"
                    ? "Lihat Hasil"
                    : "View Result"}
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
