import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../service/userService";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {storage} from "../firebase/config";


function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userUpdate = useSelector(s => s.userReducer.userInfo)
  const userId = userUpdate._id
  // console.log('id',userId);
  const role = localStorage.getItem('role')
  const [user, setUser] = useState(userUpdate);
  const [avatar, setAvatar] = useState();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setUser(userUpdate)
  }, [userUpdate])

  const handleUpdate = async (e) => {
    e.preventDefault()
        let imageUpload = avatar;
        if (imageUpload) {
            const imageRef = ref(storage, `image/${imageUpload?.name}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    user.avatar = url;
                    updateUser(userId,user,dispatch)
                  if(role === 'user'){
                    navigate("/");
                  }else{
                    navigate('/admin')
                  }
                });
            });
        }else{
          updateUser(userId,user,dispatch)
          if(role === 'user'){
            navigate("/");
          }else{
            navigate('/admin')
          }
        }
  };

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    // file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  console.log('user',user);
  return (
    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header title="Chỉnh sửa hồ sơ" />
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Tên
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.name}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Email
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.email}

                  type="email"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Điện thoại
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.phone}
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="given-name"
                  className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Địa chỉ
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}

                  value={user.address}
                  type="address"
                  name="address"
                  id="address"
                  autoComplete="given-name"
                  className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Giới Tính
                </label>
                <select
                  value={user.gender}
                  id="gender"
                  name="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-neutral-900"
                >
                  Ngày sinh nhật
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.dob}
                  type="date"
                  name="dob"
                  id="dob"
                  autoComplete="given-name"
                  className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-neutral-900">
                    Tải lên hình đại diện
                </label>
                <input
                  onChange={(e) => {
                    handlePreviewAvatar(e);
                  }}
                  type="file"
                  name="file"
                  id="rating"
                  autoComplete="given-name"
                  className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleUpdate}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
