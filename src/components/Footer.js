import React from 'react';

// react icons
import { LocationMarkerIcon, PhoneIcon, ChatIcon} from '@heroicons/react/solid'

// next.js
import Link from 'next/link'
import {useRouter} from 'next/router'

const Footer = () => {
    const router = useRouter()
    const [searchInput, setSearchInput] = React.useState("")
    console.log(setSearchInput);
    return (
        <footer className="bg-[#e5e7eb] py-5">
            <div className="max-w-6xl mx-auto px-10 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base uppercase">Aloqaga Chiqish</h2>
                     <div className="space-y-2">
                            <p className="flex text-skin-muted text-sm"><LocationMarkerIcon className="h-5 text-skin-muted pr-2" /> 123 Street, New York, USA </p>
                            <p className="flex text-skin-muted text-sm"><PhoneIcon className="h-5 text-skin-muted pr-2" /> +012 345 67890 </p>
                            <p className="flex text-skin-muted text-sm"><ChatIcon className="h-5 text-skin-muted pr-2" /> info@example.com </p>
                      </div>
                   </div>
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base uppercase">Foydali havolalar</h2>
                     <div className="space-y-2">
                            <p onClick={() => router.push('/about')} className="flex cursor-pointer text-skin-muted text-sm">Biz Haqimizda</p>
                            <p onClick={() => router.push('/services')} className="flex cursor-pointer text-skin-muted text-sm">Hizmatlar</p>
                            <p onClick={() => router.push('/projects')} className="flex cursor-pointer text-skin-muted text-sm">Proyektlar</p>
                            <p onClick={() => router.push('/faqs')} className="flex cursor-pointer text-skin-muted text-sm">Savollar</p>
                            <p onClick={() => router.push('/contact')} className="flex cursor-pointer text-skin-muted text-sm">Aloqa</p>
                      </div>
                   </div>
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base uppercase">Hizmatlarimiz</h2>
                     <div className="space-y-2">
                            <p className="flex cursor-pointer text-skin-muted text-sm">Nimadir qilish</p>
                            <p className="flex cursor-pointer text-skin-muted text-sm">Nimadir yuvish</p>
                            <p className="flex cursor-pointer text-skin-muted text-sm">Nimadir tozalash</p>
                            <p className="flex cursor-pointer text-skin-muted text-sm">Yana Nimadir</p>
                      </div>
                   </div>
                   <div>
                    <h2 className="py-6 text-xl font-medium text-skin-base uppercase">Hoziroq yozing!</h2>
                     <div className="space-y-2">
                            <p className="flex text-skin-muted text-sm">Biz tabiiy va ekologik toza tozalash vositalaridan foydalanamiz va mijozlar ehtiyojini qondirish kafolatiga egamiz.</p>
                            <div className="p-2 rounded-md bg-gray-50 flex w-72">
                                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="outline-none bg-transparent " type="text" placeholder="Emailingizni kiriting..." />
                                <button className="text-sm rounded-md text-skin-base border bg-gray-300 p-2 focus:border-none" type="button">Yuborish</button>
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
                <div className="border-t mt-4 pt-4 border-skin-base text-center">
                    <p> 
                        <Link href="https://teamit.uz">
                        <span className="text-skin-base font-semibold animate-pulse cursor-pointer pr-1">TeamIt coders,</span>
                        </Link>
                        2021 © Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
