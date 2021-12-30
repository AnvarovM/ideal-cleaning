import {useState, useEffect} from "react";
import { BsChevronUp } from "react-icons/bs";

const ToTop = () => {
  const [show, setShow] = useState(true);
     // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // scroll animation
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      {/* to top icon */}
      <div className={show ? "top top-hidden" : "top"}>
        <a href="#">
          <BsChevronUp className="text-skin-base dark:text-skin-dark_text stroke-current stroke-2 h-10 w-10 md:h-12 md:w-12 p-3 border-2 border-skin-base dark:border-skin-dark_text rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default ToTop;
