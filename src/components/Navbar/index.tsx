"use client";

import CustomButton from "@/components/Base/button-custom-component";
import LogoImg from "@assets/image/Logo.png";
import Image from "next/image";
import React, { useState } from "react";
import SideBar from "../SideBar";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Home");

  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <div className="w-full h-16 flex items-center justify-between px-4 sm:px-6 border-b border-[#383A42] bg-[#131415] z-50">
        <div className="flex items-center gap-4 sm:gap-8">
          <button
            onClick={toggleSidebar}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-1.5 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white my-1" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>

          <Image
            src={LogoImg}
            alt="Logo"
            width={50}
            height={30}
            className="select-none"
          />

          {/* Menu desktop */}
          <div className="hidden md:flex items-center">
            <Menu selected={selected} onSelect={(v) => setSelected(v)} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CustomButton
            btnVariant="normal"
            size="medium"
            sx={{
              px: { xs: 2, md: 3 },
              maxHeight: { xs: 32, md: 36 },
              fontSize: { xs: 12, md: 14 },
            }}
          >
            Login
          </CustomButton>
          <CustomButton
            btnVariant="secondary"
            size="medium"
            sx={{
              px: { xs: 2, md: 3 },
              maxHeight: { xs: 32, md: 36 },
              fontSize: { xs: 12, md: 14 },
            }}
          >
            Sign Up
          </CustomButton>
        </div>
      </div>

      <SideBar
        open={sidebarOpen}
        onClose={closeSidebar}
        selected={selected}
        onSelect={setSelected}
      />
    </>
  );
}
