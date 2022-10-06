import React from 'react';
import { Header } from '../components';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createProduct, deleteProduct, getDetailProduct, updateProducts } from "../service/productService";
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
        deleteProduct(dispatch,id);
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
      <div onClick={() => { handelProduct() }}>
        <Header category="Page" title="Products" />
      </div>
      <Search list={products} model="product" ></Search>
      <div className="grid grid-cols-6 gap-6">

        <div>
          <button className="col-span-2 sm:col-span-3 absolute px-3 bg-yellow-200 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded" onClick={() => { handlerCreate() }}>Create</button>
        </div>
      </div>

      <table className="min-w-full leading-normal ">

            <thead>
            <tr>
                <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
                <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</td>
                <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>
                <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</td>
                <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Stock</td>
                <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Brand</td>
                <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</td>
                <td colSpan={3  } className=" text-center px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>
            </tr>
            </thead>
            <tbody>
            {role && products .map((product,index) => (
                <tr key={product._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.name}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.stock} </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.brandId?.name}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.categoryId?.name} </td>

              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <button className="absolute px-3 bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded" onClick={() => { handleUpdate(product._id) }}>update</button> </td>
              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <button className="absolute px-3  bg-red-400 opacity-50 rounded-full row hover:bg-red-800 focus:outline-none rounded" onClick={() => { handleDelete(product._id) }}>delete</button> </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
export default Products;
