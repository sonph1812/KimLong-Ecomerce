import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {getDetailProduct} from "../service/productService";
import Header from "../components/Header";
import {formatPrice} from "../utils/helpers";
import Stars from "../components/Stars";

const ProductDetail = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const product = useSelector(state => state.productReducer.product)
    useEffect(()=>{
        getDetailProduct(dispatch,params.id)
    },[])
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div >
          <Header brand="Page" title="Product Detail" /></div>
        <div className=" mx-auto flex flex-wrap ">
            <img
                alt="ecommerce-product"
                className=" w-full h-full sm:w-2/3 sm:h-2/3 lg:w-1/2 lg:h-1/2 object-cover object-center rounded border border-gray-200 "
                src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                    {/*{brand}*/}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.name}  </h1>

                {/*<Stars stars={stars} />*/}
                <p className="leading-relaxed mt-4">
                    Description: {product.description}
                </p>
                <p className="leading-relaxed mt-4">
                    Price: {formatPrice(product.price)}
                </p>
                <p className="leading-relaxed mt-4">
                    Stock: {product.stock}
                </p>
                <Stars/>
                {/*{stock > 0 && <AddtoCart product={product} />}*/}
            </div>
        </div>


    </div>
  );
};

export default ProductDetail;
