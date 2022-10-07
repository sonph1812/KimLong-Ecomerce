import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Ecommerce, Editor } from './pages';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from './reducer/slice/userSlice';
import { getAllUser, getAllStaff } from "./service/userService"
import jwt_decode from "jwt-decode"




import Admin from './pages/admin/Admin';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Products from "./pages/Products";
import EditProducts from "./pages/EditProducts";
import { getAllProduct } from "./service/productService";
import Customers from "./pages/Customers";
import { getAllBrand } from "./service/brandService";
import {getAllCategory} from "./service/categoryService";



const App = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {

    if (token) {
      getAllProduct(dispatch)
      getAllBrand(dispatch)
      getAllCategory(dispatch)
      const user = jwt_decode(token).user
      dispatch(getUserInfo(user))
      if (user.roleId.name == "admin") {
        getAllStaff(dispatch)
        getAllUser(dispatch)
        getAllProduct(dispatch)

      } else if (user.roleId.name == "seller" || user.roleId.name == "user") {
        getAllProduct(dispatch)
        getAllBrand(dispatch)
        // getAllCategory(dispatch)
      }
    }
  }, [token]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/home"></Route>
        <Route path="/"></Route>
        <Route path="/admin" element={<Admin></Admin>}>
          <Route path="editor" element={<Editor />} />
          <Route path="products" element={<Products />} />
          <Route path="editProducts/:id" element={<EditProducts></EditProducts>} />






          {/*<Route path="" element={(<Ecommerce />)} />*/}
          <Route path="customers" element={(<Customers />)} />
          {/*<Route path="orders" element={<Orders />} />*/}
          {/*<Route path="kanban" element={<Kanban />} />*/}
          {/*<Route path="calendar" element={<Calendar />} />*/}
          {/*<Route path="color-picker" element={<ColorPicker />} />*/}
          {/*<Route path="line" element={<Line />} />*/}
          {/*<Route path="area" element={<Area />} />*/}
          {/*<Route path="bar" element={<Bar />} />*/}
          {/*<Route path="pie" element={<Pie />} />*/}
          {/*<Route path="financial" element={<Financial />} />*/}
          {/*<Route path="color-mapping" element={<ColorMapping />} />*/}
          {/*<Route path="pyramid" element={<Pyramid />} />*/}
          {/*<Route path="stacked" element={<Stacked />} />*/}

        </Route>
      </Routes>


    </BrowserRouter>
  );
};

export default App;
