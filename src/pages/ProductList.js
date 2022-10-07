import React from 'react';
import NavbarUser from "../components/NavbarUser";
import PageHero from "../components/PageHero";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {formatPrice} from "../utils/helpers";

const ProductList = () => {
    const products = useSelector(state => state.productReducer.products)
    console.log('11',products)
    return (
        <>
            <NavbarUser/>
            <PageHero title="Products"/>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-10 place-items-center">
                {products?.map((product, index) => (
                    <Link to={`product/${product._id}`} className="group">
                        <div className="w-full  max-w-sm aspect-square rounded-lg overflow-hidden  bg-tertiary-50">
                            <img
                                src={'admin2.jpeg'}
                                // alt={name}
                                className="w-40 h-40 object-center object-cover group-hover:opacity-75"
                            />
                        </div>
                        <div className="flex-col items-center justify-center">
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                                {formatPrice(product.price)}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ProductList;

