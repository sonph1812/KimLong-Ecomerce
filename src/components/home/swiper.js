import React, { useRef, useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

function SwiperTest() {
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        [
            {img: 'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/Fold3.png'},
            {img: 'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/Fold3.png'},
            {img: 'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/Fold3.png'},
            {img: 'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/watch%202022.png'},
        ]
    );

    const prepend = () => {
        setSlides([`Slide ${prependNumber.current - 1}`, ...slides]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, "Slide " + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: "fraction"
                }}
                navigation={true}
                virtual
            >
                <div>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide} virtualIndex={index}>
                            <img src={slide.img} />
                        </SwiperSlide>
                        ))}
                </div>
            </Swiper>

            <p className="append-buttons">
                <button onClick={() => slideTo(1)} className="prepend-slide">
                    Slide 1
                </button>
                <button onClick={() => slideTo(2)} className="slide-250">
                    Slide 2
                </button>
                <button onClick={() => slideTo(3)} className="slide-500">
                    Slide 3
                </button>
                <button onClick={() => slideTo(4)} className="slide-500">
                    Slide 4
                </button>
            </p>
        </>
    );
}
export default SwiperTest