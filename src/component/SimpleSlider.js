import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SimpleSlider (props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {props.arrFanpage.map((item, index) => {
                return <div className='suggested-caro'>
                    <li >
                        <figure><img src="images/resources/speak-1.jpg" alt /></figure>
                        <span>Amy Watson</span>
                        <ins>Department of Socilolgy</ins>
                        <a href="#" title data-ripple><i className="icofont-star" />
                            Follow</a>
                    </li>
                </div>
            })}

        </Slider>
    );
}

export default SimpleSlider;
