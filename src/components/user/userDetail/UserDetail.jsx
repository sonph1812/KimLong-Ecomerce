import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getDetailUser } from "../../../service/userService"

function UserDetail() {
    const user = useSelector(state => state.userReducer.user)
    const id = useParams().id;
    const dispatch = useDispatch()
    useEffect(()=>{
        getDetailUser(id,dispatch)
    })
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.name}</p>
            <p>{user.name}</p>
            <p>{user.name}</p>
        </div>
    )
}
export default UserDetail;