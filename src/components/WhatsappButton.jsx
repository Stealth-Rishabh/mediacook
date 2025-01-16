import React from "react";

const WhatsAppButton = () => {
  return (
    <div className="phone-icon-wrapper">
      {/* Desktop View */}
      <div className="phone-icon desktop-view whatsapp-btn">
        <a
          href="https://api.whatsapp.com/send?phone=918700181135"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/color/100/whatsapp--v1.png"
            alt="WhatsApp"
          />
        </a>
      </div>
      {/* Mobile View */}
      <div className="phone-icon mobile-view whatsapp-btn">
        <a
          href="https://api.whatsapp.com/send?phone=918700181135"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/100/whatsapp--v1.png"
            alt="WhatsApp"
          />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
