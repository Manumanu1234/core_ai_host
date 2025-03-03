import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { ChevronRight } from "lucide-react";

export const Team = (props) => {
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
              show={4}  // Number of items visible at a time
              slide={1}  // Moves only one image per click
              transition={0.5}
              swiping={true}
              rightArrow={
                <button
                  style={{
                    position: "absolute",
                    top: "35%",
                    right: "-40px",
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
