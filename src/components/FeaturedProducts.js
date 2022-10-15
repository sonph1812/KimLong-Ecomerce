// import SectionTitle from './SectionTitle';
// import Btn from './Btn';
import { useSelector} from "react-redux";
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
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={2}
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
                        <TestSwiper product = {product}/>
                    </SwiperSlide>

                ))}
            </div>

        </Swiper>
    

  );
};

export default FeaturedProducts;
