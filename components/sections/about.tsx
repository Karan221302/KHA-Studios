"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
<section id="about" className="section-divider relative z-10 px-6 py-32">      <div className="mx-auto grid max-w-7xl gap-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            About Studio
          </p>

          <h2 className="text-5xl leading-tight md:text-6xl">
            Spaces designed with clarity, atmosphere, and purpose.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-9 text-neutral-400">
            KHA STUDIOS is an architectural and
            interior design studio focused on
            creating thoughtful spatial experiences
            through contemporary design,
            functionality, and emotional connection.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-semibold">10+</h3>
              <p className="mt-2 text-neutral-500">
                Design Concepts
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold">5+</h3>
              <p className="mt-2 text-neutral-500">
                Project Types
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}