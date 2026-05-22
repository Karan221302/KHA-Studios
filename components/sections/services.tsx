"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";

const services = [
  "Architecture",
  "Interior Design",
  "Planning",
  "Landscape",
  "3D Visualization",
  "Design Consultation",
];

export default function Services() {
  return (
<section id="services"className="section-divider px-6 py-32">      <div className="mx-auto max-w-7xl">
      <SectionHeading
  label="Services"
  title="Design solutions tailored through architecture and spatial thinking."
/>
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{opacity: 1, y: 0,}}
              transition={{duration: 0.6, delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                rounded-3xl

                border border-black/10
                bg-white/60
                
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                
                p-10
                
                backdrop-blur-2xl
                
                transition-all duration-300
                
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                hover:border-black/20
                
                dark:border-white/10
                dark:bg-white/[0.03]
                
                dark:shadow-none
                
                dark:hover:border-white/20
                dark:hover:bg-white/[0.05]
              "
            >
              <h3 className="text-2xl">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}