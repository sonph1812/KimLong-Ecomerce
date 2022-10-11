import SectionTitle from '../components/SectionTitle';
// import NewProduct from './NewProduct';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Btn from "../components/Btn";
import {formatPrice} from "../utils/helpers";
import {getDetailProduct} from "../service/productService";
import {getDetailProductSlice} from "../reducer/slice/productSlice";
// import React from "react"
// import { useProductsContext } from '../context/products_context';

const NewProducts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGetDetail = (id) => {
    navigate(`/user/product/${id}`)

}

    const products = useSelector(state => state.productReducer.products)

  return (
    // <section id="new" className="py-24">
    //   <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8 text-center ">
    //     <SectionTitle title="New Products" />
    //     <div  className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10    place-items-center ">
    //         {products?.map((product, index) => (
    //             <div onClick={()=>{handleGetDetail(product._id)}} className="group">
    //                 <div className="w-full  max-w-sm aspect-square rounded-lg overflow-hidden  bg-tertiary-50">
    //                     <img
    //                         src={product.image}
    //                         // alt={name}
    //                         className="w-40 h-40 object-center object-cover group-hover:opacity-75"
    //                     />
    //                 </div>
    //                 <div className="flex-col items-center justify-center">
    //                     <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    //                     <p className="mt-1 text-lg font-medium text-gray-900">
    //                         {formatPrice(product.price)}
    //                     </p>
    //                 </div>
    //             </div>
    //         ))}
    //
    //     </div>
    //     <Link to="/products">
    //       <Btn name="Xem tất cả sản phẩm" />
    //     </Link>
    //   </div>
    // </section>
      <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8">
              <div className="relative mx-auto max-w-3xl text-center">
      <span
          className="absolute  rounded inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"
      ></span>

                  <h2
                      className="relative inline-block bg-white px-4 text-center text-2xl font-bold"
                  >
                      Recently Viewed
                  </h2>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 rounded-2xl">
                          {products?.map((product, index) => (

                  <a href="#" className="relative block border border-gray-100">
                      <button
                          type="button"
                          name="wishlist"
                          className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                      >
                          <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
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

                      <img
                          alt="Toy"
                          src={product.image}
                          className="h-56 w-full object-contain"
                      />

                      <div className="p-6">
                          <p className="text-sm font-medium text-gray-600">$14.99</p>

                          <h5 className="mt-1 text-lg font-bold">{product.name}</h5>

                          {/*<button*/}
                          {/*    name="add"*/}
                          {/*    type="button"*/}
                          {/*    className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-300 px-8 py-4"*/}
                          {/*>*/}
                          {/*    <span className="text-sm font-medium"> Add to Cart </span>*/}

                          {/*    <svg*/}
                          {/*        className="ml-1.5 h-5 w-5"*/}
                          {/*        xmlns="http://www.w3.org/2000/svg"*/}
                          {/*        fill="none"*/}
                          {/*        viewBox="0 0 24 24"*/}
                          {/*        stroke="currentColor"*/}
                          {/*    >*/}
                          {/*        <path*/}
                          {/*            stroke-linecap="round"*/}
                          {/*            stroke-linejoin="round"*/}
                          {/*            stroke-width="2"*/}
                          {/*            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"*/}
                          {/*        />*/}
                          {/*    </svg>*/}
                          {/*</button>*/}
                      </div>
                  </a>
                          ))}


                  </div>
          </div>
      </section>


  );
};

export default NewProducts;
