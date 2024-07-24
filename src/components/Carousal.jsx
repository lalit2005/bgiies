import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import inv1 from "../assets/inv1.png";
import inv2 from "../assets/inv2.png";
import inv3 from "../assets/inv3.png";
import inv4 from "../assets/inv4.png";
import Slider from "react-slick";
import "../components/Carousal.css";

export default function NewCarousel() {
  const images = [
    {
      image: inv1,
      url: "",
    },
    {
      image: inv2,
      url: "",
    },
    {
      image: inv3,
      url: "",
    },
    {
      image: inv4,
      url: "",
    },
  ];
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const settings = {
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0%",
    mobileFirst: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    useTransform: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "22.5%",
          dots: false,
          mobileFirst: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    // <ChakraProvider>
    <Box backgroundSize="cover" justifyContent="center" alignItems="center">
      {/* <Box position="relative" top="5%" right="0%">
        {/* <div
            className="titleFont"
            style={{
              color: "white",
              fontSize: isSmallerThan600 ? "2.5rem" : 96,
              fontWeight: "200",
              wordWrap: "break-word",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            G A L L E R Y
          </div> *
      </Box> */}
      <div
        className="slick-carousel"
        style={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          top: isSmallerThan600 ? "22%" : "12%",
        }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img className="carousel-image" src={image.image} alt={`${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </Box>
    // </ChakraProvider>
  );
}
