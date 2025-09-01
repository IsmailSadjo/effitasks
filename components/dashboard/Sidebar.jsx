"use client"
import SidebarNav from "./SidebarNav"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import logo from "../../public/images/header/logo.png"
import Image from "next/image";
import { useState } from "react";

export default function Sidebar({slug}) {

    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <div className={`flex flex-col justify-start items-start gap-12 bg-[var(--accent-color)] transition-all ease duration-600 relative ${showSidebar ? "max-w-[350px] p-[16px_24px] pr-14" : "max-w-0 py-4"}`}>
            <div className={`flex items-center justify-start gap-6`}>
                <div className={`flex justify-end items-center gap-3 transition-all ease duration-600 ${showSidebar ? "max-w-[350px]" : "max-w-0"}`}>
                    <div className="w-10 h-10"><Image src={logo} className="w-full h-full" alt="logo" loading="lazy" /></div>
                    <h1 className="font-bold text-3xl">EFFITASKS</h1>
                </div>
                <button onClick={()=>setShowSidebar(!showSidebar)} className={`w-5 h-5 absolute cursor-pointer z-1 transition-all ease duration-600 rounded-full ${showSidebar ? "text-black right-[18px] hover:shadow-[0_0_10px_var(--text-color)]" : "text-white right-[-32px] hover:shadow-[0_0_10px_white]"}`}>
                    {showSidebar ? (<FaArrowAltCircleLeft className="w-full h-full" />) : (<FaArrowAltCircleRight className="w-full h-full" />)}
                </button>
            </div>
            <SidebarNav slug={slug} />
        </div>
    )
}