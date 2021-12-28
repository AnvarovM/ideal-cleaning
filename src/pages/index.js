// hooks
import { useState, useEffect } from "react";

// next.js
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

// components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HomePage from "../components/Home";
import HomeLoading from "../components/Loader/HomeLoading";
import Footer from "../components/Footer";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
    }
  }
}


export default function Home(props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      <Head>
        <title>Ideal Cleaning | Home</title>
        <link rel="shortcut icon" href="/static/img/logo.png" />
      </Head>

      {loading ? (
        <HomeLoading />
      ) : (
        <div className="dark:bg-skin-dark_secondary_bg">
          <Navbar locale={locale} />
          <Header />
          {t("home:navbar_adress")}
          <HomePage />
          <Footer />
        </div>
      )}
    </div>
  );
}
