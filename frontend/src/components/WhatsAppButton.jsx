// src/components/WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "916200261265"; // include country code
  const message = "Hello, I want to know more about your services."; // default pre-filled msg

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-transform duration-300 z-50 animate-bounce-glow"
      title="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-9 h-9 object-contain"
      />
      <style jsx>{`
        @keyframes bounce-glow {
          0%, 100% {
            transform: translateY(0);
            box-shadow: 0 0 0px rgba(34,197,94,0.7);
          }
          50% {
            transform: translateY(-6px);
            box-shadow: 0 0 15px rgba(34,197,94,0.7);
          }
        }
        .animate-bounce-glow {
          animation: bounce-glow 1s infinite;
        }
      `}</style>
    </button>
  );
};

export default WhatsAppButton;
