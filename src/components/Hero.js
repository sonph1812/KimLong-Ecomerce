// import product1 from '../assets/img/hero-1.png';
// import product2 from '../assets/img/hero-2.png';
// import product3 from '../assets/img/hero-3.png';
// import product4 from '../assets/img/hero-4.png';
// import product5 from '../assets/img/hero-5.png';
// import product6 from '../assets/img/hero-6.png';
// import product7 from '../assets/img/hero-7.png';

// import Btn from './Btn';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden  py-5 xl:py-24">
      {/*<video controls="false" autoplay="autoplay"*/}
      {/*    src={"assets/ip14.webm"}*/}
      {/*    className=" w-1/3 h-1/2 object-center w-full relative  "*/}
      {/*/>*/}
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative section-center sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
Có tất cả nhưng thiếu frontend         </h1>
            <p className="mt-4 text-xl text-gray-500 absolute">
              Bao giờ đổ xong dữ liệu
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src={"assets/iphone14.jpeg"}
                          alt=""
                          className="w-full h-full object-center  relative object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                            src={"admin.jpeg"}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                           src={"admin.jpeg"}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                            src={"admin.jpeg"}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                            src={"admin.jpeg"}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                            src={"admin.jpeg"}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                            src={"admin.jpeg"}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="products">
                {/*<Btn name="Shop Collection" />*/}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
