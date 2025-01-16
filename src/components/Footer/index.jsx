import React from "react";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import TextWidget from "../Widget/TextWidget";
import WhatsAppButton from "../WhatsappButton"; // Import the WhatsAppButton component

const menuDataOne = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
];
const menuDataTwo = [
  { title: "Search Engine Marketing", href: "/search-engine-marketing" },
  { title: "Search Engine Optimization", href: "/search-engine-optimization" },
  { title: "Social Media Marketing", href: "/social-media-marketing" },
  { title: "Web Developement", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer className="cs_footer cs_style_1 cs_heading_color">
        <div
          className="cs_footer_logo_wrap"
          style={{ backgroundImage: "url(/images/footer_bg_1.svg)" }}
        >
          <div
            className="cs_footer_brand"
            style={{ backgroundImage: "url(/images/footer_logo_bg.svg)" }}
          >
            <img
              src="/images/logo_icon.png"
              alt="Logo Icon"
              className="cs_footer_brand_icon"
            />
            <h2 className="cs_footer_brand_text">MediaCook</h2>
          </div>
        </div>
        <div className="cs_footer_main" style={{ paddingBottom: "30px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="cs_footer_item">
                  <TextWidget text="MediaCook" />
                  <ContactInfoWidget />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="cs_footer_item">
                  <MenuWidget data={menuDataOne} />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="cs_footer_item">
                  <MenuWidget data={menuDataTwo} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cs_footer_item">
                  <Newsletter
                    title="Be Our Subscribers"
                    subTitle="To get the latest news about health from our experts"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_accent_bg">
          <div className="container">
            <div
              className="cs_footer_bottom_in"
              style={{ padding: "20px 20px" }}
            >
              <SocialWidget />
              <div className="cs_copyright">
                Copyright © 2024 MediaCook. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton /> {/* Add WhatsAppButton at the end of the page */}
    </>
  );
}
