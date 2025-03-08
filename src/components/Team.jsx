import React, { useState, useEffect } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ChevronRight } from "lucide-react";

export const Team = (props) => {
  const [winWidth, setWinWidth] = useState(window.outerWidth);

  // To handle resizing of window
  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.outerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>Core AI Team at Toc H Institute of Science and Technology</p>
        </div>

        <div style={{ position: "relative", padding: "20px" }}>
          {props.data ? (
            <Carousel
              show={winWidth > 500 ? 4 : 1}  
              slide={1}  // Moves only one image per click
              transition={0.5}
              swiping={true}
              rightArrow={
                <button
                  style={{
                    position: "absolute",
                    top: "35%",
                    right: (winWidth > 480) ? `-40px` : `-19px` ,
                    transform: "translateY(-50%)",
                    background: "#fff",
                    color: "#000",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              }
            >
              {props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team">
                  <div className="thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            "loading..."
          )}
        </div>
      </div>
    </div>
  );
};
