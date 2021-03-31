import React, { useState, useEffect } from "react";
import { getSliderAction } from "../../action/sliderAction";
import { useSelector, useDispatch } from "react-redux";

export default function Slider() {
  const { sliders } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderAction());
  }, []);

  return (
    <section className="hero-section">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          {sliders.map((slider, i) => {
            var classn = i === 0 ? "carousel-item active" : "carousel-item";
            return (
              <div className={classn}>
                <img
                  src={
                    slider.image
                      ? process.env.PUBLIC_URL + "../../uploads/" + slider.image
                      : "../images/noimage.png"
                  }
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <p>
                    <a href={slider.link} class="primary-btn">
                      Shop Now
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
