import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Carousel = () => {
  useEffect(() => {
    // Initialize main slider
    const mainSlider = new Splide("#main-slider", {
      type: "fade",
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
      center: true,
      height: 500, // Set your desired height
      width: 800,
    }).mount();

    // Initialize thumbnails slider
    const thumbnailSlider = new Splide("#thumbnail-slider", {
      rewind: true,
      fixedWidth: 104,
      fixedHeight: 90,
      isNavigation: true,
      gap: 10,
      focus: "center",
      pagination: false,
      cover: true,
      start: 2,

      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 66,
        },
      },
    }).mount();

    // Synchronize main and thumbnails sliders
    mainSlider.sync(thumbnailSlider);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="flex flex-col w-full gap-3">
      <section id="main-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list ">
            {shoesPreview.map((item, index) => (
              <li key={index} className="splide__slide">
                <img src={item.track} alt="" className="w-full h-auto" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="thumbnail-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {shoesPreview.map((item, index) => (
              <li key={index} className="splide__slide">
                <img src={item.thumbnail} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

const shoesPreview = [
  {
    track:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    track:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-shoes-WrLlWX.png",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    track:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    track:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-shoes-WrLlWX.png",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    track:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-WrLlWX.png",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    track:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png",
  },
];

export default Carousel;
