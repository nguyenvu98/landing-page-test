// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/Base/button-custom-component";
import LogoImg from "@assets/image/Logo.png";

const MenuItems = ["Home", "Item1", "Item2", "Item3", "Item4"];

const Menu: React.FC<{
  selected: string;
  onSelect: (v: string) => void;
  className?: string;
}> = ({ selected, onSelect, className = "" }) => {
  return (
    <nav className={`flex items-center space-x-6 ${className}`}>
      {MenuItems.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className={`text-sm font-medium transition-colors focus:outline-none ${
            selected === item ? " py-2 px-4 font-semibold rounded-3xl" : " "
          }`}
          style={
            selected === item
              ? {
                  color: "var(--color-yellow)",
                  backgroundColor: "var(--color-dark-gray)",
                }
              : { color: "var(--color-gray)" }
          }
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Home");

  return (
    <>
      <div className="w-full h-16 flex items-center justify-between px-6 border-b border-[#383A42]">
        <div className="flex items-center gap-8">
          <Image
            src={LogoImg}
            alt="Logo"
            width={50}
            height={30}
            className="select-none"
          />

          <div className="hidden md:flex items-center">
            <Menu selected={selected} onSelect={(v) => setSelected(v)} />
          </div>
        </div>

        {/* Right: buttons */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <CustomButton
              btnVariant="secondary"
              onClick={() => console.log("Login")}
              size="medium"
            >
              Login
            </CustomButton>

            <CustomButton
              btnVariant="normal"
              onClick={() => console.log("Sign Up")}
              size="medium"
            >
              Sign Up
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
