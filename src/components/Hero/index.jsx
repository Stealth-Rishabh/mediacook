import React, { useEffect, useState, useRef } from "react";
import parse from "html-react-parser";

export default function Hero({ title, subTitle, bgUrl, imgUrl, infoList }) {
  const [counters, setCounters] = useState(infoList.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null); // Ref for the counter section

  useEffect(() => {
    const duration = 2000; // Duration for all counters to finish (in milliseconds)
    const steps = 100; // Number of steps for each counter
    const intervalTime = duration / steps;

    let intervals = [];

    if (isVisible) {
      intervals = infoList.map((item, index) => {
        const targetNumber = parseInt(item.number.replace(/\D/g, ""));
        const increment = targetNumber / steps;

        return setInterval(() => {
          setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            if (newCounters[index] < targetNumber) {
              newCounters[index] += increment;
            } else {
              newCounters[index] = targetNumber;
              clearInterval(intervals[index]);
            }
            return newCounters;
          });
        }, intervalTime);
      });
    }

    // Clear intervals when component unmounts
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [isVisible, infoList]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // When the section is visible
            observer.disconnect(); // Unobserve after becoming visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  return (
    <section className="cs_hero cs_style_1">
      <div
        className="cs_hero_wrap cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="container">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
            <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
              {parse(subTitle)}
            </p>
          </div>
          <img src={imgUrl} alt="Hero" className="cs_hero_img" />
          <div
            className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15"
            ref={counterRef} // Attach ref to this element
          >
            <div className="row">
              {infoList.map((item, index) => (
                <div className="col-md-3 col-sm-6" key={index}>
                  <div className="cs_hero_info_col text-center">
                    <div className="cs_hero_info">
                      <div className="cs_number">
                        <h2 className="cs_number_value">
                          {Math.floor(counters[index])}
                          {item.number.replace(/\d/g, "")}
                        </h2>
                      </div>
                      <div className="cs_hero_info_right">
                        <h3 className="cs_hero_info_title cs_semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
