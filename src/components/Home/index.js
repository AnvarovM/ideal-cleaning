// react
import React from "react";

// package
import Slider from "react-slick";
import { Parallax } from "react-parallax";

// react icons
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { ImLeaf } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDryCleaning } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";

// next.js
import { useRouter } from "next/router";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const HomePage = ({ t }) => {
  const router = useRouter();
  return (
    <main>
      <Section1 t={t} />

      <Section2 t={t} />

      <Section3 t={t} />
    </main>
  );
};

export default HomePage;
