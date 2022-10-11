import SectionTitle from '../components/SectionTitle';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Btn from "../components/Btn";
import {formatPrice} from "../utils/helpers";
import {useEffect} from "react";
import {getProductByCate} from "../service/productService";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import React from "react";

const CateGoryDetail = ({list,category}) => {

    return (
        <section id="new" className="mx-auto max-w-screen-xl px-4 py-8 bg-white">
            <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8 text-center ">
                <SectionTitle title={category.name} />
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            // clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {list?.map((product, index) => (

                            <SwiperSlide >
                                <div className="  gap-x-4 gap-y-8  rounded-2xl ">

                                        <a href="#" className=" hover:scale-105 shadow-amber-700relative block border border-gray-100 transition-delay-150 duration-300 ease-in-out">
                                            <img
                                                alt="Toy"
                                                src={product.image}
                                                className="h-56 w-full object-contain "
                                            />

                                            <div className="p-6">

                                                <button
                                                    type="button"
                                                    name="wishlist"
                                                    className="absolute right-4 bottom-3 rounded-full bg-yellow-200 p-2 text-white hover:scale-105"
                                                >
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        stroke="black"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>
                    </>


                <Link to="/products">
                    <Btn name="Xem tất cả phụ kiện chính hãng"/>
                </Link>
            </div>
        </section>
    );
};

export default CateGoryDetail;
