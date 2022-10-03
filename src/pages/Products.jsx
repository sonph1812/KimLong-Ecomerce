import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllProduct} from "../service/sellerService";

const Products = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    const [isProductYet, setIsProductYet] = useState(false)
    console.log(products)
    useEffect(() => {
        setIsProductYet(true)
        getAllProduct(dispatch)
    }, [])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
      {/*<GridComponent*/}
      {/*  dataSource={employeesData}*/}
      {/*  width="auto"*/}
      {/*  allowPaging*/}
      {/*  allowSorting*/}
      {/*  pageSettings={{ pageCount: 5 }}*/}
      {/*  editSettings={editing}*/}
      {/*  toolbar={toolbarOptions}*/}
      {/*>*/}
      {/*  <ColumnsDirective>*/}
      {/*    /!* eslint-disable-next-line react/jsx-props-no-spreading *!/*/}
      {/*    {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}*/}
      {/*  </ColumnsDirective>*/}
      {/*  <Inject services={[Search, Page]} />*/}

      {/*</GridComponent>*/}



        <table className="min-w-full leading-normal ">
            <thead>
            <tr>
                <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
                <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</td>
                <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</td>
                <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</td>
                <td colSpan={2} className=" text-center px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>

            </tr>
            </thead>
            <tbody>
            {isProductYet && products.map((product) => (
                <tr key={product._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.name}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>

                    {/*<td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">*/}
                    {/*    <button className="absolute px-10  bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded"*/}
                    {/*            onClick="">Edit</button>*/}
                    {/*</td>*/}
                    {/*<td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">*/}
                    {/*    <button  className="absolute  px-10 bg-red-400 opacity-50 rounded-full row hover:bg-red-700 focus:outline-none rounded">Delete</button>*/}
                    {/*</td>*/}
                    <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button className="absolute px-3 bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded">update</button> </td>
                    <td  className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button className="absolute px-3  bg-red-400 opacity-50 rounded-full row hover:bg-red-800 focus:outline-none rounded">delete</button> </td>



                </tr>
            ))}

            </tbody>
        </table>
    </div>
  );
};
export default Products;
