type ResultSwotProps = {
  title: string;
  details: string[];
  color: string;
};

export default function ResultSwot({
  title,
  details = [],
  color,
}: ResultSwotProps) {
  return (
    <div
      className={`bg-${color} text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105`}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="text-md md:text-lg list-disc pl-5">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
