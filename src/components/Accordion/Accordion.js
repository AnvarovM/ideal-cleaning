// react hooks
import { useState } from "react";

// react icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({ question, answer }) => {
  // useState
  const [toggle, setToggle] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div 
      onClick={() => setToggle(!toggle)} 
      className="flex items-center px-4 bg-gray-100 dark:bg-skin-dark_main_bg text-white py-3 cursor-pointer rounded-lg group mb-1">
        <span className="text-xl lg:text-2xl mx-4 border-2 border-skin-main rounded-full p-2 text-skin-main">{toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
        <h1 className="text-lg lg:text-2xl font-medium text-[#222222] group-hover:ml-3 group-hover:text-skin-main dark:text-skin-dark_text_muted transition-all duration-500">{question}</h1>
      </div>
      <p>{toggle && <p className="text-sm md:text-lg font-medium text-skin-muted px-8 py-2 bg-gray-100 dark:text-skin-dark_text_muted dark:bg-skin-dark_main_bg rounded-lg mb-1">{answer}</p>}</p>
    </section>
  );
};

export default Accordion;
