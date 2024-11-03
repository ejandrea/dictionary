"use client";

import { useTheme } from "next-themes";
import { PiToggleLeftLight, PiMoon, PiToggleRightFill } from "react-icons/pi";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`flex gap-5 items-center hover:text-accent transition-colors`}
      aria-label="Dark Mode Toggle Button"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <ThemeMode theme={theme} />
      <PiMoon
        size={25}
        className={`${theme === "dark" ? "text-accent" : ""}`}
      />
    </button>
  );
};

const ThemeMode = ({ theme }: { theme: string | undefined }) => {
  return theme === "light" ? (
    <PiToggleLeftLight size={40} />
  ) : (
    <PiToggleRightFill size={40} className="text-accent" />
  );
};

export default DarkModeToggle;
