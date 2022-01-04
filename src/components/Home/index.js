// react
import React from "react";

// next.js
import { useRouter } from "next/router";

// components
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
