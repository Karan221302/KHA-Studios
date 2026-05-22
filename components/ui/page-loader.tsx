"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="
            fixed inset-0 z-[99999]
            flex items-center justify-center
            bg-black
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              text-5xl
              tracking-[0.3em]
            "
          >
            KHA STUDIOS
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}