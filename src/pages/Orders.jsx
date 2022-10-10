import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from '../components';

const Orders = () => {
    const list = useSelector(s => s.orderReducer.orders)
    console.log(list);
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Orders" />
            <table className="min-w-full leading-normal ">

                <thead>
                    <tr>
                        <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">#</td>
                        <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ID</td>
                        <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</td>
                        <td className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Totals</td>
                        <td className=" px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((order, index) => (
                        <tr key={order._id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{index + 1}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><Link>{order?.ID}</Link></td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.userId.name}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${order.content.totals}</td>

                            <td className="px-4 py-2 border-b border-gray-200 bg-white text-sm">
                                <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>

                                    Cancel
                                </button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};
export default Orders;
