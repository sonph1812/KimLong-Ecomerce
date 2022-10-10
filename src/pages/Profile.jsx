import { useSelector } from "react-redux"

function Profile(){
    const userInfo = useSelector(s => s.userReducer.userInfo);
    console.log(userInfo)
    return (<div>
        <h1>alo</h1>
        <p>{userInfo.name}</p>
    </div>)
}
export default Profile;