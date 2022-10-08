import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deleteBrand } from '../../service/brandService';

const Brands = () => {
const brandList = useSelector(state => state.brandReducer.brands);
const dispatch = useDispatch();
const navigate = useNavigate();
const handlerCreate = (data) => {
    navigate('/admin/addBrands')
  }
const handlerDelete = (id) => {
    deleteBrand(dispatch,id)
  }
  
const handleUpdate = (id) => {
    getDetailBrand(dispatch,id)
    navigate(`/admin/editBrand/${id}`)
}

 
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div ><Header brand="Page" title="Brand" /></div>
      <div>
          <button className="col-span-2 sm:col-span-3 absolute px-3 bg-yellow-200 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded" onClick={() => { handlerCreate() }}>Create</button>
        </div>
      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</td>
            <td colSpan={2} className=" text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>
          </tr>
        </thead>
        <tbody>
          {brandList &&
            brandList.map((brand, index) => (
              <tr key={brand._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {brand.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {brand.description}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <img src = {brand.image}/></td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm" >  <button style={{ position: "relative", left: "100px" }} class="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {handleUpdate(brand._id)}}>
                  Update
                </button> </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button style={{ position: "relative", left: "10px" }} class="bg-yellow-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full" onClick={() => {handlerDelete(brand._id)}}>
                  Delete
                </button> </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
};

export default Brands;
