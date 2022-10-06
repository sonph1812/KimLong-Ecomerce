import { Link } from 'react-router-dom';
// import UserMenu from './UserMenu';
// import AdminMenu from './AdminMenu';
// import { useProductsContext } from '../context/products_context';
// import { useUserContext } from '../context/user_context';
// import CartBtn from './CartBtn';

const NavbarUser = () => {
  // const { isMenuOpen, openMenu, closeMenu } = useProductsContext();
  // const { loginUser} = useUserContext();

  return (
    <div>
      <div className="section-center  bg-white py-5">
        <div className="relative grid items-center  grid-cols-2 lg:grid-cols-3">
          {/* Left links */}
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="HomePage"
                title="HomePage"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#features"
                aria-label="Our featured products"
                title="Our featured products"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#new"
                aria-label="Our new product"
                title="Our new product"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                New
              </a>
            </li>
            <li>
              <Link
                to="/products"
                aria-label="All products"
                title="All products"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Products
              </Link>
            </li>
          </ul>

          {/* Logo */}
          <a
            href="/"
            aria-label="HomePage"
            title="HomePage"
            className="inline-flex items-center lg:mx-auto"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
KIM LONG            </span>
          </a>

          {/* Right links */}
          <ul className="items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              {/*<CartBtn />*/}
            </li>
            {/*{loginUser ? (*/}
              <>
                <li className="bg-black text-white">
                  {/*{loginUser.role === 'admin' ? <AdminMenu /> : <UserMenu />}*/}
                </li>
              </>
            {/*) : (*/}
              <>
                <li>
                  <Link
                    to="/login"
                    aria-label="Log in"
                    title="Log in"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    // onClick={closeMenu}
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    aria-label="Register"
                    title="Register"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    // onClick={closeMenu}
                  >
                    Register
                  </Link>
                </li>
              </>
            {/*)}*/}
          </ul>


        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
