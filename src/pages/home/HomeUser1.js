import { Outlet } from "react-router"
import { Footer } from '../../components';
import NavbarUser from "../../components/NavbarUser";

const HomeUser1 = () => {
    return (
        <div className="relative min-h-screen">
            <NavbarUser />
            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>

    )
}
export default HomeUser1