import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../components/home/style.css";

// import required modules
import { Grid, Pagination } from "swiper";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function BC() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGetDetail = (id) => {
        navigate(`/user/product/${id}`)

    }

    const products = useSelector(state => state.productReducer.products)

    return (
        <>
            <Swiper
                slidesPerView={2}
                grid={{
                    rows: 2,
                    col:2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            ><div className="flex-row">

                {products?.map((product)=>(
                    <SwiperSlide className="flex">{product.image}</SwiperSlide>

                ))}


            </div>

            </Swiper>
        </>
    );
}
export default BC