import React, {useEffect} from "react";
import Header from "../components/Header";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProduct, getDetailProduct, updateProducts} from "../service/productService";
import {useNavigate, useParams} from "react-router-dom";

const EditProducts = () => {
    let navigate = useNavigate()
    let {id} = useParams();
    const dispatch = useDispatch();
    const item = useSelector((state) => state.productReducer.product)
    const brands = useSelector(s => s.brandReducer.brands)
    const categories = useSelector(s => s.categoryReducer.categories)
    const [product, setProduct] = useState(item)

    useEffect(() => {
        getDetailProduct(dispatch, id)
    }, [])
    useEffect(() => {
        setProduct(item)
    }, [item])


    const handeEdit = () => {
        updateProducts(dispatch, {product: product, id: id})
        navigate('/admin/products')

    }
    return (
        <div>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <Header/>
                <form>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="name"
                                           className="block text-sm font-medium text-neutral-900">Name</label>
                                    <input onChange={(e) => setProduct({...product, name: e.target.value})}
                                           type="text" name="name" id="name" autoComplete="given-name"
                                           value={product?.name}
                                           className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price"
                                           className="block text-sm font-medium text-neutral-900">Price</label>
                                    <input onChange={(e) => setProduct({...product, price: e.target.value})}
                                           type="text" name="price" id="price" autoComplete="given-name"
                                           value={product?.price}

                                           className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="description"
                                           className="block text-sm font-medium text-neutral-900">Description</label>

                                    <input onChange={(e) => setProduct({...product, description: e.target.value})}
                                           type="text" name="description" id="description"
                                           autoComplete="street-address"
                                           value={product?.description}

                                           className="mt-1  px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="rating"
                                           className="block text-sm font-medium text-neutral-900">Rating</label>
                                    <input onChange={(e) => setProduct({...product, rating: e.target.value})}
                                           type="text" name="rating" id="rating" autoComplete="given-name"
                                           value={product?.rating}
                                           className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium text-neutral-900">Stock</label>
                                    <input onChange={(e) => setProduct({...product, stock: e.target.value})}
                                           type="text" name="stock" id="first-name" autoComplete="given-name"
                                           value={product?.stock}
                                           className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        className="block text-sm font-medium text-neutral-900">Upload file</label>
                                    <input onChange={(e) => setProduct({...product, image: e.target.value})}

                                           type="file" name="file" id="rating" autoComplete="given-name"
                                           className="mt-1 px-3 py-3 block w-full rounded-md border-neutral-900 shadow-sm focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"/>
                                </div>

                                <div>
                                    <label htmlFor="states" className="sr-only">Brand</label>
                                    <select id="states"
                                            onChange={(e) => setProduct({...product, brandId: e.target.value})}
                                            value={product?.brandId}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Brand</option>
                                        {brands && brands.map((brand) => (
                                            <option value={brand._id}>{brand?.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="states" className="sr-only">Category</label>
                                    <select id="states"
                                            onChange={(e) => setProduct({...product, categoryId: e.target.value})}
                                            value={product?.categoryId}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Category</option>
                                        {categories && categories.map((category) => (
                                            <option value={category._id}>{category?.name}</option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                className="inline-flex justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={(e) => {
                                    handeEdit(e)
                                }}>Edit
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default EditProducts;