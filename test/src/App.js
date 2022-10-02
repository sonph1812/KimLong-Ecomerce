import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "./components/user/listUser/ListUser";
import UserDetail from "./components/user/userDetail/UserDetail";
import Admin from "./pages/admin/Admin";
import ListProduct from "./components/product/listProduct";
import CreateProduct from "./components/product/createProduct";
import UpdateProduct from "./components/product/updateProduct";
import AddStaff from "./components/user/addStaff/AddStaff";
import { getAllUser, getAllStaff } from "./service/userService"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from './reducer/slice/userSlice';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const local = localStorage.getItem('userInfo')
  const user = JSON.parse(local)
  const userInfo = useSelector(state => state.userReducer.userInfo);

  //  useEffect (()=>{
  //   dispatch(getUserInfo())
  //   if (token) {  
  //     if(userInfo){
  //       if (userInfo.roleId.name == "admin") {
  //         getAllStaff(dispatch)
  //         getAllUser(dispatch)
  //       }
  //     }

  //   }
  //  },[])
  useEffect(() => {
    if (token) {
      dispatch(getUserInfo(user))
      if (user.roleId.name == "admin") {
        getAllStaff(dispatch)
        getAllUser(dispatch)
      }else if(user.roleId.name == "seller"){

      }else if(user.roleId.name == "accountant"){

      }else if(user.roleId.name == "user"){

      }else{
        console.log('bạn ko có quyền');
      }
    }
  }, [])

  const listUser = useSelector((state) => state.userReducer.users)
  const listStaff = useSelector((state) => state.userReducer.staffs)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/home"></Route>
        <Route path="/"></Route>
        <Route path="/admin" element={<Admin users={listUser} userInfo={userInfo}></Admin>}>
          <Route path="listUser" element={<ListUser users={listUser} model={'user'}></ListUser>}></Route>
          <Route path="listStaff" element={<ListUser users={listStaff} model={'staff'}></ListUser>}></Route>
          <Route path="detail/:id" element={<UserDetail></UserDetail>}></Route>
          <Route path="myProfile" element={<UserDetail></UserDetail>}></Route>
          <Route path="addStaff" element={<AddStaff></AddStaff>}></Route>
        </Route>
        <Route path="/accountant"></Route>
        <Route path="/seller" >
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="update/:id" element={<UpdateProduct />}></Route>
          <Route path="products" element={<ListProduct />}></Route>


        </Route>

      </Routes>
    </BrowserRouter>
  );

}

export default App;
