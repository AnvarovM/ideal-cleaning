import React from "react";

// package
import { ImLeaf } from "react-icons/im";

const Section3 = ({ t }) => {
  return (
    <div>
      {/* about price */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center pb-8">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 whitespace-nowrap text-skin-base dark:text-skin-dark_text_muted font-semibold">
           {t("home:choose_price_heading")}
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
          {t("home:choose_price_p")}
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-10 px-8 lg:px-0">
          <div className="price-card">
            <h3 className="price-card-price-type"> {t("home:basic_price")}</h3>
            <p className="price-card-price">
              29.000 <span className="text-lg font-semibold">{t("home:currency_union")}</span>
            </p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <button
              onClick={() => router.push("/contact")}
              className="main--btn mb-6"
            >
              {t("home:read_more")}
            </button>
          </div>
          <div className="price-card">
            <h3 className="price-card-price-type">{t("home:middle_price")}</h3>
            <p className="price-card-price">
              79.000 <span className="text-lg font-semibold">{t("home:currency_union")}</span>
            </p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <button
              onClick={() => router.push("/contact")}
              className="main--btn mb-6"
            >
              {t("home:read_more")}
            </button>
          </div>
          <div className="price-card">
            <h3 className="price-card-price-type">{t("home:advanced_price")}</h3>
            <p className="price-card-price">
              109.000 <span className="text-lg font-semibold">{t("home:currency_union")}</span>
            </p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <p className="price-card-services-list">Trained Cleaner</p>
            <button
              onClick={() => router.push("/contact")}
              className="main--btn mb-6"
            >
              {t("home:read_more")}
            </button>
          </div>
        </div>
      </section>

      {/* client say that */}
      <section className="max-w-6xl mx-auto py-10 md:py-16 px-8 lg:px-0">
        {/* content top */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 text-skin-base dark:text-skin-dark_text_muted font-semibold">
          {t("home:organic_heading")}
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
          {t("home:organic_p")}
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
            <p className="organic-items-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              {t("home:natural_product_strong1")}
            </p>
            <p className="font-medium text-sm text-skin-muted dark:text-skin-dark_text">
              {t("home:natural_product_p1")}
            </p>
            <p className="organic-items-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              {t("home:natural_product_strong2")}
            </p>
            <p className="font-medium text-sm text-skin-muted dark:text-skin-dark_text">
              {t("home:natural_product_p2")}
            </p>
            <p className="organic-items-p">
              {" "}
              <span className="text-green-500 mr-2">
                <ImLeaf />
              </span>{" "}
              {t("home:natural_product_strong3")}
            </p>
            <p className="font-medium text-sm text-skin-muted dark:text-skin-dark_text">
              {t("home:natural_product_p3")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
