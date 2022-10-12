import { useDispatch, useSelector } from "react-redux"
import { deleteOrder } from "../service/orderService"

function MyOrderPage() {
    const orders = useSelector(s => s.orderReducer.orders)
    const dispatch = useDispatch()
    const handelDelete = (id,index) => {
        deleteOrder(id,index,dispatch)

    }
    return (
        <div>
            {
                orders.map((order,index) => (
                    <tr>
                        <td>{order.userId.name}</td>
                        <td>{order.shipping}</td>
                        <button
                            onClick={()=>{handelDelete(order._id,index)}}
                        >Delete</button>
                    </tr>
                ))
            }

        </div>
    )
}
export default MyOrderPage