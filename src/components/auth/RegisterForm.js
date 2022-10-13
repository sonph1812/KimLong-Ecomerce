import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../context/constants';
import axios from 'axios';
import React from "react";

function RegisterForm() {
    const navigate = useNavigate();

    const [registerForm, setRegisterForm] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const { userName, password, confirmPassword, name, email, phone, address } = registerForm;
    const [formErrors, setFormErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        if (!values.userName) {
            errors.userName = 'Hãy Nhập Tên Tài Khoản!';
        } else if (values.userName.length < 4) {
            errors.userName = 'Tên người dùng phải có nhiều hơn 4 ký tự !';
        } else if (values.userName.length > 10) {
            errors.userName = 'Tên người dùng tối đa 10 ký tự !';
        }
        if (!values.password) {
            errors.password = 'Hãy Nhập Mật Khẩu !';
        } else if (values.password.length < 4) {
            errors.password = 'Mật khẩu phải nhiều hơn 4 ký tự !';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Xác nhận Lại mật khẩu !';
        }else if(values.confirmPassword != values.password){
            errors.confirmPassword = 'Nhập lại mật khẩu sai !';
        }
        if (!values.name) {
            errors.name = 'Hãy Nhập Tên Người Dùng!';
        }else if (values.name.length < 4) {
            errors.password = 'Tên phải nhiều hơn 4 ký tự !';
        }
        if (!values.email) {
            errors.email = 'Hãy Nhập Email !';
        } else if (!regexEmail.test(values.email)) {
            errors.email = 'Đây không phải là một định dạng email hợp lệ!';
        }
        if (!values.phone) {
            errors.phone = 'Hãy Nhập Số Điên Thoại !';
        }else if (!regexPhone.test(values.phone)) {
            errors.email = 'Đây không phải là định dạng điện thoại hợp lệ!';
        }else if (values.phone.length > 10) {
            errors.password = 'Số Điện thoại lên đến 10 ký tự !';
        }
        if (!values.address) {
            errors.address = 'Hãy Nhập Địa Chỉ Của Bạn !';
        }
        return errors;
    };

    const onChangeRegisterForm = (event) =>
        setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });

    const register = (e) => {
        e.preventDefault();
        console.warn('req.boy',registerForm);
        const valid = validate(registerForm);
        setFormErrors(validate(registerForm));
        if((valid.userName== undefined)&&(valid.password== undefined)&&(valid.confirmPassword== undefined)&&(valid.name== undefined)&&(valid.email== undefined)&&(valid.phone== undefined)&&(valid.address== undefined)){
            axios
            .post(`${apiUrl}/register`, registerForm)
            .then(function (response) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
                navigate('/login');
                return response.data;
            })
            .catch(function (error) {
                document.getElementById('err').innerHTML = error.response.data.message;
            });
        }
        
    };

    return (
        <section className="bg-yellow-200 dark:bg-gradient-to-tl ">
        <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5" >
            <img
                className="mt-8 space-y-6 px-5 py-5   rounded-lg"
                src={"assets/banner/kimlong-wellcome.png"}
                alt="img"
            />        </div>

    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-fit p-10 bg-white rounded-2xl border-8">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
Đăng kí tài khoản ngay hôm nay            </h1>

            <form className="mt-8 space-y-6" action="#" method="POST">
                <div
                    className="bg-blue-800  px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-3.5 h-3.5 mr-2"
                    >
                        <path
                            fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        />
                    </svg>
                    Tiếp tục với Facebook
                </div>
                <div className=" bg-blue-400 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-3.5 h-3.5 mr-2"
                    >
                        <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        />
                    </svg>
                    Tiếp tục với Twitter
                </div>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div className="flex b-4">
                        <div className="w-1/2 mr-0">
                            <label>Tên Tài Khoản :</label>
                            <div>
                                <input
                                    id="user-Name"
                                    name="userName"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Tên tài khoản"
                                    value={userName}
                                    onChange={onChangeRegisterForm}
                                />
                            </div>
                            <p className="text-red-700">{formErrors.userName}</p>
                        </div>
                        <div className="w-1/2 ml-0">
                            <label>Tên Người Dùng :</label>
                            <div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Tên người dùng"
                                    value={name}
                                    onChange={onChangeRegisterForm}
                                />
                            </div>
                            <p className="text-red-700">{formErrors.name}</p>
                        </div>
                    </div>

                    <div className="flex b-4">
                        <div className="w-1/2 mr-0">
                            <label>Mật Khẩu :</label>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={onChangeRegisterForm}
                                />
                            </div>
                            <p className="text-red-700">{formErrors.password}</p>
                        </div>
                        <div className="w-1/2 ml-0">
                            <label>Nhập Lại Mật Khẩu:</label>
                            <div>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Nhập lại mật khẩu"
                                    value={confirmPassword}
                                    onChange={onChangeRegisterForm}
                                />
                            </div>
                            <p className="text-red-700">{formErrors.confirmPassword}</p>
                        </div>
                    </div>

                    <div>
                        <label >
                            Email :
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Email"
                            value={email}
                            onChange={onChangeRegisterForm}
                        />
                    </div>
                    <p className="text-red-700">{formErrors.email}</p>
                    <div>
                        <label >
                            Số Điện Thoại :
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Số điện thoại"
                            value={phone}
                            onChange={onChangeRegisterForm}
                        />
                    </div>
                    <p className="text-red-700">{formErrors.phone}</p>
                    <div>
                        <label >
                            Địa Chỉ Liên Hệ  :
                        </label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Địa chỉ"
                            value={address}
                            onChange={onChangeRegisterForm}
                        />
                    </div>
                    <p className="text-red-700">{formErrors.address}</p>
                </div>
                <p className="text-red-700" id="err"></p>
                <div><a href="login">Bạn đã có tài khoản, Đăng nhập</a></div>
                <div>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-600 py-4 px-4 text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2"
                        onClick={register}
                    >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon
                                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                        <div>Đăng kí</div>
                    </button>
                </div>
            </form>

        </div>
    </div>
</div>
</section>

    );
}

export default RegisterForm;
