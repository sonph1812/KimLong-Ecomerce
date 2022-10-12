import { useDispatch, useSelector } from "react-redux"
import { deleteOrder } from "../service/orderService"
import Steps from "../components/Steps";

function MyOrderPage() {
    const orders = useSelector(s => s.orderReducer.orders)
    console.log(orders)
    const dispatch = useDispatch()
    const handelDelete = (id,index) => {
        deleteOrder(id,index,dispatch)
    }
    return (
    <div>
        <Steps step4/>

        <table className="w-full">
            <thead >
            <tr className="bg-black w-1/2">
                <th className="px-16 py-2">
                    <span className="text-gray-300">Mã đơn hàng</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-300">Khách hàng</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-300">Phương thức vận chuyển</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-300">Trạng thái</span>
                </th>
            </tr>
            </thead>
            <tbody className="justify-between w-full">

            {
                        orders.map((order,index) => (
                            <tr className="bg-white border-4 border-gray-200">
                                <td className="px-16 py-2 text-center">{order._id}</td>
                                <td className="px-16 py-2 text-center">{order.userId.name}</td>
                                <td className="px-16 py-2 text-center">{order.shipping}</td>
                                <button  className="bg-indigo-500  text-center text-white px-10 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black "
                                    onClick={()=>{handelDelete(order._id,index)}}
                                >Hủy đơn hàng</button>
                            </tr>
                        ))
                    }

            </tbody>
        </table>
    </div>
        
        
    )
}
export default MyOrderPage