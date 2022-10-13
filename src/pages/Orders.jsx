import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import { cancelOrder, okOrder } from '../service/orderService';

const Orders = () => {
    const list = useSelector(s => s.orderReducer.orders)
    const dispatch = useDispatch()
    const handelDel = (id,index) => {
        cancelOrder(id,index,dispatch)
    }
    const handelOk = (id,index) => {
        okOrder(id,index,dispatch)
    }
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Orders" />
            <table className="min-w-full leading-normal ">

                <thead>
                    <tr>
                        <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">#</td>
                        <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Khách hàng</td>
                        <td className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Tổng tiền</td>
                        <td className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Trạng thái</td>
                        <td colSpan={2} className=" px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Hành động</td>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((order, index) => (
                        <tr key={order._id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{index + 1}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.userId.name}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${order.content?.totals}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.status}</td>

                            <td   className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                                <button 
                                    onClick={()=>{handelDel(order._id,index)}}
                                className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md" >


                                    Cancel
                                </button>
                            </td>
                            <td className="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                                <button
                                    onClick={()=>{handelOk(order._id,index)}}
                                className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-red-700 text-white text-sm font-medium rounded-md" >


                                    Xác nhận
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};
export default Orders;
