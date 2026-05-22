import {
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa";
  
  import { Mail } from "lucide-react";
  
  export default function SocialDock() {
    return (
      <div
        className="
          fixed bottom-6 left-6 z-50
          hidden flex-col gap-4
          md:flex
        "
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/kha___studio?igsh=Z2IzZDRhNmF4dTBk"
          target="_blank"
          className="
            rounded-full
            border border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-xl
            transition-all duration-300
            hover:scale-110
          "
        >
          <FaInstagram size={18} />
        </a>
  
        {/* WhatsApp */}
        <a
          href="https://wa.me/919404309322"
          target="_blank"
          className="
            rounded-full
            border border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-xl
            transition-all duration-300
            hover:scale-110
          "
        >
          <FaWhatsapp size={18} />
        </a>
  
        {/* Email */}
        <a
          href="mailto:khastudioarchitects@gmail.com"
          className="
            rounded-full
            border border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-xl
            transition-all duration-300
            hover:scale-110
          "
        >
          <Mail size={18} />
        </a>
      </div>
    );
  }