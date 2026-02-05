export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
      <p className="font-semibold">
        © MBPT Project by
        <a
          href="https://jazacademy.id"
          target="_blank"
          className="text-indigo-600"
        >
          {" Jaz Academy "}
        </a>
      </p>
      <p className="mt-1">Motivation • Personality • Education</p>
    </footer>
  );
}
