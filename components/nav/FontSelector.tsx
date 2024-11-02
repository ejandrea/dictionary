"use client";

import { fonts } from "@/constants/fonts";
import { ArrowDown } from "@/public/images/index";
import { Font } from "@/types/Font";
import useFontStore from "@/store/useFontStore";
import { useState } from "react";

const FontSelector = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const { font } = useFontStore();

  const toggleDropDown = () => setDropDownOpen((state) => !state);

  return (
    <div className="relative">
      <button
        className="flex gap-2 items-center"
        onClick={toggleDropDown}
        aria-haspopup="listbox"
        aria-expanded={isDropDownOpen}
      >
        <p className="font-bold text-body-sm md:text-body-md">{font.type}</p>
        <ArrowDown width={12} height={6} />
      </button>

      <FontListDropDown
        isOpen={isDropDownOpen}
        toggleDropDown={toggleDropDown}
      />
    </div>
  );
};

type FontListDropDownProps = {
  isOpen: boolean;
  toggleDropDown: () => void;
};

const FontListDropDown = ({
  isOpen,
  toggleDropDown,
}: FontListDropDownProps) => {
  const { changeFont } = useFontStore();

  return (
    <ul
      className={`${
        isOpen ? "inline" : "hidden"
      } absolute mt-4 right-1 rounded-2xl p-6 drop-shadow-default bg-white w-[183px] h-[152px]`}
      role="listbox"
    >
      {fonts.map((fontOption) => (
        <FontListDropDownOption
          key={fontOption.type}
          font={fontOption}
          onSelect={() => {
            changeFont(fontOption);
            toggleDropDown();
          }}
        />
      ))}
    </ul>
  );
};

type FontListDropDownOptionProps = {
  font: Font;
  onSelect: () => void;
};

const FontListDropDownOption = ({
  font,
  onSelect,
}: FontListDropDownOptionProps) => {
  return (
    <li className="text-body-md font-bold [&:not(:first-child)]:mt-4">
      <button
        onClick={onSelect}
        className={`font-${font.value} hover:text-accent transition-colors`}
      >
        {font.type}
      </button>
    </li>
  );
};

export default FontSelector;
