import React from "react";

// react icons
import { ImLeaf } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDryCleaning } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

// package
import { Parallax } from "react-parallax";

const Section2 = ({ t }) => {
  return (
    <div>
      {/* Reasons to Choose Us**/}
      <section className="max-w-7xl mx-auto">
        {/* content top */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">
          {t("home:reason_to_choose_heading")}
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
          {t("home:reason_to_choose_p")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 space-y-6 md:space-y-0 md:space-x-8 py-10 md:py-16 px-8 lg:px-0">
          {/* left reason */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div>
              <img
                className="w-[32rem] rounded-md transform hover:scale-105 transition duration-300"
                src="https://jtmservice.co.uk/wp-content/uploads/2018/11/Laundry-Experts.jpg"
                alt=""
              />
            </div>
            <div className="grid gap-2 lg:gap-4">
              <img
                className="w-[14.3rem] md:w-[14.5rem] rounded-md transform hover:scale-105 transition duration-300"
                src="https://vsestiralnie.com/upload/statyi/xcbsrgwt52512.jpg"
                alt=""
              />
              <img
                className="w-[14.3rem] md:w-[14.5rem] rounded-md transform hover:scale-105 transition duration-300"
                src="https://homerenovates.com/f/349aa7f572dd3d5e012f2652b6aed0e6.jpg?width=350&height=222"
                alt=""
              />
            </div>
          </div>

          {/* right reason */}
          <div>
            <p className="reason-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              Yuqor darajali hizmat!{" "}
            </p>
            <p className="font-medium text-sm text-skin-muted  dark:text-skin-dark_text">
              Biz mijozlarimizni qondirish va ularning obligatsiya pullarini
              qaytarish bo'yicha muvaffaqiyatli tajribaga egamiz.{" "}
            </p>
            <p className="reason-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              Yuqor darajali hizmat!{" "}
            </p>
            <p className="font-medium text-sm text-skin-muted  dark:text-skin-dark_text">
              Biz mijozlarimizni qondirish va ularning obligatsiya pullarini
              qaytarish bo'yicha muvaffaqiyatli tajribaga egamiz.{" "}
            </p>
            <p className="reason-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              Yuqor darajali hizmat!{" "}
            </p>
            <p className="font-medium text-sm text-skin-muted  dark:text-skin-dark_text">
              Biz mijozlarimizni qondirish va ularning obligatsiya pullarini
              qaytarish bo'yicha muvaffaqiyatli tajribaga egamiz.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* custumers number */}
      <section className="relative py-10 lg:py-16">
        <Parallax
          className="hidden lg:block w-full filter blur-[3px] h-[400px] object-cover"
          blur={{ min: -15, max: 15 }}
          bgImage="/static/img/111.gif"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
        <img
          className="block lg:hidden w-full filter blur-[3px] h-[400px] object-cover"
          src="/static/img/111.gif"
          alt=""
        />
        <div className="max-w-7xl mx-auto absolute top-1/4 md:top-1/3 left-0 right-0 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center text-skin-white ">
            <FiUsers className="text-5xl md:text-6xl pb-2" />
            <span className="font-semibold text-3xl md:text-4xl tracking-wider pt-3 md:pt-5 md:pb-3">
              500+
            </span>
            <p className="font-medium text-center whitespace-normal">{t("home:clients_number")}</p>
          </div>
          <div className="flex flex-col items-center text-skin-white">
            <AiOutlineSafetyCertificate className="text-5xl md:text-6xl pb-2" />
            <span className="font-semibold text-3xl md:text-4xl tracking-wider pt-3 md:pt-5 md:pb-3">
              100%
            </span>
            <p className="font-medium text-center whitespace-normal">{t("home:quality")}</p>
          </div>
          <div className="flex flex-col items-center text-skin-white">
            <MdOutlineDryCleaning className="text-5xl md:text-6xl pb-2" />
            <span className="font-semibold text-3xl md:text-4xl tracking-wider pt-3 md:pt-5 md:pb-3">
              56+
            </span>
            <p className="font-medium text-center whitespace-normal">{t("home:orders")}</p>
          </div>
          <div className="flex flex-col items-center text-skin-white">
            <GiVacuumCleaner className="text-5xl md:text-6xl pb-2" />
            <span className="font-semibold text-3xl md:text-4xl tracking-wider pt-3 md:pt-5 md:pb-3">
              87+
            </span>
            <p className="font-medium text-center whitespace-normal">{t("home:work_instruments")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
