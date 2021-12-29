// react hooks
import { useState, useEffect, useRef } from "react";

// next.js
import Head from "next/head";
import { useRouter } from "next/router";

//i18-next
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion/Accordion";

// accordion data
import { generalQuestion, cleaningQuestionsData } from "../components/Data/accordionData";

// i18-next Static props function
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
    }
  }
}

export default function Home() {
  // router
  const router = useRouter();
  // useState
  const [toggle, setToggle] = useState(0);

  return (
    <div className="dark:bg-skin-dark_secondary_bg">
      <Head>
        <title>Ideal Cleaning | Projects</title>
      </Head>

      {/* component Navbar */}
      <Navbar />

      {/* breadcrumb */}
      <header className="flex items-center px-8 md:px-20 lg:px-32 py-5 font-medium dark:shadow-md bg-[#f3f4f6] dark:bg-skin-dark_secondary_bg space-x-4">
          <h5
            onClick={() => router.push("/")}
            className="text-skin-main cursor-pointer"
          >
            Asosiy Sahifa
          </h5>
          <span className="text-xl">›</span>
          <p className="text-skin-muted dark:text-skin-dark_text_muted">Savollar</p>
      </header>

      <main className="max-w-7xl mx-auto">
        
        {/* Ko'p beriladigan savollar */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl py-5 md:py-8 text-skin-base dark:text-skin-dark_text_muted font-semibold">
            Ko'p Beriladigan Savollar
          </h1>
          <p className="text-xs md:text-sm font-medium text-skin-muted dark:text-skin-dark_text">
            Sizning xodimlaringiz, mijozlaringiz va mehmonlaringiz uchun toza va
            sog'lom muhitni ta'minlash uchun ko'p yillik tajribamiz, <br />{" "}
            malakali xodimlarimiz va ilg'or protseduralarimizdan foydalanaylik.{" "}
          </p>
        </div>

        {/* Accordion */}
        <section className="py-10 px-4 lg:px-0">
          <p className="text-skin-base dark:text-skin-dark_text_muted text-xl lg:text-2xl font-semibold py-4">Umumiy Savollar</p>
         {generalQuestion.map(({question, answer})=> (
           <Accordion question={question} answer={answer} />
         ))}
         <p className="text-skin-base dark:text-skin-dark_text_muted text-xl lg:text-2xl font-semibold py-4">Ish Bo'yicha Savollar</p>
         {cleaningQuestionsData.map(({question, answer})=> (
           <Accordion question={question} answer={answer} />
         ))}
        </section>
      </main>

      {/* Component Footer */}
      <Footer />
    </div>
  );
}
