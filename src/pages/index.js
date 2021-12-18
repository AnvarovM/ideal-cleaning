// hooks
import { useState, useEffect } from "react";

// next.js
import Head from "next/head";

// components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HomePage from "../components/Home";
import HomeLoading from "../components/Loader/HomeLoading";
import Footer from "../components/Footer";
import Map from "../components/Map";

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
      </Head>


        {loading ? (
          <HomeLoading />
        ) : (
          <div>
          <Navbar />
          <Header />
          <HomePage />
          <Footer />
        </div>
        )}
    </div>
  );
}
