type HomeCardAboutProps = {
  title: string;
  description: string;
};

export default function HomeCardAbout({
  title,
  description,
}: HomeCardAboutProps) {
  return (
    <div className="rounded-2xl py-6 px-8 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p
        className="text-sm text-gray-600 dark:text-gray-400 text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
