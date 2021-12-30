import React from "react";

// package
import Slider from "react-slick";
import { Parallax } from "react-parallax";

const Section1 = ({ t }) => {
  return (
    <div>
      {/* services list*********/}
      <section className="max-w-6xl mx-auto py-10 md:py-16 px-8 lg:px-0">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">
            {t("home:services_heading")}
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
            {t("home:services_list_paragraph")}
          </p>
        </div>

        <div className="py-10 overflow-x-auto flex space-x-5 scrollbar-hide">
          <div className="services-card">
            <img
              src="https://lbappliance.com/wp-content/uploads/2020/04/washing-machine-ol-512-480x480.png"
              className="mx-auto w-16 md:w-20 my-4 dark:bg-gray-400 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              {t("home:services1_name")}
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Window cleaning
                </p>
              </div>
            </div>
            <p
              onClick={() => router.push("/services")}
              className="text-center text-skin-main pt-5 cursor-pointer"
            >
              Read More
            </p>
          </div>
          <div className="services-card">
            <img
              src="https://cdn1.iconfinder.com/data/icons/electronics-151/64/37-512.png"
              className="mx-auto w-16 md:w-20 my-4 dark:bg-gray-400 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              {t("home:services2_name")}
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Window cleaning
                </p>
              </div>
            </div>
            <p
              onClick={() => router.push("/services")}
              className="text-center text-skin-main pt-5 cursor-pointer"
            >
              Read More
            </p>
          </div>
          <div className="services-card">
            <img
              src="https://cdn0.iconfinder.com/data/icons/home-electric/512/washing-machine-laundry-clothes-wash-512.png"
              className="mx-auto w-16 md:w-20 my-4 dark:bg-gray-400 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              {t("home:services3_name")}
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Window cleaning
                </p>
              </div>
            </div>
            <p
              onClick={() => router.push("/services")}
              className="text-center text-skin-main pt-5 cursor-pointer"
            >
              Read More
            </p>
          </div>
          <div className="services-card">
            <img
              src="https://image.flaticon.com/icons/png/512/447/447407.png"
              className="mx-auto w-16 md:w-20 my-4 dark:bg-gray-400 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              {t("home:services4_name")}
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Window cleaning
                </p>
              </div>
            </div>
            <p
              onClick={() => router.push("/services")}
              className="text-center text-skin-main pt-5 cursor-pointer"
            >
              Read More
            </p>
          </div>
          <div className="services-card">
            <img
              src="https://freepngimg.com/thumb/symbol/84533-laundry-text-towel-black-washing-machines.png"
              className="mx-auto w-16 md:w-20 my-4 dark:bg-gray-400 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              {t("home:services5_name")}
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Window cleaning
                </p>
              </div>
            </div>
            <p
              onClick={() => router.push("/services")}
              className="text-center text-skin-main pt-5 cursor-pointer"
            >
              Read More
            </p>
          </div>
          <div className="services-card">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_449814.svg"
              className="mx-auto w-16 md:w-20 my-4 dark:bg-gray-400 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              {t("home:services6_name")}
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Window cleaning
                </p>
              </div>
            </div>
            <p
              onClick={() => router.push("/services")}
              className="text-center text-skin-main pt-5 cursor-pointer"
            >
              Read More
            </p>
          </div>
        </div>
      </section>

      {/* year experience*******/}
      <section className="relative">
        <Parallax
          className="w-full lg:h-[600px] hidden lg:block filter blur-[1px] object-cover"
          blur={{ min: -15, max: 15 }}
          bgImage="/static/img/headerCarouse2.png"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
        <div className="carousel-bg-opacity" />
        <div className="static lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 grid grid-cols-1 lg:grid-cols-2 items-center space-x-0 md:space-x-4 py-8 lg:py-16 max-w-6xl mx-auto px-8 lg:px-0">
          <div className="space-y-3">
            <h3 className="text-2xl lg:text-4xl font-medium text-skin-main dark:text-skin-dark_text_muted lg:text-skin-white">
              {t("home:year_experience_heading")}
            </h3>

            <p className="text-skin-muted dark:text-skin-dark_text text-sm lg:text-white lg:text-base font-medium">
              Ham samarali, ham sifatli xizmatni qidiryapsizmi? Ishchilarimiz
              siz qidirayotgan narsa bo'lishi mumkin. Kompaniya juda tartibli:
              uyingizga kelgan har bir hizmatchi guruhiga nazoratchi vazifasini
              bajaradigan guruh rahbari kiradi.
            </p>

            <p className="text-skin-muted dark:text-skin-dark_text text-sm lg:text-white lg:text-base font-medium">
              Tozalash vaqtida dala menejeri vaqti-vaqti bilan tozalanganligini
              tekshirish uchun hozir bo'ladi. Xizmat 100% kafolatlangan va
              ko'pchilik o'z ishlaridan juda mamnun. Ammo yodda tutish kerak
              bo'lgan bir narsa: Ba'zi bir oldingi foydalanuvchilar uyingizni
              tozalashning boshlang'ich narxini kam baholaganidan shikoyat
              qilishgan, shuning uchun siz haqiqatga yaqin bo'lish uchun
              ularning hisobiga yana yuz yoki undan ko'proq pul qo'shishingiz
              mumkin.
            </p>

            <button
              onClick={() => router.push("/contact")}
              className="main--btn border-white text-skin-white"
            >
              {t("home:read_more")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
