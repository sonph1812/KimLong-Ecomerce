import {  Link, Outlet } from "react-router-dom";
import Search from "../../components/user/search/Search";
function Admin({users, userInfo}) {
    return (
        <div>
            <div>
                <Link to="listUser">List User</Link><br/>
                <Link to="listStaff">List Staff</Link><br/>
                <Link to="myProfile">My Profile</Link><br/>
                <Link to="addStaff">Add Staff</Link><br/>
            </div>
            <div>
                hello {userInfo.name}
            </div>
            <Search list ={users} model = {'user'}></Search>
            <div >
                <Outlet />
            </div>
        </div>
    )
}
export default Admin;