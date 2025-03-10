import React from "react";
import IconBoxStyle11 from "../../IconBox/IconBoxStyle11";
import Spacing from "../../Spacing";

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle={<a href="tel:+918700181135">+91-8700181135</a>}
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle={
              <a href="mailto:rishab@mediacook.in">rishabh@mediacook.in</a>
            } // Make email clickable
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="304, Best Sky Tower, Netaji Subhash Place, Pitampura, Delhi, 110034"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.2542412709165!2d77.14547057961597!3d28.6925465769565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xacf5f79a5ba1fdc3%3A0xd86b8d0bd1dc6954!2sStealth%20Digital%20Pvt%20Ltd!5e0!3m2!1sen!2sbd!4v1725527077831!5m2!1sen!2sbd"
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}
