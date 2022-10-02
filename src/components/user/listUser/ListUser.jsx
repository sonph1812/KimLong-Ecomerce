import { useState } from "react";
import { useDispatch} from "react-redux"
import { deleteUser } from "../../../service/userService";

function ListUser({users, model}) {
    const listUser = users;
    const dispatch = useDispatch()
    const handelDelete = (id,index) => {
        deleteUser(id,index,model,dispatch)
    }
    // const [listPage,setListPage] = useState(1)
    // const limit = 3;
    // const list = (listPage, limit) => {
    //     const x = [];
    //     for(limit*listP){

    //     }
    // }
    return (
        <div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Name</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Role</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Email</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Phone</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Gender</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >DoB</th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >Address</th>
                        <th
                            colSpan={2} className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"
                        >Action</th>

                    </tr>
                </thead>
                <tbody>
                    {listUser.map((user, index) => (
                        <tr key={index}>

                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >
                                <img
                                    className="w-full h-full rounded-full"
                                    src={user.avatar}
                                    alt=""
                                />
                                {user.name}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.roleId.name}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.email}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.phone}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.gender}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.dob}</td>
                            <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >{user.address}</td>
                            <td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <button className="absolute px-10  bg-green-200 opacity-50 rounded-full row">Edit</button>
                            </td>
                            <td className=" text-center px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <button className="absolute  px-5 bg-red-200 opacity-50 rounded-full row" onClick={()=>{handelDelete(user._id,index)}}>Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div >
    )
}
export default ListUser