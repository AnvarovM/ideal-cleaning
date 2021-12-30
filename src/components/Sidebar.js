import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Sidebar = ({ openNav }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const navItems = [
    {
      id: "1",
      title: `${t("home:nav_home")}`,
      class: "nav",
      path: "/",
    },
    {
      id: "1",
      title: `${t("home:nav_about")}`,
      class: "nav",
      path: "/about",
    },
    {
      id: "1",
      title: `${t("home:nav_services")}`,
      class: "nav",
      path: "/services",
    },
    {
      id: "1",
      title: `${t("home:nav_faqs")}`,
      class: "nav",
      path: "/faqs",
    },
    {
      id: "1",
      title: `${t("home:nav_contact")}`,
      class: "nav",
      path: "/contact",
    },
  ];

  return (
    <div>
      {/* menu navbar for phone version */}
      {navItems.map((item) => (
        <div
          key={item.id}
          className={
            openNav
              ? "z-40 bg-white dark:bg-skin-dark_main_bg shadow-lg"
              : "hidden"
          }
        >
          <p
            onClick={() => router.push(`${item.path}`)}
            className="cursor-pointer flex flex-col z-40 font-medium uppercase px-8 md:px-20 lg:px-32 py-4 hover:bg-gray-200 dark:hover:bg-skin-dark_secondary_bg border-l-4 border-t border-b border-l-transparent hover:border-gray-500"
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
