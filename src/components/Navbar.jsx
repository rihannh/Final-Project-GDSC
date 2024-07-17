// import Logo from "../assets/images/logo-with-text.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { NavigationItems } from '../utils/NavigationItems'

const Navbar = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isNavbarFixed, setNavbarFixed] = useState(false);

    const toggleNavVisibility = () => {
        setNavVisible(!isNavVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            const fixedNav = document.querySelector('header').offsetTop;
            if (window.pageYOffset > fixedNav) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-50 ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
            <div className="container py-4 lg:py-0">
                <div className="flex items-center justify-between relative">
                    <img src="../../public/vite.svg" alt="logo" className="h-12" />
                    <div className="flex items-center">
                        <button id="mobile-nav" className="block absolute top-1/2 -translate-y-1/2 right-4 lg:hidden" onClick={toggleNavVisibility}>
                            <RiMenu3Fill size={30} className="text-slate-500" />
                        </button>
                        <nav id="nav-menu"
                            className={`${isNavVisible ? '' : 'hidden'} lg:block lg:static lg:bg-transparent max-w-full lg:shadow-none lg:rounded-none absolute py-5 shadow-lg rounded-lg w-full top-full translate-y-3 lg:translate-y-0 left-0 bg-white border border-gray-300 lg:border-none`}
                        >
                            <ul className="block lg:flex  gap-x-14">
                                {NavigationItems && Array.isArray(NavigationItems) && NavigationItems.map((item) => (
                                    <a key={item.name}>
                                        <li className={`${item.name == 'Home' ? 'text-cyan-500' : 'text-slate-500'} text-base font-medium py-2 px-8 lg:px-0 hover:text-cyan-500 duration-300 cursor-pointer`}>
                                            {item.name}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
