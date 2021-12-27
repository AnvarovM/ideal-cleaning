import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter  } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <div className="dark:bg-skin-dark_secondary_bg">
      <Head>
        <title>Ideal Cleaning | 404</title>
      </Head>

    <Navbar />
    {/* breadcrumb */}
    <header className="flex items-center px-8 md:px-20 lg:px-32 py-5 font-medium bg-[#f3f4f6] dark:bg-skin-dark_secondary_bg dark:shadow-md space-x-4">
          <h5
            onClick={() => router.push("/")}
            className="text-skin-main cursor-pointer"
          >
            Asosiy Sahifa
          </h5>
          <span className="text-xl">›</span>
          <p className="text-skin-muted dark:text-skin-dark_text_muted">404</p>
        </header>
    <div className="flex flex-col items-center justify-center h-screen">
        <img className="pb-32" src="/static/img/404.png" alt="" />
        {/* <button onClick={() => router.push('/')} className="px-4 py-2 lg:py-3 lg:px-8 mt-8 border border-blue-500 text-skin-main  bg-transparent rounded-full  transition duration-300 lg:text-xl font-medium">Asosiy Sahifaga Qaytish</button> */}
    </div>
    <Footer />
    </div>
  );
}
