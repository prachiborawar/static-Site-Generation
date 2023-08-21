import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'
import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image2.jpg"
import image3 from "@/assets/image3.jpg"


export default function HomePageSlider({ images }) {

    const api_url = "http://localhost:1337"

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <Image src={api_url + image?.attributes?.formats?.large?.url} width={1600} height={600}  className='m-auto' alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

