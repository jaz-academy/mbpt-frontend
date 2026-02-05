type ResultCardProps = {
  title: string;
  details: string[];
};

export default function ResultCard({ title, details = [] }: ResultCardProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
      <h3 className="text-xl text-indigo-600 font-bold mb-3">{title}</h3>
      <ul className="text-md md:text-lg list-disc pl-5">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
