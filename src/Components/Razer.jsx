import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import img1 from "./Carousel_Images/razer1.png";
import img2 from "./Carousel_Images/razer2.png";
import img3 from "./Carousel_Images/razer3.png";
import img4 from "./Carousel_Images/razer4.png";
import img5 from "./Carousel_Images/razer5.png";
import img6 from "./Carousel_Images/razer6.png";
import img7 from "./Carousel_Images/razer7.png";
import img8 from "./Carousel_Images/razer8.png";
import img9 from "./Carousel_Images/razer9.png";
import img10 from "./Carousel_Images/razer10.png";
import img11 from "./Carousel_Images/razer11.png";
import img12 from "./Carousel_Images/razer12.png";
import img13 from "./Carousel_Images/razer13.png";
import img14 from "./Carousel_Images/razer14.png";
import img15 from "./Carousel_Images/razer15.png";
import img16 from "./Carousel_Images/razer16.png";
import img17 from "./Carousel_Images/razer17.png";
import img18 from "./Carousel_Images/razer18.png";

const Razer = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  
  return (
    <Slider {...settings}>
      <div>
        <Image width="100%" height="100%" src={img1} alt="img1" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img2} alt="img2" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img3} alt="img3" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img4} alt="img4" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img5} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img6} alt="img1" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img7} alt="img2" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img8} alt="img3" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img9} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img10} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img11} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img12} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img13} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img14} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img15} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img16} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img17} alt="img5" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img18} alt="img5" />
      </div>
    </Slider>
  );
};

export { Razer };