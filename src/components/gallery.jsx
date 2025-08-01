import React, { useEffect } from "react";
import { Image } from "./image";
import AOS from "aos";
import "aos/dist/aos.css";

export const Gallery = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Our Events And Workshops.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data ? (
              props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
