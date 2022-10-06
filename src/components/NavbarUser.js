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
      <div className="section-center py-5">
        <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
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
              Reverie
            </span>
          </a>

          {/* Right links */}
          <ul className="items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <CartBtn />
            </li>
            {loginUser ? (
              <>
                <li className="bg-black text-white">
                  {loginUser.role === 'admin' ? <AdminMenu /> : <UserMenu />}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    aria-label="Log in"
                    title="Log in"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    onClick={closeMenu}
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
                    onClick={closeMenu}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Mobile Nav */}
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => openMenu()}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    {/* Reverie logo,name */}
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
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
                          Reverie
                        </span>
                      </a>
                    </div>

                    {/* Close menu btn */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={closeMenu}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 flex-col">
                      {/* Home */}
                      <li>
                        <a
                          href="/"
                          aria-label="Homepage"
                          title="Homepage"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </a>
                      </li>

                      {/* Features */}
                      <li>
                        <a
                          href="/#features"
                          aria-label="Our featured products"
                          title="Our featured products"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>

                      {/* New */}
                      <li>
                        <a
                          href="/#new"
                          aria-label="Our new product"
                          title="Our new product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          New
                        </a>
                      </li>

                      {/* Products */}
                      <li>
                        <Link
                          to="/products"
                          onClick={closeMenu}
                          aria-label="All products"
                          title="All products"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Products
                        </Link>
                      </li>

                      {/* Cart */}
                      <li className="inline-block">
                        <CartBtn />
                      </li>

                      {/* Dropdown menu OR login, logout btns */}
                      {loginUser ? (
                        <>
                          <li className="bg-black text-white max-w-min">
                            {loginUser.role === 'admin' ? (
                              <AdminMenu />
                            ) : (
                              <UserMenu />
                            )}
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/login"
                              aria-label="Log in"
                              title="Log in"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              onClick={closeMenu}
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
                              onClick={closeMenu}
                            >
                              Register
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
