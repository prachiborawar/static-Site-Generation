import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'
import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image2.jpg"
import image3 from "@/assets/image3.jpg"


const HomePageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [
        image1,
        image2,
        image3,
        // Add more image URLs here
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <Image src={image} width={1600} height={600}  className='m-auto' alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomePageSlider;