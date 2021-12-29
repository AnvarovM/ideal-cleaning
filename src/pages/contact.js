// next.js
import Head from "next/head";
import { useRouter } from "next/router";

//i18-next
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// react-icons
import { LocationMarkerIcon, PhoneIcon, ClockIcon} from '@heroicons/react/solid'
import { FaTelegram, FaInstagramSquare, FaFacebook } from 'react-icons/fa'
import { MdCall } from "react-icons/md";

// components
import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

// i18-next Static props function
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
    }
  }
}

export default function Home() {

  // next.js router hook
  const router = useRouter();

  return (
    <div className="dark:bg-skin-dark_secondary_bg">
      <Head>
        <title>Ideal Cleaning | Contact</title>
      </Head>

      <Navbar />
      {/* breadcrumb */}
      <header className="flex items-center px-8 md:px-20 lg:px-32 py-5 dark:shadow-md font-medium bg-[#f3f4f6] dark:bg-skin-dark_secondary_bg space-x-4">
          <h5
            onClick={() => router.push("/")}
            className="text-skin-main cursor-pointer"
          >
            Asosiy Sahifa
          </h5>
          <span className="text-xl">›</span>
          <p className="text-skin-muted dark:text-skin-dark_text_muted">Aloqa</p>
      </header>

      <div className="">
        <div className="max-w-7xl mx-auto py-6  md:py-16 px-8 lg:px-0">
          <h1 className="text-2xl md:text-center md:text-4xl py-5  md:pt-8 md:pb-16 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">
            Biz Bilan Bog'lanish
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="space-y-4 lg:space-y-6">
                <div>
                  <p className="flex items-center font-semibold text-xl text-skin-muted dark:text-skin-dark_text_muted"> <span><LocationMarkerIcon className="text-skin-main h-7 mr-3" /></span> Manzil: </p>
                  <p className="text-skin-muted dark:text-skin-dark_text pt-1">Sharof Rashidov Shox Ko'chasi</p>
                  <p className="text-skin-muted dark:text-skin-dark_text pt-1">Mo'ljal Zokir ota Choyxonasi</p>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl py-2 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">Murojaat: 7/24</h1>
                  <p className="flex items-center font-semibold text-xl text-skin-muted dark:text-skin-dark_text"> <span><PhoneIcon className="text-skin-main h-7 mr-3" /></span> +99899 999-00-00 </p>
                  <p className="text-skin-muted dark:text-skin-dark_text pt-1">Elektron pochtamiz: </p>
                  <p className="text-skin-muted dark:text-skin-dark_text pt-1">example@gmail.com</p>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl py-2 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">Ish Kunlarimiz</h1>
                  <p className="flex items-center font-semibold text-xl text-skin-muted dark:text-skin-dark_text"> <span><ClockIcon className="text-skin-main h-7 mr-3" /></span> Ishlash Vaqti </p>
                  <p className="text-skin-muted dark:text-skin-dark_text pt-1">Dush-Shan: 08:00 dan 18:00 gacha</p>
                  <p className="text-skin-muted dark:text-skin-dark_text pt-1">Yak: 10:00 dan 17:00 gacha</p>
                </div>
                <div>
                  <h1 className="text-xl md:text-xl py-2 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">Ijtimoiy Tarmoqlar orqali yozing</h1>
                  <div className="flex space-x-4">
                      <FaTelegram className="text-3xl cursor-pointer text-[#2ba5e0]" />
                      <FaFacebook className="text-3xl cursor-pointer text-[#4870ad]" />
                      <FaInstagramSquare className="text-3xl cursor-pointer text-[#d61a5c]" />
                      <PhoneIcon className="h-8 cursor-pointer text-[#2ba5e0]" />
                  </div>
                </div>
            </div>
            <Map />
          </div>
          <div>
          </div>

          {/* call */}
          <div className="items-center justify-around sm:pb-6 rounded-md py-10">
                <div>
                  <p className="text-skin-base mb-2 text-xl font-medium dark:text-skin-dark_text">
                    Hoziroq Qo'ng'iroq qiling!
                  </p>
                  <div className="flex text-skin-main text-2xl lg:text-4xl font-semibold dark:text-skin-dark_text_muted">
                    <div className="relative">
                      <MdCall className="text-2xl lg:text-3xl mt-1 mr-3" />
                    </div>
                    <a href="tel:872-223-2876">+998 99 999 00 00 | 7/24</a>{" "}
                  </div>
                </div>
              </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
