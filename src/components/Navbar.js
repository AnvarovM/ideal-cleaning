// react hooks
import { useState, useEffect, useRef } from "react";

// nav data for map
import { navItems } from "../components/Data/navData";


// react-icons
import { HiOutlineMenuAlt3, HiUserCircle } from "react-icons/hi";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

import ReactCountryFlag from "react-country-flag"

// hero icons
import {
  LocationMarkerIcon,
  PhoneIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon
} from "@heroicons/react/solid";
import { GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";

// next.js
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

// next-auth
import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [topNav, setTopNav] = useState(true);
  const [show, setShow] = useState(true);
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const [sesssion] = useSession();
  const { systemTheme, theme, setTheme } = useTheme();


  const renderChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon className="w-8 h-8 text-skin-dark_text animate-pulse" role='button' onClick={() => setTheme('light')} />
      )
    }else{
      return (
        <MoonIcon className="w-8 h-8 text-[#5a606d] text-skin-dark_text_muted" role='button' onClick={() => setTheme('dark')} />
      )
    }
  }

  const logoChange = (props) => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'light'){
      return (
        <div className="relative flex items-center space-x-1 cursor-pointer group">
            <img className="w-10 md:w-12 h-auto transition duration-300 transform group-hover:rotate-12" src="/static/img/logo.png" alt="logo" />
            <img className="w-20 md:w-24 lg:24 mt-2" src="/static/img/logo-text.png" alt="" />
        </div>
      )
    }else{
      return(
        <img className="w-24 my-2 md:w-36 h-auto cursor-pointer transition duration-300 transform group-hover:rotate-12" src="/static/img/logo-with-text.png" alt="logo" />
      )
    }
  }

  // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  
  // scroll animation
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);


  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {/* top nav */}
      <div className={topNav ? "bg-gray-50 dark:bg-skin-dark_main_bg" : "hidden"}>
        <div className="mx-8 md:mx-20 lg:mx-32 py-1 lg:py-2 border-b dark:border-gray-500 flex justify-between">
          <div className="flex items-center space-x-4 text-skin-muted dark:text-skin-white">
            <span className="items-center hidden md:inline-flex space-x-1"> <LocationMarkerIcon className="h-4" /> <p className="text-xsfont-medium">Gorod: Sharof Rashidov Shox Ko'chasi</p> </span>
            <span className="flex items-center space-x-1"> <PhoneIcon className="h-4" /> <p className="text-xs font-medium">+99899 999 00 00</p> </span>
          </div>
          <div className="flex items-center space-x-3 text-skin-muted dark:text-skin-white">
            <FaTelegramPlane className="text-xs md:text-base cursor-pointer" />
            <FaFacebookF className="text-xs md:text-base cursor-pointer" />
            <FaInstagram className="text-xs md:text-base cursor-pointer" />
            <IoIosClose
              onClick={() => setTopNav(!topNav)}
              className="cursor-pointer hover:text-red-500"
            />
          </div>
        </div>
      </div>

      {/* navbar */}
     <navbar className="nav">
        <div
          onClick={() => router.push("/")}
        >
          {logoChange()}
        </div>
          <div className="flex items-center">
            <ul className="hidden lg:inline-flex">
              {navItems.map((item) => (
                <li key={item.id} className="mx-4">
                  <a
                    onClick={() => router.push(`${item.path}`)}
                    className="relative text-base text-skin-base dark:text-skin-dark_text font-semibold uppercase cursor-pointer hover:text-skin-main transition duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* navbar right icons */}
            <div className="flex items-center md:space-x-1">
              {/* dark mode icon */}
              <div className="p-2 hover:bg-gray-300 dark:hover:bg-white rounded-3xl group">
                {renderChangeTheme()}
              </div>
              
              {/* multi-language */}
              {/* <p className="cursor-pointer" onClick={() => router.push('/ru', '/ru', { locale: 'ru' })}>ru</p> */}
              <div onClick={() => setOpenLanguage(!openLanguage)} className="relative p-2 hover:bg-gray-300 dark:hover:bg-white rounded-3xl">
                <GlobeAltIcon className="h-8 cursor-pointer text-gray-500 dark:text-skin-dark_text hover:text-neutral-800" />
                <div
                  className={
                    openLanguage
                      ? "absolute top-16 md:top-[5rem] right-0 w-[130px] lg:w-[150px] bg-skin-white dark:bg-skin-dark_main_bg shadow-md p-2 lg:p-4 rounded-md"
                      : "hidden"
                  }
                >
                  <h3 onClick={sesssion ? signOut : signIn} className="cursor-pointer text-skin-muted text-sm font-medium hover:text-gray-400 uppercase"></h3>
                  <div onClick={() => router.push('/uz', '/uz', { locale: 'uz' })} className="flex items-center cursor-pointer space-x-2 mb-1">
                    <ReactCountryFlag
                      className="emojiFlag py-2"
                      countryCode="Uz"
                      style={{
                          fontSize: '1.5rem',
                          lineHeight: '1.5rem',
                      }}
                      aria-label="United States"
                    />
                    <p className="text-gray-500 text-sm font-semibold">O'zbekcha</p>
                  </div>
                  <hr />
                  <div onClick={() => router.push('/ru', '/ru', { locale: 'ru' })} className="flex items-center cursor-pointer space-x-2 mt-1">
                    <ReactCountryFlag
                      className="emojiFlag py-2"
                      countryCode="Ru"
                      style={{
                          fontSize: '1.5rem',
                          lineHeight: '1.5rem',
                      }}
                      aria-label="United States"
                    />
                    <p className="text-gray-500 text-sm font-semibold">Русский</p>
                  </div>
                </div>
              </div>
              
              {/* login icon */}
              <div className="relative">
                {sesssion ? (
                  <img
                    className="cursor-pointer h-10 sm:h-11 rounded-full transform hover:scale-105 transition duration-300 text-5xl text-gray-400 dark:text-skin-white ml-3"
                    onClick={() => setOpenUser(!openUser)}
                    src={sesssion?.user?.image}
                  />
                ) : (
                  <div onClick={() => setOpenUser(!openUser)} className="flex items-center md:space-x-1 py-2 px-2 md:px-3 md:bg-gray-200 hover:bg-gray-300 md:dark:bg-white rounded-3xl">
                      <MenuIcon className="hidden md:inline cursor-pointer h-7 text-gray-500 dark:hover:text-neutral-800" />
                      <UserCircleIcon className="cursor-pointer h-8 text-gray-500 md:text-gray-500 dark:text-skin-dark_text md:dark:hover:text-neutral-800" />
                  </div>
                )}
                <div
                  className={
                    openUser
                      ? "absolute top-16 md:top-[5rem] right-0 w-[130px] lg:w-[150px] bg-skin-white shadow-md p-2 lg:p-4 rounded-md"
                      : "hidden"
                  }
                >
                  <h3
                    onClick={sesssion ? signOut : signIn}
                    className="cursor-pointer text-skin-muted text-sm font-medium hover:text-gray-400 uppercase"
                  >
                    {!sesssion ? "Kirish" : "Chiqish"}
                  </h3>
                  <hr />
                  <p className="text-xs pt-2 truncate dark:text-gray-600">
                    {sesssion ? `${sesssion.user.name}` : "User Name"}
                  </p>
                </div>
              </div>
            </div>

            {/* phone menu icon */}
            <HiOutlineMenuAlt3
              onClick={() => setOpenNav(!openNav)}
              className="block lg:hidden cursor-pointer ml-2 text-3xl dark:text-skin-white"
            />
            <div>
          </div>
        </div>
      </navbar>

      {/* menu navbar for phone version */}
      {navItems.map((item) => (
        <div
          key={item.id}
          className={openNav ? "z-40 bg-white dark:bg-skin-dark_main_bg shadow-lg" : "hidden"}
        >
          <p
            onClick={() => router.push(`${item.path}`)}
            className="cursor-pointer flex flex-col z-40 font-medium uppercase px-8 md:px-20 lg:px-32 py-4 hover:bg-gray-200 dark:hover:bg-skin-dark_secondary_bg border-l-4 border-t border-b border-l-transparent hover:border-gray-500"
          >
            {item.title}
          </p>
        </div>
      ))}

      {/* to top icon */}
      <div className={show ? "top top-hidden" : "top"}>
        <a href="#">
          <BsChevronUp className="text-skin-base dark:text-skin-dark_text stroke-current stroke-2 h-10 w-10 md:h-12 md:w-12 p-3 border-2 border-skin-base dark:border-skin-dark_text rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
