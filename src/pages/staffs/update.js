import Header from "../../components/Header";
import { useState } from "react";

function UpdateStaffs() {


  const [staff, setStaff] = useState({
    avatar: {
      public_id: "a",
      url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/20/975861/5-Giong-Cho-Long-Xu-.jpg",
    },
    gender: "Nam",
    role: "seller"
  });

  const handleChange = (e) => {
    setStaff({
      ...staff,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e) => {
    console.log(staff);
  };

    return ( 
        <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header title="Update Staff" />
        <form method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    User Name
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    name="userName"
                    id="userName"
                    autoComplete="given-name"
                    className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="given-name"
                    className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    autoComplete="street-address"
                    className="mt-1  px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
                    Phone
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
                    Address
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <option value="Name">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    DOB
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    name="dob"
                    id="dob"
                    autoComplete="given-name"
                    className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-neutral-900"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <option value="seller">Seller</option>
                    <option value="accountant">Accountant</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleCreate}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
}

export default UpdateStaffs;