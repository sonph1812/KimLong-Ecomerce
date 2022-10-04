import React from 'react';
import { Header } from '../components';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createProduct, deleteProduct, getAllProduct, updateProducts} from "../service/sellerService";
import {useNavigate} from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    const [isProductYet, setIsProductYet] = useState(false)
    console.log(products)
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
    const handleUpdate = (dispatch,id) => {
      updateProducts(dispatch,id)
        navigate('/admin/editProducts')
    }
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
    const handleChange =(e)=>{
      console.log(e.target.value)
      setSearch(e.target.value)
    }




  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
      <div className="grid grid-cols-6 gap-6">

          <input type="text" placeholder="Search" onChange={e => { handleChange(e) }} className="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        <div>
          <button className="col-span-2 sm:col-span-3 absolute px-3 bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded">Search</button>
        </div>
        <div>
          <button className="col-span-2 sm:col-span-3 absolute px-3 bg-yellow-200 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded"onClick={()=>{handlerCreate()}}>Create</button>
        </div>
      </div>

            <table className="min-w-full leading-normal ">

        <thead>
          <tr>
            <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</td>
            <td colSpan={2} className=" text-center px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>
          </tr>
        </thead>
        <tbody>
          {isProductYet && products.map((product) => (
            <tr key={product._id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {/*/!* <img src={`${product.images[0]}`}/>*/}
                {/*<img*/}
                {/*  style={{*/}
                {/*    width:"40px",*/}
                {/*    display:"block"*/}
                {/*  }}*/}
                {/*  src="https://i.pinimg.com/736x/8b/37/03/8b3703f0fe2d1db552f5a527404bdcb6.jpg" /> *!/*/}
                {product.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.image.link}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>

                    {/*<td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">*/}
                    {/*    <button className="absolute px-10  bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded"*/}
                    {/*            onClick="">Edit</button>*/}
                    {/*</td>*/}
                    {/*<td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">*/}
                    {/*    <button  className="absolute  px-10 bg-red-400 opacity-50 rounded-full row hover:bg-red-700 focus:outline-none rounded">Delete</button>*/}
                    {/*</td>*/}
                    <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button className="absolute px-3 bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded" onClick={()=>{handleUpdate(product._id)}}>update</button> </td>
                    <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button className="absolute px-3  bg-red-400 opacity-50 rounded-full row hover:bg-red-800 focus:outline-none rounded" onClick={()=>{handleDelete(product._id)}}>delete</button> </td>



            </tr>
          ))}

        </tbody>



      </table>
    </div>
  );
};
export default Products;
