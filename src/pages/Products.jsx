import React from 'react';
// import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

// import { employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProduct } from "../service/sellerService";

const Products = () => {
  // const toolbarOptions = ['Search'];

  // const editing = { allowDeleting: true, allowEditing: true };

  const dispatch = useDispatch()
  const products = useSelector(state => state.productReducer.products)
  const [isProductYet, setIsProductYet] = useState(false)
  console.log(products)
  useEffect(() => {
    setIsProductYet(true)
    getAllProduct(dispatch)
  }, [])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
      <input type="text" placeholder="Search" className="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <table className="min-w-full leading-normal ">

        <thead>
          <tr>
            <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</td>
            <td colSpan={2} className=" text-center px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>
          </tr>
        </thead>
        <tbody>
          {isProductYet && products.map((product) => (
            <tr key={product._id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {/* <img src={`${product.images[0]}`}/>
                <img
                  style={{
                    width:"40px",
                    display:"block"
                  }}
                  src="https://i.pinimg.com/736x/8b/37/03/8b3703f0fe2d1db552f5a527404bdcb6.jpg" /> */}
                {product.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>

              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm" >  <button style={{ position: "relative", left: "100px" }} class="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Update
              </button> </td>
              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button style={{ position: "relative", left: "10px" }} class="bg-yellow-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                Delete
              </button> </td>

            </tr>
          ))}

        </tbody>

        <div className="flex flex-col  ">

          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span
              className="font-semibold text-gray-900 dark:text-white">10</span> of <span
                className="font-semibold text-gray-900 dark:text-white">100</span> Pages</span>
          <div className="inline-flex mt-2  xs:mt-0 ">
            <button
              className="py-2 px-4 text-sm font-medium text-white bg-yellow-300 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Prev
            </button>
            <button
              className="py-2 px-4 text-sm font-medium text-white bg-yellow-300 rounded-r border-0 border-l border-white hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </button>
          </div>
        </div>

      </table>
    </div>
  );
};
export default Products;