// react
import React from "react";

// package
import Slider from "react-slick";
import { Parallax } from "react-parallax";

// react icons
import { GiWindow } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDryCleaning } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";

// next.js
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className="">
      {/* services list*********/}
      <section className="max-w-6xl mx-auto py-10 md:py-16 px-8 lg:px-0">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">
            Bizning <span className="hidden md:inline">Tozalash</span>{" "}
            Hizmatlarimiz.
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
            Sizning xodimlaringiz, mijozlaringiz va mehmonlaringiz uchun toza va
            sog'lom muhitni ta'minlash uchun ko'p yillik tajribamiz, <br />{" "}
            malakali xodimlarimiz va ilg'or protseduralarimizdan foydalanaylik.{" "}
          </p>
        </div>

        <div className="py-10 overflow-x-auto flex space-x-5 scrollbar-hide">
          <div className="services-card">
            <GiWindow className="text-6xl mx-auto text-skin-main my-4 transform group-hover:scale-105 transition duration-100" />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              Oyna Tozalash
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Carpet cleaning</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Window cleaning</p>
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
            <GiWindow className="text-6xl mx-auto text-skin-main my-4 transform group-hover:scale-105 transition duration-100" />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              Oyna Tozalash
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Carpet cleaning</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Window cleaning</p>
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
            <GiWindow className="text-6xl mx-auto text-skin-main my-4 transform group-hover:scale-105 transition duration-100" />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              Oyna Tozalash
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Carpet cleaning</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Window cleaning</p>
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
            <GiWindow className="text-6xl mx-auto text-skin-main my-4 transform group-hover:scale-105 transition duration-100" />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              Oyna Tozalash
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Carpet cleaning</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Window cleaning</p>
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
            <GiWindow className="text-6xl mx-auto text-skin-main my-4 transform group-hover:scale-105 transition duration-100" />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              Oyna Tozalash
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Carpet cleaning</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Window cleaning</p>
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
            <GiWindow className="text-6xl mx-auto text-skin-main my-4 transform group-hover:scale-105 transition duration-100" />
            <h2 className="text-xl font-semibold text-skin-base dark:text-skin-dark_text_muted text-center">
              Oyna Tozalash
            </h2>
            <div className="pt-5">
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Carpet cleaning</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">
                  Carpet cleaning fast
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-skin-main px-2 text-lg">✔</span>
                <p className="font-medium text-skin-muted dark:text-skin-dark_text_muted">Window cleaning</p>
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
              <span className="text-3xl lg:text-5xl font-semibold"> 10 </span>{" "}
              Yillik Tajriba{" "}
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
              To'liq o'qish
            </button>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Us**/}
      <section className="max-w-7xl mx-auto">
        {/* content top */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">
            Bizni Tanlashingizga Sabablar
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
            Sizning xodimlaringiz, mijozlaringiz va mehmonlaringiz uchun toza va
            sog'lom muhitni ta'minlash uchun ko'p yillik tajribamiz, <br />{" "}
            malakali xodimlarimiz va ilg'or protseduralarimizdan foydalanaylik.{" "}
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
            <p className="font-medium">Mijozlrimiz Soni</p>
          </div>
          <div className="flex flex-col items-center text-skin-white">
            <AiOutlineSafetyCertificate className="text-5xl md:text-6xl pb-2" />
            <span className="font-semibold text-3xl md:text-4xl tracking-wider pt-3 md:pt-5 md:pb-3">
              100%
            </span>
            <p className="font-medium">Ishimiz Sifati</p>
          </div>
          <div className="flex flex-col items-center text-skin-white">
            <MdOutlineDryCleaning className="text-5xl md:text-6xl pb-2" />
            <span className="font-semibold text-3xl md:text-4xl tracking-wider pt-3 md:pt-5 md:pb-3">
              56+
            </span>
            <p className="font-medium">Hozirda Buyurtlar</p>
          </div>
          <div className="flex flex-col items-center text-skin-white">
            <GiVacuumCleaner className="text-5xl md:text-6xl pb-2" />
            <span className="font-semibold text-3xl md:text-4xl tracking-wider pt-3 md:pt-5 md:pb-3">
              87+
            </span>
            <p className="font-medium">Ish Anjomlarimiz</p>
          </div>
        </div>
      </section>

      {/* about price */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center pb-8">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">
            Ma'qul Narxni Tanlang!
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
            Sizning xodimlaringiz, mijozlaringiz va mehmonlaringiz uchun toza va
            sog'lom muhitni ta'minlash uchun ko'p yillik tajribamiz, <br />{" "}
            malakali xodimlarimiz va ilg'or protseduralarimizdan foydalanaylik.{" "}
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-10 px-8 lg:px-0">
          <div className="price-card">
            <h3 className="price-card-price-type">
              Boshlangich Narx
            </h3>
            <p className="price-card-price">
              29.000 <span className="text-lg font-semibold">so'm</span>
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="main--btn mb-6"
            >
              To'liq o'qish
            </button>
          </div>
          <div className="price-card">
            <h3 className="price-card-price-type">
              O'rtacha Narx
            </h3>
            <p className="price-card-price">
              79.000 <span className="text-lg font-semibold">so'm</span>
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="main--btn mb-6"
            >
              To'liq o'qish
            </button>
          </div>
          <div className="price-card">
            <h3 className="price-card-price-type">
              Yuqori Narx
            </h3>
            <p className="price-card-price">
              109.000 <span className="text-lg font-semibold">so'm</span>
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <p className="price-card-services-list">
              Trained Cleaner
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="main--btn mb-6"
            >
              To'liq o'qish
            </button>
          </div>
        </div>
      </section>

      {/* client say that */}
      <section className="max-w-6xl mx-auto py-10 md:py-16 px-8 lg:px-0">
        {/* content top */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 text-skin-base dark:text-skin-dark_text_muted font-semibold">
            Biz Tabiiy Tozalash Vositalaridan Foydalanamiz
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
            Sizning xodimlaringiz, mijozlaringiz va mehmonlaringiz uchun toza va
            sog'lom muhitni ta'minlash uchun ko'p yillik tajribamiz, <br />{" "}
            malakali xodimlarimiz va ilg'or protseduralarimizdan foydalanaylik.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 space-y-6 md:space-y-0 md:space-x-8 py-10 md:py-16 px-8 lg:px-0">
          {/* left reason */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div>
              <img
                className="w-[28rem] rounded-md transform hover:scale-105 transition duration-300"
                src="/static/img/organic-pro3.png"
                alt=""
              />
            </div>
          </div>
          {/* right reason */}
          <div>
            {/* <h4 className="text-2xl font-medium text-skin-base">Biz bunga bir nechta sabab keltira olamiz!</h4> */}
            <p className="organic-items-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              100% xavfsiz va tabiiy!{" "}
            </p>
            <p className="font-medium text-sm text-skin-muted dark:text-skin-dark_text">
              Biz mijozlarimizni qondirish va ularning obligatsiya pullarini
              qaytarish bo'yicha muvaffaqiyatli tajribaga egamiz.{" "}
            </p>
            <p className="organic-items-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              100% xavfsiz va tabiiy!{" "}
            </p>
            <p className="font-medium text-sm text-skin-muted dark:text-skin-dark_text">
              Biz mijozlarimizni qondirish va ularning obligatsiya pullarini
              qaytarish bo'yicha muvaffaqiyatli tajribaga egamiz.{" "}
            </p>
            <p className="organic-items-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              100% xavfsiz va tabiiy!{" "}
            </p>
            <p className="font-medium text-sm text-skin-muted dark:text-skin-dark_text">
              Biz mijozlarimizni qondirish va ularning obligatsiya pullarini
              qaytarish bo'yicha muvaffaqiyatli tajribaga egamiz.{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
