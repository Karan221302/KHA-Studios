export default function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/919404309322"
        target="_blank"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center justify-center
          rounded-full
          bg-green-500
          px-5 py-4
          text-sm font-medium text-white
          shadow-2xl
          transition-all duration-300
          hover:scale-105
        "
      >
        WhatsApp
      </a>
    );
  }