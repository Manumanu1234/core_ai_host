import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Services = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Vision & Mission</h2>
          <p>
            Our vision is to lead in AI innovation, and our mission is to empower
            individuals and organizations with transformative AI solutions for growth
            and collaboration.
          </p>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};
