"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/navbar";

import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import QuoteSection from "@/components/sections/quote";

import ScrollProgress from "@/components/ui/scroll-progess";
import SocialDock from "@/components/ui/social-dock";

import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main
      className="
        relative min-h-screen overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
      "
    >
      <Navbar />

      <ScrollProgress />

      <SocialDock />

      {/* Ambient Glow */}
      <div
        className="
          absolute left-1/2 top-0
          h-[700px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#c6a77d]/30
          blur-3xl
          dark:bg-white/5
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]

          [background-image:linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-evenly opacity-[0.04]">
        <div className="h-full w-px bg-black dark:bg-white" />
        <div className="h-full w-px bg-black dark:bg-white" />
        <div className="h-full w-px bg-black dark:bg-white" />
        <div className="h-full w-px bg-black dark:bg-white" />
      </div>

      {/* HERO */}
      <section
        id="home"
        className="
          relative z-10
          flex min-h-screen
          items-center justify-center
          px-6
        "
      >
        <div className="max-w-5xl text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mb-6
              text-xs uppercase
              tracking-[0.5em]
              text-[var(--muted)]
              md:text-sm
            "
          >
            Architectural & Interior Designs
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              relative
              text-6xl
              font-semibold
              leading-[0.9]
              tracking-[-0.03em]

              md:text-[10rem]
            "
          >
            <span className="relative inline-block">
              ख

              <span
                className="
                  absolute
                  left-[82%]
                  top-[82%]
                  text-[0.32em]
                  leading-none
                "
              >
                •
              </span>
            </span>

            <br />

            STUDIOS
          </motion.h1>

          {/* Service Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="
              mt-8
              flex flex-wrap
              justify-center
              gap-3
            "
          >
            {[
              "Architecture",
              "Interiors",
              "Planning",
              "Design Solutions",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border border-[var(--border)]

                  bg-white/50
                  dark:bg-white/[0.03]

                  px-4 py-2

                  text-xs uppercase
                  tracking-[0.2em]

                  text-[#1c1c1c]
                  dark:text-[var(--foreground)]

                  backdrop-blur-xl
                "
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "180px" }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="
              mx-auto mt-8 h-px
              bg-[var(--foreground)]/30
            "
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="
              mx-auto mt-8
              max-w-2xl
              text-sm leading-8
              text-[var(--muted)]

              md:text-base
            "
          >
            Designing thoughtful spaces through
            architecture, interiors, planning,
            materiality, and spatial emotion.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
            className="
              mt-12
              flex flex-col
              items-center
              justify-center
              gap-4

              sm:flex-row
            "
          >
            {/* Primary Button */}
            <a
              href="#services"
              className="
                rounded-full

                bg-[var(--foreground)]

                px-8 py-4

                text-sm font-medium
                text-[var(--background)]

                transition-all duration-300

                hover:scale-105
              "
            >
              View Services
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="
                rounded-full
                border

                border-black/10
                dark:border-white/20

                bg-white/30
                dark:bg-white/[0.03]

                px-8 py-4

                text-sm

                backdrop-blur-xl

                transition-all duration-300

                hover:border-black/20
                dark:hover:border-white/40

                hover:bg-black/5
                dark:hover:bg-white/5
              "
            >
              Contact Studio
            </a>
          </motion.div>
        </div>
      </section>

      <About />

      <QuoteSection />

      <Services />

      <Contact />

      <Footer />
    </main>
  );
}