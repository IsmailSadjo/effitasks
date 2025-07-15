import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/header/logo.png";
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
import { signIn } from "@/auth";

export default function Header() {
  return (
    <header className="w-full h-[80px] p-[20px_32px]">
        <nav className="flex justify-between items-center max-w-[432px] screen-480:max-w-[512px] screen-640:max-w-none tablet:max-w-[720px] screen-960:max-w-[1024px] screen-1200:max-w-[1440px] mx-auto">
          <Link href="/" className="flex justify-between items-center gap-2">
            <Image src={logo} width={40} height={40} alt="logo" />
            <h1 className="font-bold text-xl screen-1024:text-2xl">EFFITASKS</h1>
          </Link>
          <div className="max-screen-960:hidden">
            <ul className="flex justify-between items-center gap-6 screen-1024:text-lg font-bold">
              <li><Link href="/" className="hover:text-[var(--primary-color)] transition-all ease duration-150">Home</Link></li>
              <li><Link href="/" className="hover:text-[var(--primary-color)] transition-all ease duration-150">About us</Link></li>
              <li><Link href="/" className="hover:text-[var(--primary-color)] transition-all ease duration-150">FAQ</Link></li>
              <li><Link href="/" className="hover:text-[var(--primary-color)] transition-all ease duration-150">Help</Link></li>
            </ul>
          </div>
          <div className="max-screen-960:hidden flex justify-between items-center gap-[6px] font-bold screen-1024:text-lg">
            <Link href="/login" className="p-[8px_20px] rounded-lg text-[var(--text-color)] hover:text-[var(--primary-color)] transition-all ease duration-150">Login</Link>
            <Link href="/register" className="p-[8px_20px] bg-[var(--primary-color)] rounded-lg text-white hover:bg-[var(--hover-color)] transition-all ease duration-150">Sign In</Link>
          </div>
          <div className="screen-960:hidden text-2xl flex justify-center items-center">
            <button>
              <AiOutlineMenu />
            </button>
          </div>
        </nav>
    </header>
  )
}