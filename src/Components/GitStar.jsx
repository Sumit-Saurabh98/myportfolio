import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import img1 from "./Carousel_Images/redstore1.png";
import img2 from "./Carousel_Images/redstore2.png";
import img3 from "./Carousel_Images/redstore3.png";
import img4 from "./Carousel_Images/redstore4.png";
import img5 from "./Carousel_Images/redstore5.png";
import img6 from "./Carousel_Images/redstore6.png";


const GitStar = () => {
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
        </Slider>
    );
};

export { GitStar };