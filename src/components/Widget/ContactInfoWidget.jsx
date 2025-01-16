import { Icon } from "@iconify/react";
import React from "react";

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        <a
          href="https://www.google.com/maps/search/?api=1&query=304,+Best+Sky+Tower,+Netaji+Subhash+Place,+Pitampura,+Delhi,+110034"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          304, Best Sky Tower, Netaji Subhash Place, Pitampura, Delhi, 110034
        </a>
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        <a
          href="tel:+918700181135"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          +91-8700181135
        </a>{" "}
        {/* Make phone number clickable */}
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        <a
          href="mailto:rishab@mediacook.in"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          rishab@mediacook.in
        </a>{" "}
        {/* Make email clickable */}
      </li>
    </ul>
  );
}
