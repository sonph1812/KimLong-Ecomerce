import React from 'react';
import {Header} from '../components';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createProduct, deleteProduct, getAllProduct, getDetailProduct, updateProducts} from "../service/productService";
import {useNavigate} from "react-router-dom";
import Search from '../components/Search';
import {setProductSearch} from "../reducer/slice/productSlice"
import {IoAddCircleOutline, IoInformationCircleOutline, IoReloadOutline, IoTrashOutline} from "react-icons/io5";

const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const list = useSelector(state => state.productReducer.products)
    const listSearch = useSelector(s => s.productReducer.listSearch)
    const [products, setProduct] = useState([])
    const role = localStorage.getItem('role')
    useEffect(() => {
        if (listSearch) {
            setProduct(listSearch)
        }
    }, [listSearch])

    useEffect(() => {
        setProduct(list)
    }, [list])
    const handelProduct = () => {
        dispatch(setProductSearch(null))
        setProduct(list)
    }
    const handleDelete = (id) => {
        deleteProduct(dispatch, id);
    }
    const handlerCreate = (data) => {
        createProduct(dispatch, data)
        navigate('/admin/editor')
    }
    const handleUpdate = (id) => {
        getDetailProduct(dispatch, id)
        navigate(`/admin/editProducts/${id}`)
    }
    const handleGetDetail = (id) => {
        navigate(`productDetail/${id}`)
    }

    return (

        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

            <div onClick={() => {
                handelProduct()
            }}>
                <Header category="Page" title="Products"/>

            </div>

            <Search list={list} model="product"></Search>


            <table className="min-w-full leading-normal ">

                <thead>
                <tr>
                    <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
                    {/*<td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</td>*/}
                    {/*<td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>*/}
                    {/*<td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</td>*/}
                    {/*<td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</td>*/}
                    <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Stock</td>
                    <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Brand</td>
                    <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</td>
                    <td colSpan={3}
                        className=" text-center px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}">Action
                    </td>
                </tr>
                </thead>
                <tbody>
                {role && products.map((product, index) => (
                    <tr key={product._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.name}</td>
                        {/*<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>*/}
                        {/*<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>*/}
                        {/*<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>*/}
                        {/*<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><img src={product.image}/>*/}
                        {/*</td>*/}
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.stock} </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.brandId?.name}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.categoryId?.name} </td>

                        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <IoAddCircleOutline   onClick={() => {
                                handlerCreate()
                            }}></IoAddCircleOutline>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <IoReloadOutline  onClick={() => {
                                handleUpdate(product._id)
                            }}></IoReloadOutline>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <IoTrashOutline onClick={() => {
                                handleDelete(product._id)
                            }}></IoTrashOutline>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                            <IoInformationCircleOutline onClick={()=>{handleGetDetail(product._id)}}>

                            </IoInformationCircleOutline>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};
export default Products;
