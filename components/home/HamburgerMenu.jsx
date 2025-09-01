import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { AiFillHome } from 'react-icons/ai';
import { BiSolidInfoCircle, BiHelpCircle } from 'react-icons/bi';
import { FaFileCircleQuestion } from 'react-icons/fa6';

export default function HamburgerMenu({ showNavbar, setShowNavbar, loginText, loginRedirection }) {

    const [portal, setPortal] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (showNavbar) {
            setTimeout(() => {
                setIsOpen(true)
            }, 250)
        } else {
            setTimeout(() => {
                setIsOpen(false)
            }, 250)
        }
    }, [showNavbar])

    useEffect(() => {
        setPortal(document.getElementById("portal"))
    }, [])

    function close() {
        setIsOpen(false);
        setTimeout(() => {
            setShowNavbar(false)
        }, 250)
    }

    if (!portal) return null

    return createPortal(
        <div className="">
            <div className="bg-black/20 absolute top-0 bottom-0 right-0 left-0 z-2" onClick={close}></div>
            <div className={`absolute z-3 right-0 top-0 py-12 px-6 bg-white overflow-hidden h-[100vh] ${isOpen ? "translate-x-0" : "translate-x-[100%]"} transition-all ease duration-400 flex flex-col justify-start items-center gap-4 text-nowrap`}>
                <ul className="flex flex-col justify-start items-start gap-2 w-full">
                    <Link href="/" className="p-2 flex justify-between w-full items-center gap-6 rounded-lg hover:bg-[var(--primary-color)] transition-all ease duration-75 hover:text-white cursor-pointer"><span>Home</span><AiFillHome /></Link>
                    <Link href="/" className="p-2 flex justify-between w-full items-center gap-6 rounded-lg hover:bg-[var(--primary-color)] transition-all ease duration-75 hover:text-white cursor-pointer"><span>About</span><BiSolidInfoCircle /></Link>
                    <Link href="/" className="p-2 flex justify-between w-full items-center gap-6 rounded-lg hover:bg-[var(--primary-color)] transition-all ease duration-75 hover:text-white cursor-pointer"><span>FAQ</span><FaFileCircleQuestion /></Link>
                    <Link href="/" className="p-2 flex justify-between w-full items-center gap-6 rounded-lg hover:bg-[var(--primary-color)] transition-all ease duration-75 hover:text-white cursor-pointer"><span>Help</span><BiHelpCircle /></Link>
                </ul>
                <hr className="w-full h-[2px] border-none bg-black"/>
                <div className="flex flex-col justify-between items-start gap-1 w-full">
                    <Link href={loginRedirection} className="text-center font-bold w-full p-2 rounded-lg hover:text-[var(--primary-color)]">
                        {loginText}
                    </Link>
                    <Link href="/register" className="text-center font-bold w-full p-2 bg-[var(--primary-color)] transition-all ease duration-75 hover:bg-[var(--hover-color)] rounded-lg text-white">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>, portal
    )
}