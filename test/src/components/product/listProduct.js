import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProduct} from "../../service/sellerService";
const ListProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    // console.log(products);
    const [isProductYet, setIsProductYet] = useState(false)
    console.log(products)
    useEffect(() => {
        setIsProductYet(true)
        getAllProduct(dispatch)
    }, [])
    return (
        <div>
            <div> <header className=" top-2 pb-5 bg-gradient-to-r from-emerald-800  to-emerald-400	  z-30
            ">
                <img src="/assests/img/KL.png" className="object-fill h-50 w-80"/>

            </header></div>
            <div className={'flex'}>
                <div
                    id="sidebar"

                    className={"flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gradient-to-b from-emerald-800  to-emerald-400 p-4 transition-all duration-200 ease-in-out translate-x-0"}
                >


                <ul className="pl-9 mt-1 ">
                    <li className="mb-1 last:mb-0">

                    </li>

                </ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Product</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Admin</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Admin</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Admin</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Admin</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Admin</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Admin</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0">Admin</li></ul>
                <ul className="pl-9 mt-1"><li className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lg mb-1 last:mb-0"></li></ul>
                </div>
                <div className={'w-full px-16'}>
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">

                                    <div>
                                        <h1>Product lists</h1>
                                    </div>

                            </div>
                            <button onClick="popuphandler(true)"
                                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">Add Task</p>
                            </button>
                        </div>
                        </div>
                    <table className="min-w-full leading-normal ">
                        <thead>
                        <tr>
                            <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
                            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</td>
                            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>
                            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</td>
                            <td colSpan={2} className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>

                        </tr>
                        </thead>
                        <tbody>
                        {isProductYet && products.map((product) => (
                            <tr key={product._id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.name}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>

                                <td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                    <button className="absolute px-10  bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded"
                                    onClick="">Edit</button>
                                </td>
                                <td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                    <button  className="absolute  px-10 bg-red-400 opacity-50 rounded-full row hover:bg-red-700 focus:outline-none rounded">Delete</button>
                                </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>






        </div>
    );
};

export default ListProduct;