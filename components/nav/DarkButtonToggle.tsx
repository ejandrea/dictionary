"use client";

import useThemeStore, { ThemeState } from "@/store/useThemeStore";
import { PiToggleLeftLight, PiMoon, PiToggleRightFill } from "react-icons/pi";

const DarkButtonToggle = () => {
  const { mode, changeMode } = useThemeStore();

  const handleThemeToggle = () => {
    const toggleModeTo = mode === "light" ? "dark" : "light";
    changeMode!(toggleModeTo);
  };

  return (
    <button
      className={`flex gap-5 items-center hover:text-accent transition-colors`}
      onClick={handleThemeToggle}
    >
      <ThemeMode mode={mode} />
      <PiMoon size={25} className={`${mode === "dark" ? "text-accent" : ""}`} />
    </button>
  );
};

const ThemeMode = ({ mode }: ThemeState) => {
  return mode === "light" ? (
    <PiToggleLeftLight size={40} />
  ) : (
    <PiToggleRightFill size={40} className="text-accent" />
  );
};

export default DarkButtonToggle;
