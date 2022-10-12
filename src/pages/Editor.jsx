import React, {useState} from 'react';
import {Header} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../service/productService";
import {useNavigate} from "react-router-dom";
import { storage } from "../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const Editor = () => {
  const brands = useSelector(s => s.brandReducer.brands)
    const categories = useSelector(s => s.categoryReducer.categories)
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const dispatch = useDispatch()
    const [products, setProducts] = useState(null)
    const handlerChange = (e) => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }
    const handlerCreate = async (e) => {
        e.preventDefault()
        let imageUpload = image;
        if (imageUpload) {
            const imageRef = ref(storage, `images/${imageUpload?.name}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    products.image = url;
                    createProduct(products, dispatch);
                });
            });
        }
        navigate('/admin/products')
    }
const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    // file.preview = URL.createObjectURL(file);
    setImage(file);
};

return (
    <div>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header/>
            <form method="POST">
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
                                <label htmlFor="price"
                                       className="block text-sm font-medium text-neutral-900">Price</label>
                                <input onChange={(e) => {
                                    handlerChange(e)
                                }}
                                       type="text" name="price" id="price" autoComplete="given-name"
                                       className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="description"
                                       className="block text-sm font-medium text-neutral-900">Description</label>

                                <input onChange={(e) => {
                                    handlerChange(e)
                                }}
                                       type="text" name="description" id="description"
                                       autoComplete="street-address"
                                       className="mt-1  px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="rating"
                                       className="block text-sm font-medium text-neutral-900">Rating</label>
                                <input onChange={(e) => {
                                    handlerChange(e)
                                }}
                                       type="text" name="rating" id="rating" autoComplete="given-name"
                                       className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="rating"
                                       className="block text-sm font-medium text-neutral-900">Stock</label>
                                <input onChange={(e) => {
                                    handlerChange(e)
                                }}
                                       type="text" name="stock" id="stock" autoComplete="given-name"
                                       className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                            </div>

                            <div>
                                <label htmlFor="states" className="sr-only">Brand</label>
                                <select id="brandId"
                                        name = "brandId" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e)=>{handlerChange(e)}}
                                        >
                                    <option>Brand</option>
                                    {brands && brands.map((brand)=>(
                                        <option value={brand._id}>{brand.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="states" className="sr-only">Category</label>
                                <select id="categoryId"
                                        name = "categoryId"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e)=>{handlerChange(e)}}
                                >
                                    <option>Category</option>
                                    {categories && categories.map((category)=>(
                                        <option value={category._id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <br/>
                        </div>
                    </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                    className="inline-flex justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={handlerCreate}>CREATE
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Editor;
