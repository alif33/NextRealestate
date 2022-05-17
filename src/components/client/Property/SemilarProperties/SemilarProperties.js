import Link from "next/link";
import React from "react";
import Slider from "react-slick/lib/slider";
import Item from "./Item";



const SemilarProperties = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="container pb-5 mb-lg-4 overflow-hidden">
        <div className="d-flex align-items-center justify-content-between pb-2">
          <h2 className="h3 pt-5 pb-3 mt-md-4">Similar properties</h2>
          <a
            className="btn btn-link fw-normal ms-sm-3 p-0"
            href="city-guide-catalog.html"
          >
            View all
            <i className="fi-arrow-long-right ms-2" />
          </a>
        </div>

        {/* Item*/}
        <Slider {...settings}>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         
        </Slider>
      </section>
    </>
  );
};

export default SemilarProperties;
