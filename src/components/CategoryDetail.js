import SectionTitle from '../components/SectionTitle';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Btn from "../components/Btn";
import {formatPrice} from "../utils/helpers";
import {useEffect} from "react";
import {getProductByCate} from "../service/productService";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import React from "react";

const CateGoryDetail = ({list,category}) => {
    const navigate = useNavigate()
    const handleGetDetail = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <section id="new" className="mx-auto max-w-screen-xl px-4 py-8  bg-white">
            <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8 text-center ">
                <SectionTitle title={category.name} className=" relative inline-block bg-white px-4 text-center text-2xl font-bold" />
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="bg-white "
                    >
                        {list?.map((product, index) => (

                            <SwiperSlide  className="p-6 ">
                                <div className="  gap-x-4 gap-y-8  rounded-2xl ">

                                        <a  onClick={()=>(handleGetDetail(product._id))} className="  rounded-2xl hover:scale-90 shadow-amber-700relative block border border-gray-100 transition-delay-150 duration-300 ease-in-out">
                                            <img
                                                alt="Toy"
                                                src={product.image}
                                                className="h-56 w-full object-contain "
                                            />

                                            <div className="p-6">
                                                <p>{formatPrice(product.price)}</p>
                                            </div>
                                        </a>
                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper >
                    </>


                <Link to="/products">
                    <Btn name="Xem tất cả phụ kiện chính hãng"/>
                </Link>
            </div>
        </section>
    );
};

export default CateGoryDetail;
