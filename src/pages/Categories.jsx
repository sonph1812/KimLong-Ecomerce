import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getDetailCategory, updateCategorys } from "../service/categoryService";
import { useNavigate } from 'react-router-dom';
import {IoAddCircleOutline, IoReloadOutline, IoTrashOutline} from "react-icons/io5";


const Categories = () => {

  const categoryList = useSelector(state =>{
    return  state.categoryReducer.categories
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerCreate = (data) => {
    navigate('/admin/addCategory')
  }
  const handlerDelete = (id) => {
    deleteCategory(dispatch, id)
  }
  // useEffect(()=>{
  //   setCategoriesList(categoryList)
  // },[list])
  const handleUpdate = (id, name, index) => {
    navigate(`/admin/editCategories/${id}`, { state: { name: `${name}`,index:index } })
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div ><Header category="Danh Sách" title="Loại Sản Phẩm" /></div>

      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Tên</td>
            <td colSpan={2} className=" text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Chức Năng</td>
          </tr>
        </thead>
        <tbody>
          {categoryList &&
            categoryList.map((category, index) => (
              <tr key={category._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {category.name}</td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                    <IoAddCircleOutline   onClick={() => {
                        handlerCreate()
                    }}></IoAddCircleOutline>
                </td>

                <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                    <IoReloadOutline  onClick={() => {
                                handleUpdate(category._id, category.name,index)
                    }}></IoReloadOutline>
                  </td>
                <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <IoTrashOutline onClick={() => {
                                handlerDelete(category._id)
                      }}></IoTrashOutline>
                 </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
};

export default Categories;
