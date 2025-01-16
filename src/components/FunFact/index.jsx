import React, { useEffect, useState, useRef } from "react";

export default function FunFact({ number, title }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const target = parseInt(number.replace("+", ""), 10); // Remove the "+" and convert to integer
    const duration = 2000; // Duration for the counter (2 seconds)
    const increment = Math.ceil((target / duration) * 10); // Increment to increase count in steps

    let currentCount = 0;
    const counter = () => {
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target) {
          clearInterval(interval);
          currentCount = target;
        }
        setCount(currentCount);
      }, 10); // Update every 10ms
    };

    // Store the elementRef value in a variable
    const currentElement = elementRef.current;

    // Intersection Observer to start counter when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          counter();
        }
      },
      { threshold: 0.1 } // Counter starts when 10% of the component is visible
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [number, hasStarted]);

  return (
    <div className="cs_funfact cs_style_1 text-center" ref={elementRef}>
      <h2 className="cs_funfact_number cs_fs_72">{count}+</h2>
      <p className="cs_funfact_title m-0 cs_heading_color">{title}</p>
    </div>
  );
}
