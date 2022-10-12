import React, {useState} from 'react';
import Header from "../../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { createBrand } from '../../service/brandService';


const EditBrand = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [addBrands, setAddBrands] = useState(null)
    const handlerChange = (e) => {
        setAddBrands({
            ...addBrands,
            [e.target.name]: e.target.value
        })
    };
    const handlerCreate = async (e) => {
            createBrand(addBrands, dispatch)
            navigate("/admin/brands")
    };

    return(
        <div>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header/>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-neutral-900">Name</label>
                                <input onChange={(e) => {
                                    handlerChange(e) 
                                }}
                                       type="text" name="name" id="name" autoComplete="given-name"
                                       className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                            </div> 
                        </div>
                    </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                    className="inline-flex justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={()=>{handlerCreate()}}>CREATE
                            </button>
                        </div>
                    </div>

            </div>
        </div>
       
    )

};

export default EditBrand;