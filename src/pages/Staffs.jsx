import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addStaff, deleteUser } from "../service/userService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "../components/Search";
import Swal from "sweetalert2";
import {
  IoAddCircleOutline,
  IoInformationCircleOutline,
  IoReloadOutline,
  IoTrashOutline,
} from "react-icons/io5";



function Staffs() {
  const list = useSelector(state => state.userReducer.staffs)
  const listSearch = useSelector (s => s.userReducer.staffSearch)
  const [staffs, setStaffs] = useState(list);
  const role = localStorage.getItem('role')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateStaffs = (data) => {
    addStaff(data, dispatch);
    navigate(`/admin/staffs/create`);
  }
  useEffect (()=>{
    if(listSearch){
      setStaffs(listSearch)
    }
  },[listSearch])
  useEffect(() => {
    if(!listSearch){
      setStaffs(list)
    }
  }, [list])

  const handleDelete = (id) => {
    // let confirmDelete = window.confirm("Bạn muốn xóa chứ !");
    // if (confirmDelete) {
    //   toast("Xoá thành công!");
    //   deleteUser(id, dispatch);
    // } else {
    //   toast("Xoá thất bại!");
    // }
    // navigate(`/admin/staffs`);
    Swal.fire({
      title: 'Bạn Muốn Xóa Chứ?',
      text: "Hãy Suy Nghĩ Cẩn Thận Khi Xóa!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vâng, Xóa Đi!'
  }).then(async (result) => {
      if (result.isConfirmed) {
            deleteUser(id, dispatch);
          Swal.fire(
              'Xóa!',
              'Bạn Đã Xóa Thành Công.',
              'success'
          )
      }
  })
  };

  const handleUpdate = () => {
    // navigate(`/admin/staffs/update`);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Danh Sách" title="Nhân Viên" />
      <Search list={list} model="staff"></Search>
      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Name
            </td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Email
            </td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Phone
            </td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Dob
            </td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Gender
            </td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Role
            </td>
            <td
              colSpan={3}
              className=" text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"
            >
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {role && staffs &&
            staffs.map((user, index) => (
              <tr key={user._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.name}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.email}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.phone}{" "}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.dob}{" "}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.gender}{" "}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.roleId.name}{" "}
                </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <IoAddCircleOutline   onClick={() => {
                                handleCreateStaffs()
                            }}></IoAddCircleOutline>
                        </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoReloadOutline  onClick={() => {
                                handleUpdate(user._id);
                            }}></IoReloadOutline>
                </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <IoTrashOutline
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                  ></IoTrashOutline>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Staffs;
