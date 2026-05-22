export default function Footer() {
  return (
    <footer
      className="
        relative z-50

        border-t border-black/[0.06]
        dark:border-white/10

        bg-[#f5f1eb]
        dark:bg-transparent

        backdrop-blur-xl

        px-6 py-16
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand */}
          <div className="max-w-lg">
            <h3
              className="
              text-5xl leading-tight md:text-5xl
              "
            >
              KHA
              <br />
              STUDIOS
            </h3>

            <p
              className="
                mt-8
                max-w-md
                leading-8

                text-[#6b6b6b]

                dark:text-neutral-400
              "
            >
              Architectural & Interior Designs
              focused on creating thoughtful
              spatial experiences through
              architecture, interiors,
              planning, and design innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="
                mb-8

                text-xs
                uppercase
                tracking-[0.35em]

                text-[#8a8a8a]

                dark:text-neutral-500
              "
            >
              QUICK LINKS
            </h4>

            <div className="space-y-5">
              {[
                "Home",
                "About",
                "Services",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    block
                    w-fit

                    text-[17px]

                    text-[#4f4f4f]
                    hover:text-black

                    transition-all duration-300

                    hover:translate-x-1

                    dark:text-neutral-300
                    dark:hover:text-white
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="
                mb-8

                text-xs
                uppercase
                tracking-[0.35em]

                text-[#8a8a8a]

                dark:text-neutral-500
              "
            >
              CONTACT
            </h4>

            <div className="space-y-5">
              <p
                className="
                  text-[17px]

                  text-[#4f4f4f]

                  dark:text-neutral-300
                "
              >
                +91 9404309322
              </p>

              <p
                className="
                  break-all
                  text-[17px]

                  text-[#4f4f4f]

                  dark:text-neutral-300
                "
              >
                khastudioarchitects@gmail.com
              </p>

              <a
                href="https://www.instagram.com/kha___studio"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  w-fit

                  text-[17px]

                  text-[#4f4f4f]
                  hover:text-black

                  transition-all duration-300

                  hover:translate-x-1

                  dark:text-neutral-300
                  dark:hover:text-white
                "
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-16

            border-t border-black/[0.06]
            dark:border-white/10

            pt-6

            text-sm

            text-[#7a7a7a]

            dark:text-neutral-500
          "
        >
          © 2026 KHA STUDIOS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}