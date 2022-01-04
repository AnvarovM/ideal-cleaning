import React from 'react';

// react icons
import { LocationMarkerIcon, PhoneIcon, ChatIcon} from '@heroicons/react/solid'

// next.js
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next";

const Footer = () => {
    const router = useRouter()
    const [searchInput, setSearchInput] = React.useState("");
    const { t } = useTranslation();

    return (
        <footer className="bg-[#e5e7eb] dark:bg-skin-dark_main_bg py-5">
            <div className="max-w-6xl mx-auto px-10 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base dark:text-skin-dark_text_muted uppercase">{t("home:footer_get_in_touch_heading")}</h2>
                     <div className="space-y-2">
                            <p className="footer-link truncate"><LocationMarkerIcon className="h-5 text-skin-muted pr-2" /> {t("home:footer_address")} </p>
                            <p className="footer-link"><PhoneIcon className="h-5 text-skin-muted pr-2" /> {t("home:footer_phone")} </p>
                            <p className="footer-link"><ChatIcon className="h-5 text-skin-muted pr-2" /> {t("home:footer_email")} </p>
                      </div>
                   </div>
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base dark:text-skin-dark_text_muted uppercase"> {t("home:footer_usefull_link_heading")} </h2>
                     <div className="space-y-2">
                            <p onClick={() => router.push('/about')} className="footer-link"> {t("home:footer_about")} </p>
                            <p onClick={() => router.push('/404')} className="footer-link"> {t("home:footer_faqs")} </p>
                            <p onClick={() => router.push('/services')} className="footer-link"> {t("home:footer_services")} </p>
                            <p onClick={() => router.push('/faqs')} className="footer-link"> {t("home:footer_contact")} </p>
                      </div>
                   </div>
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base dark:text-skin-dark_text_muted uppercase"> {t("home:footer_services_heading")} </h2>
                     <div className="space-y-2">
                            <p className="footer-link">{t("home:footer_service1")}</p>
                            <p className="footer-link">{t("home:footer_service2")}</p>
                            <p className="footer-link">{t("home:footer_service3")}</p>
                            <p className="footer-link">{t("home:footer_service4")}</p>
                      </div>
                   </div>
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base dark:text-skin-dark_text_muted uppercase">{t("home:footer_type_now_heading")}</h2>
                     <div className="space-y-2">
                            <p className="footer-link  no-underline">{t("home:footer_type_now_p")}</p>
                            <div className="p-2 rounded-md bg-gray-50 flex w-72">
                                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="outline-none bg-transparent truncate" type="text" placeholder={t("home:footer_placeholder")} />
                                <button className="text-sm rounded-md text-skin-base dark:text-skin-dark_text border bg-gray-300 dark:bg-skin-dark_main_bg p-2 focus:border-none" type="button">{t("home:footer_submit_btn")}</button>
                            </div>
                            {searchInput && (
                                <div>
                                    <h1 className="text-red-500">Serverda xato yuz berdi!</h1>
                                <p className="text-skin-muted text-xs">Iltimos keyinroq urunib ko'ring!</p>
                                </div>
                            )}
                      </div>
                   </div>
                </div>
                <div className="border-t mt-4 pt-4 border-skin-base dark:border-gray-400 text-center">
                    <p> 
                        <Link href="https://teamit.uz">
                        <span className="text-skin-base dark:text-skin-dark_text_muted font-semibold animate-pulse cursor-pointer pr-1">TeamIt coders,</span>
                        </Link>
                        {t("home:footer_protection_of_rights")}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
