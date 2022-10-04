import React from 'react';
import { Header } from '../components';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createProduct, deleteProduct, getAllProduct, getDetailProduct, updateProducts} from "../service/sellerService";
import {useNavigate} from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    const [isProductYet, setIsProductYet] = useState(false)
    useEffect(() => {
        setIsProductYet(true)
        getAllProduct(dispatch)
    }, [])
    const handleDelete = (id) => {
        deleteProduct(dispatch,id);
        window.confirm("Bạn muốn xóa chứ !")
    }
    const handlerCreate = (data) => {
      createProduct(dispatch,data)
        navigate('/admin/editor')
    }
    const handleUpdate = (id) => {
        getDetailProduct(dispatch,id)
        navigate(`/admin/editProducts/${id}`)
    }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
        <input type="text" placeholder="Search" className="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button onClick={()=>{handlerCreate()}}>Create</button>
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
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.name}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>

                    {/*<td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">*/}
                    {/*    <button className="absolute px-10  bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded"*/}
                    {/*            onClick="">Edit</button>*/}
                    {/*</td>*/}
                    {/*<td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">*/}
                    {/*    <button  className="absolute  px-10 bg-red-400 opacity-50 rounded-full row hover:bg-red-700 focus:outline-none rounded">Delete</button>*/}
                    {/*</td>*/}
                    <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                        <button className="absolute px-3 bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded" onClick={()=>{handleUpdate(product._id)}}>update</button> </td>
                    <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                        <button className="absolute px-3  bg-red-400 opacity-50 rounded-full row hover:bg-red-800 focus:outline-none rounded" onClick={()=>{handleDelete(product._id)}}>delete</button> </td>



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
