import { Link } from "react-router-dom";
import {
  UserIcon,
  UsersIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { useApp } from "../app/hook";

export default function Navbar() {
  const {
    theme,
    audience,
    language,
    toggleTheme,
    toggleAudience,
    toggleLanguage,
  } = useApp();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p>
            <Link to="/">
              <span className="font-bold text-lg">MBPT</span> • Jaz Academy
            </Link>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Motivation-Based Personality Test
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* <!-- Toggle Language --> */}
          <button
            className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-[12px] font-semibold tracking-wide"
            onClick={toggleLanguage}
            title="Toggle Language"
            aria-label="Toggle Language"
          >
            {language === "id" ? "ID" : "EN"}
          </button>

          {/* <!-- Toggle Audience --> */}
          <button
            className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={toggleAudience}
          >
            {audience === "kids" ? (
              <UsersIcon className="size-5 inline-block" />
            ) : (
              <UserIcon className="size-5 inline-block" />
            )}
          </button>

          {/* <!-- Toggle Theme --> */}
          <button
            className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <MoonIcon className="size-5 inline-block" />
            ) : (
              <SunIcon className="size-5 inline-block" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
