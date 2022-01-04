// next.js
import Head from "next/head";
import { useRouter } from "next/router";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navItems } from "../components/Data/navData";

//i18-next
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

// i18-next Static props function
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['services', 'home']))
    }
  }
}

export default function Home() {
  // next.js router
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="dark:bg-skin-dark_secondary_bg">

      <Head>
        <title>Ideal Cleaning | Services</title>
      </Head>

      {/* navbar component */}
      <Navbar />

      {/* breadcrumb */}
      <header className="flex items-center px-8 md:px-20 lg:px-32 py-5 font-medium bg-[#f3f4f6] dark:bg-skin-dark_secondary_bg dark:shadow-md space-x-4">
          <h5
            onClick={() => router.push("/")}
            className="text-skin-main cursor-pointer"
          >
            {t("home:nav_home")}
          </h5>
          <span className="text-xl">›</span>
          <p className="text-skin-muted dark:text-skin-dark_text_muted">{t("home:nav_services")}</p>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-8 lg:px-0">

          {/* services heading */}
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl py-5 md:py-8 text-skin-base dark:text-skin-dark_text_muted font-semibold">
            {t("services:services_heading")}
            </h1>
            <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
            {t("services:services_heading_p")}
            </p>
          </div>

          {/* services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 gap-4 lg:gap-8 lg:grid-rows-2 py-8 md:py-14">
            <div className="services-card">
              <img className="services-img" src="https://rubashki-muzhskie.ru/images/5620.jpeg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">{t("services:services_name1")}</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">{t("services:services_p1")}</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://ya-arhangelsk.ru/unimages/himchist/13.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">{t("services:services_name2")}</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">{t("services:services_p2")}</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://alterainvest.ru/upload/iblock/80c/80c45d562b0f8e6d6fbb760621bb6101.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">{t("services:services_name3")}</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">{t("services:services_p3")}</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://rubashki-muzhskie.ru/images/5620.jpeg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">{t("services:services_name4")}</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">{t("services:services_p4")}</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://ya-arhangelsk.ru/unimages/himchist/13.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">{t("services:services_name5")}</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">{t("services:services_p5")}</p>
            </div>
            <div className="services-card">
              <img className="services-img" src="https://alterainvest.ru/upload/iblock/80c/80c45d562b0f8e6d6fbb760621bb6101.jpg" alt="" />
              <h3 className="text-xl dark:text-skin-dark_text font-semibold">{t("services:services_name6")}</h3>
              <p className="text-skin-muted dark:text-skin-dark_text_muted text-sm font-semibold">{t("services:services_p6")}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
