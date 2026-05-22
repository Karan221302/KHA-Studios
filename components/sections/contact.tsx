"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20"
    >
      <div
        className="
          mx-auto max-w-7xl
          rounded-[40px]

          border border-black/25
          bg-white/55

          p-8
          backdrop-blur-2xl

          dark:border-white/10
          dark:bg-white/[0.03]

          md:p-12
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        "
      >
        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <p
              className="
                mb-4
                text-sm uppercase
                tracking-[0.3em]

                text-[#666]

                dark:text-[#6f6f6f]
              "
            >
              CONTACT STUDIO
            </p>

            <h2
              className="
              text-5xl leading-tight md:text-6xl
              "
            >
              Let’s discuss your
              vision.
            </h2>

            <div
              className="
                mt-10
                space-y-6

                text-[#3f3f3f]

                dark:text-[#9a9a9a]
              "
            >
              <div>
                <p
                  className="
                    text-sm uppercase
                    tracking-[0.2em]

                    text-[#666]

                    dark:text-[#9a9a9a]
                    
                  "
                >
                  PHONE
                </p>

                <p className="mt-2 text-lg">
                  +91 9404309322
                </p>
              </div>

              <div>
                <p
                  className="
                    text-sm uppercase
                    tracking-[0.2em]

                    text-[#666]

                    dark:text-[#6f6f6f]
                  "
                >
                  EMAIL
                </p>

                <p className="mt-2 text-lg break-all">
                  khastudioarchitects@gmail.com
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://wa.me/919404309322"
                  target="_blank"
                  className="
                    rounded-full

                    border border-black/10
                    bg-white/75
                  
                    px-5 py-3

                    text-[#1a1a1a] 
                    
                    shadow-sm
                    backdrop-blur-xl

                    transition-all duration-300
                    hover:scale-[1.03]
                    hover:bg-black
                    hover:text-white

                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-[#d4d4d4]
                    
                    dark:hover:bg-white
                    dark:hover:text-black
                    
                  "
                >
                  WhatsApp Chat
                </a>

                <a
                  href="https://chat.whatsapp.com/KMS68BdgDRT7HFKcqWvD7a"
                  target="_blank"
                  className="
                  rounded-full

                  border border-black/10
                  bg-white/75
                
                  px-5 py-3

                  text-[#1a1a1a] 
                  
                  shadow-sm
                  backdrop-blur-xl

                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:bg-black
                  hover:text-white

                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-[#d4d4d4]
                  
                  dark:hover:bg-white
                  dark:hover:text-black
                  
                "
                >
                  Join Group
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="
                w-full
                rounded-2x1

                border border-black/50
                bg-white/70

                shadow-inner
                px-6 py-4

                text-black
                outline-none

                placeholder:text-[#777777]

                dark:border-white/20
                focus:ring-2
                focus:ring-black/5

                dark:border-whilte/10
                dark:bg-white/[0.03]

                dark:text-[#ff5f5f5]

                dark:placeholder:text-[#6f6f6f]

                dark:focus:border-white/20
                dark:focus:ring-white/5  
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="
              w-full
              rounded-2xl

              border border-black/15
              bg-white/70

              shadow-inner
              px-6 py-4

              text-black
              outline-none

              placeholder:text-[#777777]

              dark:border-white/20
              focus:ring-2
              focus:ring-black/5

              dark:border-whilte/10
              dark:bg-white/[0.03]

              dark:text-[#ff5f5f5]

              dark:placeholder:text-[#6f6f6f]

              dark:focus:border-white/20
              dark:focus:ring-white/5  
            "
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={5}
              className="
              w-full
              rounded-2xl

              border border-black/15
              bg-white/70

              shadow-inner
              px-6 py-4

              text-black
              outline-none

              placeholder:text-[#777777]

              dark:border-white/20
              focus:ring-2
              focus:ring-black/5

              dark:border-whilte/10
              dark:bg-white/[0.03]

              dark:text-[#ff5f5f5]

              dark:placeholder:text-[#6f6f6f]

              dark:focus:border-white/20
              dark:focus:ring-white/5  
            "
            />

<button
  type="submit"
  className="
    rounded-full

    px-8 py-4

    transition-all duration-300

    hover:scale-105
  "
  style={{
    background:
      "var(--foreground)",

    color:
      "var(--background)",
  }}
>
  Send Project Inquiry
</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}