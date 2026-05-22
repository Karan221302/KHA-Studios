"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="px-6 py-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          mx-auto max-w-5xl
          text-center
        "
      >
        <p
          className="
          text-5xl leading-tight md:text-6xl
          "
        >
          “Architecture is not only about space —
          it is about emotion, atmosphere,
          and human experience.”
        </p>
      </motion.div>
    </section>
  );
}