import Link from "next/link"
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

export default function Footer() {
    return (
        <footer className="flex justify-between items-center w-full px-24 bg-[var(--accent-color)] h-20">
            <div>
                <span className="font-bold">
                    EFFITASKS
                </span>
                {` `}
                <span>2025 © All rights reserved</span>
            </div>
            <div className="flex justify-between items-center gap-4">
                <p>Contact us:</p>
                <div className="flex justify-between items-center gap-2">
                    <Link href='/' className="flex justify-center items center rounded-full border p w-[30px] h-[30px] p-[4px] hover:scale-93 transition-all ease duration-200">
                        <FaFacebook className="w-full h-full"/>
                    </Link>
                    <Link href='/' className="flex justify-center items center rounded-full border p w-[30px] h-[30px] p-[4px] hover:scale-93 transition-all ease duration-200">
                        <FaXTwitter className="w-full h-full"/>
                    </Link>
                    <Link href='/' className="flex justify-center items center rounded-full border p w-[30px] h-[30px] p-[4px] hover:scale-93 transition-all ease duration-200">
                        <FaInstagram className="w-full h-full"/>
                    </Link>
                    <Link href='/' className="flex justify-center items center rounded-full border p w-[30px] h-[30px] p-[4px] hover:scale-93 transition-all ease duration-200">
                        <BiLogoGmail className="w-full h-full"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}