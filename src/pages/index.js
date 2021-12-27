// hooks
import { useState, useEffect } from "react";

// next.js
import Head from "next/head";
import { useRouter } from "next/router";

// components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HomePage from "../components/Home";
import HomeLoading from "../components/Loader/HomeLoading";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(false);

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
          <Navbar />
          <Header />
          <HomePage />
          <Footer />
        </div>
      )}
    </div>
  );
}
