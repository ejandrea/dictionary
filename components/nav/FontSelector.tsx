"use client";

import { fonts } from "@/constants/fonts";
import { Font } from "@/types/Font";
import { RiArrowDownSLine } from "react-icons/ri";
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
        aria-label="Font Selector Dropdown Button"
      >
        <p className="font-bold text-body-sm md:text-body-md">{font.type}</p>
        <RiArrowDownSLine
          width={12}
          height={6}
          className="text-accent"
          role="img"
        />
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

// popup

const FontListDropDown = ({
  isOpen,
  toggleDropDown,
}: FontListDropDownProps) => {
  const { changeFont } = useFontStore();

  return (
    <ul
      className={`${
        isOpen ? "inline" : "hidden"
      } absolute mt-4 right-1 rounded-2xl p-6 drop-shadow-default dark:drop-shadow-dark bg-white dark:bg-black-300 w-[183px] h-[152px] z-10`}
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

// fonts

const FontListDropDownOption = ({
  font,
  onSelect,
}: FontListDropDownOptionProps) => {
  return (
    <li
      className="text-body-md font-bold [&:not(:first-child)]:mt-4"
      role="listitem"
    >
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
