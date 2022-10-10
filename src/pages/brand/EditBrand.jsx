import React, {useState} from 'react';
import Header from "../../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { createBrand } from '../../service/brandService';
import { storage } from '../../firebase/config';
import { ref,getDownloadURL, uploadBytes } from 'firebase/storage';

const CreateBrand = () => {
    const brands = useSelector(s => s.brandReducer.brands)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [image,setImage] = useState();
    const [addBrands, setAddBrands] = useState(null)
    // const [isTrue,setIsTrue] = useState(false);

   
    const handlerChange = (e) => {
        setAddBrands({
            ...addBrands,
            [e.target.name]: e.target.value
        })
    };
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
    };
    const handlerCreate = async (e) => {
        // if(addBrands == null || addBrands == "") {
        //     setIsTrue(true)
        // }  else {
        //     createBrand(addBrands, dispatch)
        //     navigate("/admin/brands")

        // }
        let imageUpload = image;
        if (imageUpload) {
            const imageRef = ref(storage,`image/${imageUpload?.name}`);
            uploadBytes(imageRef,imageUpload).then((snapshot) =>{
                getDownloadURL(snapshot.ref).then((url) => {
                    brands.image = url;
                    createBrand(brands,dispatch)
                })
            })
        }
        navigate('/admin/brands')
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
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="description"
                                       className="block text-sm font-medium text-neutral-900">Description</label>
                                <input onChange={(e) => {
                                    handlerChange(e) 
                                }}
                                       type="text" name="description" id="description" autoComplete="given-name"
                                       className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                            </div>
                            {/* <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-neutral-900">Image</label>
                                <input onChange={(e) => {
                                    handlerChange(e) 
                                }}
                                       type="text" name="name" id="name" autoComplete="given-name"
                                       className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                            </div> */}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="block text-sm font-medium text-neutral-900">Upload file</label>
                                <input onChange={(e) => {
                                    handlePreviewAvatar(e)
                                }}
                                       type="file" name="file" id="rating" autoComplete="given-name"
                                       className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
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

export default CreateBrand;