import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addStaff } from "../../../service/userService"

function AddStaff() {
    const dispatch = useDispatch()
    const [staff, setStaff] = useState({})
    const handleChange = (e) => {
        setStaff({
            ...staff,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = () => {
        addStaff(staff, dispatch)
    }
    return (
        <div>
            <p>add staff</p>
            name:<input type="text"  name="name" onChange={(e) => { handleChange(e) }} /><br></br>
            username:<input name="userName" onChange={(e) => { handleChange(e) }}></input><br></br>
            email:<input name="email" onChange={(e) => { handleChange(e) }}></input><br></br>
            password:<input name="password" onChange={(e) => { handleChange(e) }}></input><br></br>
            role:<input name="roleId" onChange={(e) => { handleChange(e) }}></input><br></br>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
export default AddStaff