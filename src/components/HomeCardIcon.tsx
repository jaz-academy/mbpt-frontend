type HomeCardIconProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  segment: string;
  description: string;
};

export default function HomeCardIcon({
  icon: Icon,
  label,
  segment,
  description,
}: HomeCardIconProps) {
  return (
    <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
      <h3 className="font-semibold mb-2">
        <Icon
          className={`size-5 inline-block mr-2 ${segment === "kids" ? "text-pink-500" : "text-indigo-600"}`}
        />
        {label}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
