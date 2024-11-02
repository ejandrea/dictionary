"use client";

import useFontStore from "@/store/useFontStore";

const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const { font } = useFontStore();
  return <main className={`font-${font.value}`}>{children}</main>;
};

export default FontProvider;
