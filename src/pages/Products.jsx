import React from 'react';
import { Header } from '../components';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createProduct, deleteProduct, getAllProduct, getDetailProduct, updateProducts } from "../service/productService";
import { useNavigate } from "react-router-dom";
import Search from '../components/Search';
import { setProductSearch } from "../reducer/slice/productSlice"

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const list = useSelector(state => state.productReducer.products)
  const listSearch = useSelector(s => s.productReducer.listSearch)
  const [products, setProduct] = useState([])
  const role = localStorage.getItem('role')
  useEffect(() => {
    if (listSearch) {
      setProduct(listSearch)
    }
  }, [listSearch])

  useEffect(() => {
    setProduct(list)
  }, [list])
  const handelProduct = () => {
    dispatch(setProductSearch(null))
    setProduct(list)
  }
  const handleDelete = (id) => {
    // deleteProduct(dispatch, id);
  }
  const handlerCreate = (data) => {
    createProduct(dispatch, data)
    navigate('/admin/editor')
  }
  const handleUpdate = (id) => {
    // getDetailProduct(dispatch, id)
    // navigate(`/admin/editProducts/${id}`)
  }

  return (

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <div onClick={() => { handelProduct() }}>
        <Header category="Page" title="Products" />
        <button
          style={{ position: "absolute", left: "560px" , top:"165px"}} 
          className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium rounded-md" onClick={() => { handlerCreate() }}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>

          Create
        </button>
      </div>

      <Search list={list} model="product" ></Search>


      <table className="min-w-full leading-normal ">

        <thead>
          <tr>
            <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Stock</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Brand</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</td>
            <td colSpan={3} className=" text-center px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>
          </tr>
        </thead>
        <tbody>
          {role && products.map((product, index) => (
            <tr key={product._id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.name}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><img className='w-14 h-14' src={product.image} /> </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.stock} </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.brandId?.name}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.categoryId?.name} </td>

              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <button className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium rounded-md" style={{ position: "relative", left: "45px" }} onClick={() => { handleUpdate(product._id) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>

                  Update
                </button></td>
              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md" onClick={() => { handleDelete(product._id) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>

                  Delete
                </button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
export default Products;
