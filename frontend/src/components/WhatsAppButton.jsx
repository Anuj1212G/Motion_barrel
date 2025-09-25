// src/components/WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "916200261265"; // ✅ include country code (91 for India)
  const message = "Hello, I want to know more about your services."; // default pre-filled msg

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all z-50 animate-bounce-glow"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-9 h-9 object-contain"
      />
    </button>
  );
};

export default WhatsAppButton;
