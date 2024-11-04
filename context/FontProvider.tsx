"use client";

import useFontStore from "@/store/useFontStore";

const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const { font } = useFontStore();

  const fontValues = {
    inter: "font-inter",
    lora: "font-lora",
    inconsolata: "font-inconsolata",
  };

  return <main className={`${fontValues[font.value]}`}>{children}</main>;
};

export default FontProvider;
