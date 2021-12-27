import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { navItems } from "../components/Data/navData";

export default function Home() {
  const router = useRouter();
  return (
    <div className="dark:bg-skin-dark_secondary_bg">
      <Head>
        <title>Ideal Cleaning | Services</title>
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
          <p className="text-skin-muted dark:text-skin-dark_text_muted">Xizmatlar</p>
        </header>

      <main>
        <section className="max-w-7xl mx-auto px-8 lg:px-0">
          {/* services heading */}
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl py-5 md:py-8 text-skin-base dark:text-skin-dark_text_muted font-semibold">
              Bizning Xizmatlarimiz
            </h1>
            <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
              Sizning xodimlaringiz, mijozlaringiz va mehmonlaringiz uchun toza
              va sog'lom muhitni ta'minlash uchun ko'p yillik tajribamiz, <br />{" "}
              malakali xodimlarimiz va ilg'or protseduralarimizdan
              foydalanaylik.{" "}
            </p>
          </div>

          {/* services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 gap-4 lg:gap-8 lg:grid-rows-2 py-8 md:py-14">
            <div className="services-card">
              <img className="services-img" src="https://rubashki-muzhskie.ru/images/5620.jpeg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">Ximchistka xizmati</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">Bizning tozalsh xizmatimiz mukammal <br /> tarzda olib biriladi</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://ya-arhangelsk.ru/unimages/himchist/13.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">Akvachistka xizmati</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">Bizning tozalsh xizmatimiz mukammal <br /> tarzda olib biriladi</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://alterainvest.ru/upload/iblock/80c/80c45d562b0f8e6d6fbb760621bb6101.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">Ximchistka xizmati</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">Bizning tozalsh xizmatimiz mukammal <br /> tarzda olib biriladi</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://rubashki-muzhskie.ru/images/5620.jpeg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">Ximchistka xizmati</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">Bizning tozalsh xizmatimiz mukammal <br /> tarzda olib biriladi</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://ya-arhangelsk.ru/unimages/himchist/13.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">Akvachistka xizmati</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">Bizning tozalsh xizmatimiz mukammal <br /> tarzda olib biriladi</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://alterainvest.ru/upload/iblock/80c/80c45d562b0f8e6d6fbb760621bb6101.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">Ximchistka xizmati</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">Bizning tozalsh xizmatimiz mukammal <br /> tarzda olib biriladi</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
