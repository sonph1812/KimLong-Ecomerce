import SectionTitle from '../components/SectionTitle';
// import NewProduct from './NewProduct';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import Btn from "../components/Btn";
import {formatPrice} from "../utils/helpers";
// import React from "react"
// import { useProductsContext } from '../context/products_context';

const NewProducts = () => {
    const products = useSelector(state => state.productReducer.products)

  return (
    <section id="new" className="py-24">
      <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8 text-center ">
        <SectionTitle title="New Products" />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10    place-items-center">
            {products?.map((product, index) => (
                <Link to={`product/${product._id}`} className="group">
                    <div className="w-full  max-w-sm aspect-square rounded-lg overflow-hidden  bg-tertiary-50">
                        <img
                            src={product.image}
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
        <Link to="/products">
          <Btn name="Xem tất cả Iphone" />
        </Link>
      </div>
    </section>
  );
};

export default NewProducts;
