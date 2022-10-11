import { useSelector } from "react-redux";

function Profile() {
  const userInfo = useSelector((s) => s.userReducer.userInfo);
  return (
    <div class="md:flex no-wrap md:-mx-2 ">
      <div class="w-full md:w-3/12 md:mx-2">
        <div class="bg-white p-3 border-t-4 border-green-400">
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
        <div class="my-4"></div>
      </div>
      <div class="w-full md:w-9/12 mx-2 h-64">
        <div class="bg-white p-3 shadow-sm rounded-sm">
          <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span clas="text-green-500">
              <svg
                class="h-5"
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
            <span class="tracking-wide">About</span>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-1 text-sm">
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">User Name</div>
                <div class="px-4 py-2">{userInfo.userName}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Name</div>
                <div class="px-4 py-2">{userInfo.name}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2">{userInfo.gender}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Birthday</div>
                <div class="px-4 py-2">{userInfo.dob}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Phone</div>
                <div class="px-4 py-2">{userInfo.phone}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email.</div>
                <div class="px-4 py-2">
                  <div class="px-4 py-2">{userInfo.email}</div>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold"> Address</div>
                <div class="px-4 py-2">{userInfo.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
