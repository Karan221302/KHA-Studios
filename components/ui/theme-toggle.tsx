"use client";

import { Moon, Sun } from "lucide-react";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );

      setDark(true);
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem("theme", "light");

      setDark(false);
    } else {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem("theme", "dark");

      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        flex h-11 w-11
        items-center justify-center
        rounded-full
        border border-[var(--border)]
        bg-[var(--card)]
        backdrop-blur-xl
        transition-all duration-300
        hover:scale-105
      "
    >
      {dark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}