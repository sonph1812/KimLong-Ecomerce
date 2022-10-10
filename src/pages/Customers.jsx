import React, { useEffect, useState } from 'react';

import { Header } from '../components';
import { useDispatch, useSelector } from "react-redux";
import Search from '../components/Search';
import { setListSearch } from '../reducer/slice/userSlice';
import { deleteUser, addUser } from '../service/userService';
import { useNavigate } from "react-router";
const Customers = () => {
  const list = useSelector(state => state.userReducer.users)
  const listSearch = useSelector(s => s.userReducer.listSearch)
  const [users, setUsers] = useState([])
  const role = localStorage.getItem('role')
  const dispatch = useDispatch()
  useEffect(() => {
    if (listSearch) {
      setUsers(listSearch)
    }
  }, [listSearch])
  useEffect(() => {
    setUsers(list)
  }, [list])
  const handelUser = () => {
    dispatch(setListSearch(null))
    setUsers(list)
  }
  const navigate = useNavigate();
  const handleCreateCustomer = (data) => {
    addUser(data, dispatch);
    navigate(`/admin/customers/create`);
  }
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Bạn muốn xóa chứ !")
    if (confirmDelete) {
      deleteUser(id, dispatch);
    }
  }
  const handleUpdate = () => {

  }

  return (

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div onClick={() => { handelUser() }}><Header category="Page" title="Custommer" /></div>
      <Search list={list} model="user" ></Search>
      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
            <td className="px-5 py-2 w-80 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</td>
            <td className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Phone</td>
            <td className="px-5 py-2 w-40 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Address</td>
            <td colSpan={2} className=" w-40 text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"  >Action</td>
          </tr>
        </thead>
        <tbody>
          {role &&
            users.map((user, index) => (
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
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.address} </td>
                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <button class="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium rounded-md " style={{ position: "relative", left: "45px" }} onClick={() => { handleUpdate(user._id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>

                    Block
                  </button></td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md" onClick={() => { handleDelete(user._id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

export default Customers;
