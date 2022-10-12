import React, { useEffect, useState } from 'react';

import { Header } from '../components';
import { useDispatch, useSelector } from "react-redux";
import Search from '../components/Search';
import { setListSearch } from '../reducer/slice/userSlice';
import { deleteUser , addUser } from '../service/userService';
import {useNavigate} from "react-router-dom";
import {IoAddCircleOutline, IoInformationCircleOutline, IoReloadOutline, IoTrashOutline} from "react-icons/io5";
const Customers = () => {
  const list = useSelector(state => state.userReducer.users)
  const listSearch = useSelector (s => s.userReducer.listSearch)
  const [users, setUsers] = useState([])
  const role = localStorage.getItem('role')
  const dispatch = useDispatch()
  useEffect (()=>{
    if(listSearch){
      setUsers(listSearch)
    }
  },[listSearch])
  useEffect(() => {
    if(!listSearch){
      setUsers(list)
    }
  }, [list])
  const handelUser = () => {
    dispatch(setListSearch(null))
    setUsers(list)
  } 
  const navigate = useNavigate();

const handleDelete = (id) => {
  const confirmDelete =   window.confirm("Bạn muốn xóa chứ !")
  if(confirmDelete){
    deleteUser(id, dispatch);
  }

}
  const handleGetDetail = (id) => {
    navigate(`userDetail/${id}`)
  }

  return (

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div onClick={() => { handelUser() }}><Header category="Danh Sách " title="Khách Hàng" /></div>
      <Search list={list} model="user" ></Search>
      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Tên</td>
            <td className="px-5 py-2 w-80 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</td>
            <th className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Số Điện Thoại</th>
            <th className="px-5 py-2 w-40 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Địa Chỉ</th>
            <th colSpan={2} className=" w-40 text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"  >Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {role &&
            users.map((user) => (
              <tr key={user._id}>
                <td className=" items-center px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <img
                    style={{
                      width: "40px",
                      display: "block"
                    }}
                    src="https://i.pinimg.com/736x/8b/37/03/8b3703f0fe2d1db552f5a527404bdcb6.jpg" />
                  {user.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.phone} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.gender} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.address} </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoReloadOutline  ></IoReloadOutline>
                </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoTrashOutline onClick={()=>{handleDelete(user._id)}}></IoTrashOutline>
                </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoInformationCircleOutline onClick={()=>{handleGetDetail(user._id)}}>
                  </IoInformationCircleOutline>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
