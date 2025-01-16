import React, { useState, useEffect } from "react";
import Rating from "../Rating";

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(1);
  const totalTabs = 3; // Total number of testimonials

  // Function to handle tab click manually
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Automatically switch tabs every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => (prevTab < totalTabs ? prevTab + 1 : 1)); // Cycle through tabs
    }, 5000); // 5 seconds interval

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        <li className={activeTab === 1 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(1)}>
            <div className="cs_testimonial_1_avatar">
              <img
                src="https://randomuser.me/api/portraits/men/50.jpg"
                alt="Rahul Sharma"
              />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">RAHUL SHARMA</h3>
                <p className="cs_heading_color mb-0">Mumbai, India</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 2 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(2)}>
            <div className="cs_testimonial_1_avatar">
              <img
                src="https://randomuser.me/api/portraits/women/18.jpg"
                alt="Priya Singh"
              />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">PRIYA SINGH</h3>
                <p className="cs_heading_color mb-0">Delhi, India</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 3 ? "active" : ""}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(3)}>
            <div className="cs_testimonial_1_avatar">
              <img
                src="https://randomuser.me/api/portraits/men/77.jpg"
                alt="Sameer Kapoor"
              />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">SAMEER KAPOOR</h3>
                <p className="cs_heading_color mb-0">Bangalore, India</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="cs_tab_body">
        {activeTab === 1 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              The team at Mediacook did an excellent job with our SEO campaign.
              We saw a significant increase in website traffic from Mumbai
              within weeks. I highly recommend them.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              Mediacook’s social media marketing really helped our brand grow in
              Delhi. Their strategy was spot on, and we saw a great increase in
              engagement and leads.
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              I was thoroughly impressed with their digital marketing approach.
              We received great results for our clinic in Bangalore, thanks to
              their expert SEO and content marketing.
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
      </div>
    </div>
  );
}
