import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {useLocation, useNavigate} from "react-router-dom";
import { getDetailUser } from "../service/userService";

function Profile() {
  const info = useSelector((s) => s.userReducer.userInfo);

  const userInfo = useLocation().state.userInfo
  const navigate = useNavigate();

  const editProfile = ()=>{
    navigate(`/admin/profile/update`);
  }
  return (
    <div className="md:flex no-wrap md:-mx-2 ">
      <div className="w-full md:w-3/12 md:mx-2">
        <div className="bg-white p-3 border-t-4 border-green-400">
          <img
            className="h-auto w-full mx-auto"
            src={
              userInfo.avatar
                ? userInfo.avatar
                : "https://symbols.vn/wp-content/uploads/2022/01/Hinh-Anime-tho-trang-cuc-ky-ngo-nghinh.jpg"
            }
            alt="user-profile"
          />
        </div>
        <div className="my-4"></div>
      </div>
      <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span className="text-green-500">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="tracking-wide">About</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-1 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">User Name</div>
                <div className="px-4 py-2">{userInfo.userName}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Name</div>
                <div className="px-4 py-2">{userInfo.name}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">{userInfo.gender}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">{userInfo.dob}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Phone</div>
                <div className="px-4 py-2">{userInfo.phone}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                  <div className="px-4 py-2">{userInfo.email}</div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold"> Address</div>
                <div className="px-4 py-2">{userInfo.address}</div>
              </div>
            </div>
          </div>
          {userInfo._id == info._id && <button onClick={editProfile} className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
            Edit Profile
          </button>}
        </div>
      </div>
    </div>
  );
}
export default Profile;
