import React, { useState } from "react";
import { thumbnailStyles } from "../../public/assets/assets";
import { SquareIcon, SparkleIcon, CpuIcon, ImageIcon, PenToolIcon, ChevronDownIcon, Square } from "lucide-react";



const StyleSelector = ({ value, onChange, isOpen, setIsOpen }) => {

    const styleDescriptions = {
    "Bold & Graphic": "High contrast, bold typography, striking visuals",
    "Minimalist": "Clean, simple layout with minimal elements",
    "Photorealistic": "Realistic, photo-based natural look",
    "Illustrated": "Artistic, hand-drawn illustration style",
    "Tech/Futuristic": "Modern, tech-heavy futuristic visuals",
    };

    const styleIcons = {
    "Bold & Graphic": <SparkleIcon className="h-4 w-4" />,
    "Minimalist": <SquareIcon className="h-4 w-4" />,
    "Photorealistic": <ImageIcon className="h-4 w-4" />,
    "Illustrated": <PenToolIcon className="h-4 w-4" />,
    "Tech/Futuristic": <CpuIcon className="h-4 w-4" />,
    };

    // fallback so dropdown works even if parent didn’t wire state correctly
    const [localOpen, setLocalOpen] = useState(false);
    const open = typeof isOpen === "boolean" ? isOpen : localOpen;
    const toggleOpen = () =>
    typeof setIsOpen === "function" ? setIsOpen(!open) : setLocalOpen(!open);
      const closeOpen = () =>
    typeof setIsOpen === "function" ? setIsOpen(false) : setLocalOpen(false);

  return (
    <div className="relative space-y-3">
      <label className="block text-sm font-medium text-zinc-200">
        Thumbnail Style
      </label>

      {/* Selected style button */}
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full text-left px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {styleIcons[value]}
            <div>
              <p className="text-white font-medium">{value}</p>
              <p className="text-xs text-zinc-400">
                {styleDescriptions[value]}
              </p>
            </div>
          </div>
          <ChevronDownIcon className={['h-5 w-5 text-zinc-400 transition-transform', isOpen && 'rotate-180'].join('')}/>
        </div>
      </button>

      {/* Dropdown */}
      {isOpen  && (
        <div className="absolute z-50 w-full mt-2 rounded-xl bg-zinc-900/95 backdrop-blur border border-white/10 shadow-xl overflow-hidden">
          {thumbnailStyles.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => {
                onChange(style);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 transition ${
                value === style
                  ? "bg-indigo-600/20 text-white"
                  : "hover:bg-white/6 text-zinc-300"
              }`}
            >
              <div className="flex items-start gap-2">
                {styleIcons[style]}
                <div>
                  <p className="font-medium">{style}</p>
                  <p className="text-xs text-zinc-400">
                    {styleDescriptions[style]}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StyleSelector;