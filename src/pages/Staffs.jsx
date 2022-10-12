import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { useSelector, useDispatch } from "react-redux";
import { addStaff, deleteUser } from '../service/userService';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../components/Search';
import {IoAddCircleOutline, IoReloadOutline, IoTrashOutline} from "react-icons/io5";



function Staffs() {
  const list = useSelector(state => state.userReducer.staffs)
  const [staffs, setStaffs] = useState(list);
  const role = localStorage.getItem('role')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateStaffs = (data) => {
    addStaff(data, dispatch);
    navigate(`/admin/staffs/create`);
  }


  const handleDelete = (id) => {
    deleteUser(id, dispatch);
    navigate(`/admin/staffs`);
  }

  const handleUpdate = () => {
    navigate(`/admin/staffs/update`);
  }


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Danh Sách" title="Nhân Viên" />
      <Search list={list} model="staff" ></Search>
      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Tên</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Số Điện Thoại</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ngày Sinh</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Giới Tính</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Chức Vụ</td>
            <td colSpan={2} className=" text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Chức Năng</td>
          </tr>
        </thead>
        <tbody>
          {role && staffs &&
            staffs.map((user, index) => (
              <tr key={user._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.phone} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.dob} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.gender} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.roleId.name} </td>

                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoAddCircleOutline   onClick={() => { handleCreateStaffs() }}>

                  </IoAddCircleOutline>
                </td>

                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoReloadOutline  onClick={() => { handleUpdate(user._id) }}
                  ></IoReloadOutline>
                </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoTrashOutline onClick={() => { handleDelete(user._id) }}>

                  </IoTrashOutline>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );;
}

export default Staffs;