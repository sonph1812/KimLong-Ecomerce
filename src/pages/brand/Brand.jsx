import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { deleteBrand } from '../../service/brandService';
import { IoAddCircleOutline, IoReloadOutline, IoTrashOutline } from "react-icons/io5";

const Brands = () => {
  const brandList = useSelector(state => state.brandReducer.brands);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerCreate = (data) => {
    navigate('/admin/addBrands')
  }
  const handlerDelete = (id) => {
    deleteBrand(dispatch, id)
  }

  const handleUpdate = (id) => {
    navigate(`/admin/editBrand/${id}`)
  }


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div ><Header category="Danh Sách" title="Hãng Sản Xuất" /></div>

      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Tên</td>
            <th colSpan={5} className=" text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider "  >Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {brandList &&
            brandList.map((brand, index) => (
              <tr key={brand._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {brand.name}</td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm ">
                  <IoAddCircleOutline onClick={() => { handlerCreate() }}></IoAddCircleOutline>
                </td>

                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoReloadOutline onClick={() => { handleUpdate(brand._id) }}></IoReloadOutline>
                </td>

                <td className="px-2 py-2 border-b border-gray-200 bg-white  content-center">
                  <IoTrashOutline onClick={() => { handlerDelete(brand._id) }}></IoTrashOutline>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
};

export default Brands;
