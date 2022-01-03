// react hooks
import { useState, useEffect } from "react";

// next.js
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// react-icons
import { MdDryCleaning, MdCleanHands } from "react-icons/md";
import { MdCall } from "react-icons/md";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//i18-next
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// i18-next Static props function
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'home']))
    }
  }
}

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="dark:bg-skin-dark_secondary_bg">
      <Head>
        <title>Ideal Cleaning | About</title>
      </Head>

      <Navbar />
      <div className="">
        {/* breadcrumb */}
        <header className="flex items-center px-8 md:px-20 lg:px-32 py-5 font-medium bg-[#f3f4f6] dark:bg-skin-dark_secondary_bg dark:shadow-md space-x-4">
          <h5
            onClick={() => router.push("/")}
            className="text-skin-main cursor-pointer"
          >
            {t("home:nav_home")}
          </h5>
          <span className="text-xl">›</span>
          <p className="text-skin-muted dark:text-skin-dark_text_muted">{t("home:nav_about")}</p>
        </header>

        <main className="g">
          <section className="max-w-7xl mx-auto px-8 lg:px-0">
            {/* Biz haqimizda */}
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl py-5 md:py-8 text-skin-base dark:text-skin-dark_text_muted font-semibold">
                {t("about:about_us_heading")}
              </h1>
              <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
               {t("about:about_us_p")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10">
              <img
                className="rounded-md hover:scale-105 transform transition duration-300 filter dark:brightness-[80%]"
                width={500}
                src="https://i1.wp.com/f1-styx.imgix.net/article/2019/07/02123220/mypurplebag.jpg?fit=1000%2C616&ssl=1"
                alt=""
              />
              <div className="space-y-3">
                <h3 className="text-2xl lg:text-4xl font-medium text-skin-main dark:text-skin-dark_text_muted">
                {t("about:about_year_experience")}
                </h3>

                <p className="text-skin-muted dark:text-skin-dark_text text-sm font-medium">
                {t("about:about_exp_p1")}
                </p>

                <p className="text-skin-muted dark:text-skin-dark_text text-sm font-medium">
                {t("about:about_exp_p2")}
                </p>

                <button
                  onClick={() => router.push("/contact")}
                  className="main--btn"
                >
                  {t("about:about_contact_btn")}
                </button>
              </div>
            </div>

            {/* Maqsad va vazifalar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 py-8 items-center">
              <div className="flex space-x-3 items-center">
                <MdCleanHands className="text-[6rem] md:text-[8rem] text-skin-main" />
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-skin-base dark:text-skin-dark_text_muted">
                  {t("about:about_goal_heading")}
                  </h3>
                  <p className="font-medium text-skin-muted  dark:text-skin-dark_text">
                  {t("about:about_goal_p")}
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 items-center">
                <MdDryCleaning className="text-[6rem] md:text-[8rem] text-skin-main" />
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-skin-base dark:text-skin-dark_text_muted">
                  {t("about:about_mission_heading")}
                  </h3>
                  <p className="font-medium text-skin-muted  dark:text-skin-dark_text">
                  {t("about:about_mission_p")}
                  </p>
                </div>
              </div>
            </div>

            {/* Tozalash Hizmatimiz Tarixi */}
            <div className="pt-10">
              <div className="text-center text-skin-muted dark:text-skin-dark_text_muted">
                <h1 className="text-2xl md:text-4xl py-4 text-skin-base dark:text-skin-dark_text_muted font-semibold">
                {t("about:about_history_heading")}
                </h1>
                <p className="text-xl font-semibold py-3">
                {t("about:about_history_strong_p")}
                </p>
                <p className="text-xs md:text-sm font-medium ">
                {t("about:about_history_p")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 text-center md:text-left">
                <p className="text-skin-muted dark:text-skin-dark_text font-medium">
                {t("about:about_history_article1")}
                </p>
                <p className="text-skin-muted dark:text-skin-dark_text font-medium">
                {t("about:about_history_article2")}
                </p>
                <p className="text-skin-muted dark:text-skin-dark_text font-medium">
                {t("about:about_history_article3")}
                </p>
              </div>
            </div>

            {/* history */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
              <div className="space-y-3">
                <h3 className="text-2xl lg:text-4xl font-medium text-skin-main dark:text-skin-dark_text_muted">
                {t("about:about_history_heading")}
                </h3>

                <p className="text-skin-muted  dark:text-skin-dark_text text-sm font-semibold">
                {t("about:about_history_strong_p")}
                </p>

                <p className="text-skin-muted dark:text-skin-dark_text text-sm font-semibold">
                {t("about:about_history_p")}
                </p>

                <button
                  onClick={() => router.push("/contact")}
                  className="main--btn"
                >
                  {t("about:about_contact_btn")}
                </button>
              </div>
              <div className="hover:scale-105 transform transition duration-300 relative">
                <img
                  className="rounded-md filter dark:brightness-[80%]"
                  width={500}
                  src="https://img.joybuy.ru/max/x/z/peok8hvgsgzx.jpg"
                  alt=""
                />
                <img
                  className="absolute -top-8 md:-top-10 right-0 sm:right-20 md:right-0 lg:right-10 xl:right-32 rounded-full w-20 md:w-24 lg:w-32 filter dark:brightness-[80%]"
                  src="https://toppng.com/uploads/preview/house-spouse-100-satisfaction-guaranteed-arizona-100-satisfaction-ico-11563585062bqlaa1hjdn.png"
                  alt=""
                />
              </div>
            </div>

            {/* call */}
            <div className="items-center justify-around  sm:pb-6  rounded-md">
              <div className="sm:text-center lg:text-left">
                <p className="text-skin-base  dark:text-skin-dark_text mb-2 text-xl font-medium">
                {t("about:about_call_now")}
                </p>
                <div className="flex text-skin-main dark:text-skin-dark_text_muted text-2xl lg:text-4xl transition-all duration-300 font-semibold sm:justify-center lg:justify-start">
                  <div className="relative">
                    <MdCall className="text-2xl lg:text-3xl mt-1 mr-3" />
                  </div>
                  <a href="tel:872-223-2876">+998 99 999 00 00 | 7/24</a>
                </div>
              </div>
            </div>

          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
