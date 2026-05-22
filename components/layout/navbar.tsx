"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import ThemeToggle from "../ui/theme-toggle";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 z-50
          w-full
          border-b border-[var(--border)]
          bg-[var(--background)]/80
          backdrop-blur-2xl
        "
      >
        <div
          className="
            mx-auto flex
            max-w-7xl
            items-center
            justify-between
            px-6 py-4
          "
        >
          {/* Logo */}
          <div className="flex flex-col">
            <h1
              className="
                text-2xl
                font-semibold
                tracking-[0.18em]
              "
            >
              KHA STUDIOS
            </h1>

            <p
              className="
                mt-1
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[var(--muted)]
              "
            >
              Architectural & Interior Designs
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  transition-colors duration-300
                  hover:text-[var(--muted)]
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-40
              flex flex-col
              items-center justify-center
              gap-8
              bg-[var(--background)]
            "
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                onClick={() => setOpen(false)}
                className="
                  text-3xl
                  tracking-[0.2em]
                "
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}