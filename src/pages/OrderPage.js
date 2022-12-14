

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Steps from "../components/Steps";
import React from "react";
import { sendOrder } from "../service/orderService";



function OrderPage() {
  const order = useSelector(s => s.orderReducer.order)
  const userInfo = useSelector(s => s.userReducer.userInfo)
  const navigate = useNavigate()
  const handelBuy = () => {
    navigate('/myOrder')
  }
  console.log(userInfo);
  return (
    <div>
      <Steps step3 />


<div className="pl-40">

    <div className="section-center py-12 md:py-16 lg:py-20 ">
        <h2 className="mb-12 text-2xl md:text-3xl lg:text-4xl font-bold break-words">
            <p className="text-gray-700"> Mã đơn hàng: {order.userId}</p>

        </h2>
        <div className="flex flex-wrap items-center -mx-4 border-amber-900">
            {/* Order summary */}
            <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4 ">
                {/* Address */}
                <div className=" py-6 border-b border-gray-200">
                    <p className="text-xl font-bold mb-5">Phương thức vận chuyển</p>
                    {/*<p className="mb-3">*/}
                    {/*    <strong>Name: </strong>*/}
                    {/*</p>*/}
                    {/*/!*)}*!/*/}
                    {/*<p className="mb-3">*/}
                    {/*    <strong>Email: </strong>{' '}*/}
                    {/*</p>*/}
                    {/*/!*{orderDetails && (*!/*/}
                    {/*<p className="capitalize mb-3">*/}
                    {/*    <strong>Address: </strong>*/}

                    {/*</p>*/}
                    {/*/!*)}*!/*/}
                    {order.shipping ? (
                        <p className="capitalize bg-amber-100">
                            <strong>Đơn vị: {order.shipping}</strong>
                        </p>
                    ) : (
                        <p className="capitalize text-tertiary-500 bg-red-200">
                            <strong>Chưa vận chuyển</strong>
                        </p>
                    )}
                </div>
                {/*Payment method*/}
                <div className="py-6 border-b border-gray-200">
                    <p className="text-xl font-bold mb-5 ">Phương thức thanh toán</p>

                    {/*{order.payment && (*/}
                    <p className="capitalize mb-3">
                        <strong>Phương thức thanh toán: {order.payment} </strong>
                        {/*{orderDetails.paymentMethod}*/}
                    </p>

                    {order.payment && order.payment === 'done' ? (
                        <p className="capitalize bg-amber-100">
                            <strong>Trạng thái: </strong> Đã hoàn tất
                        </p>
                    ) : (
                        <p className="capitalize text-tertiary-500 bg-red-200">
                            <strong> Chưa thanh toán</strong>
                        </p>
                    )}
                </div>
            </div>
        </div>
    </div>
    <button
        onClick={()=>{handelBuy()}}
    >Danh sách đơn hàng</button>
</div>





    </div>
  )
}
export default OrderPage;

