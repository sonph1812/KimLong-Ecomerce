import { Outlet, useNavigate } from "react-router-dom"
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { getAllStaff, getAllUser } from "../../service/userService";
import { getAllOrder } from "../../service/orderService";
import { useSelector } from "react-redux";
function Admin() {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const dispatch = useDispatch()
    const isLoginYet = useSelector(s => s.userReducer.isLogin)

    useEffect(() => {
        if (!role) {
            navigate('/login')
        } else {
            if (role == "user") {
                navigate('/error')
            } else {
                const currentThemeColor = localStorage.getItem('colorMode');
                const currentThemeMode = localStorage.getItem('themeMode');
                if (currentThemeColor && currentThemeMode) {
                    setCurrentColor(currentThemeColor);
                    setCurrentMode(currentThemeMode);
                }
            }
        }
    }, []);


    useEffect(() => {

        if (isLoginYet) {

            if (role == "admin") {
                getAllStaff(dispatch)
                getAllUser(dispatch)
            } else if (role == "accountant") {
                getAllOrder(dispatch)
            }
        }
    }, [isLoginYet]);
    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent
                        content="Settings"
                        position="Top"
                    >
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: '50%' }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>

                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>
                    <div>
                        {themeSettings && (<ThemeSettings />)}

                        <Outlet></Outlet>
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}
export default Admin