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
    // getDetailBrand(dispatch,id)
    navigate(`/admin/editBrand/${id}`)
}

 
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div ><Header category="Page" title="Brand" /></div>
      
        <button
          style={{ position: "absolute", left: "560px" , top:"165px"}} 
          className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium rounded-md" onClick={() => { handlerCreate() }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>

          Create
        </button>
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

                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <button className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium rounded-md " style={{ position: "relative", left: "45px" }} onClick={() => { handleUpdate(brand._id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>

                    Update
                  </button></td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md" onClick={() => { handlerDelete(brand._id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>

                    Delete
                  </button></td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
};

export default Brands;
