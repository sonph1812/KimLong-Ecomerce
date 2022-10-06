// import SectionTitle from './SectionTitle';
// import Btn from './Btn';
// import FeaturedProduct from './FeaturedProduct';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
// import { useProductsContext } from '../context/products_context';
// import Loading from './Loading';
// import Error from './Error';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestSwiper from "./testSwiper";

const FeaturedProducts = () => {
    const list = useSelector(state => state.productReducer.products)
    console.log(123,list)
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className="container mx-auto grid grid-cols-3 gap-6">
                {list.map((product)=>(
                    <SwiperSlide>
                        <TestSwiper/>
                    </SwiperSlide>

                ))}
            </div>

        </Swiper>
    
    // <section className="flex-col  py-24" id="features">
    //   <div className="section-center text-center">
    //     {/*{loading ? (*/}
    //     {/*  <Loading />*/}
    //     {/*) : error ? (*/}
    //     {/*  <Error title={error}/>*/}
    //     {/*) : (*/}
    //       <>
    //         {/*<SectionTitle title="Featured Products" />*/}
    //         <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
    //           {/*{featured_products?.map(product => (*/}
    //           {/*  // <FeaturedProduct product={product} key={product.id} />*/}
    //           {/*))}*/}
    //         </div>
    //
    //         <div>
    //           <Link to="/products">
    //             {/*<Btn name="More products" />*/}
    //           </Link>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </section>
  );
};

export default FeaturedProducts;
