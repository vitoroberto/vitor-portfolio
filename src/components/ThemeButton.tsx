import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";

export function ThemeButton() {
  const [theme, colorTheme, setTheme] = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark" ? true : false);

  const handleClick = () => {
    setTheme(colorTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="not-sr-only rounded-lg bg-zinc-200 p-4 duration-200 ease-out hover:scale-105 hover:bg-zinc-300 active:scale-95 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      onClick={handleClick}
    >
      {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
