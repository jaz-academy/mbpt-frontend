type ProgressBarProps = {
  current: number;
  total: number;
  language: string;
};

export default function ProgressBar({
  current,
  total,
  language,
}: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);

  const label =
    language === "id"
      ? `Pertanyaan ${current} dari ${total}`
      : `Question ${current} of ${total}`;

  return (
    <div className="px-4">
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="bg-indigo-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-slate-400 my-2">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
    </div>
  );
}
