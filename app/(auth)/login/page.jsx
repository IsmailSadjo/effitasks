import Link from "next/link"
import logo from "../../../public/images/header/logo.png"
import Image from "next/image"
import { AiOutlineMail } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';
import google from "../../../public/images/login/google.png"
import facebook from "../../../public/images/login/facebook.png"
import { signIn, auth } from "@/auth";


export default async function Login() {

    const session = await auth()

    return (
        <div className="grid grid-cols-2 h-[100vh]">
            <div className="flex justify-center items-center">
                <div className="w-[40%] flex flex-col justfy-between items-center gap-8">
                    <div className="flex flex-col justify-between items-start gap-8 w-full">
                        <div className="flex justify-start items-center w-full gap-2">
                            <div className="w-10 h-10">
                                <Image src={logo} alt="logo" width="fill" height="fill" className="w-full h-full" />
                            </div>
                            <h1 className="font-bold text-2xl">EFFITASKS</h1>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-2">
                            <h2 className="font-bold text-3xl">Log in to your Account</h2>
                            <p className="">Welcome back, select login method:</p>
                        </div>
                        <div className=" flex justify-center items-center w-full gap-6">
                            <button className="text-center w-full border rounded-xl py-3 flex justify-center items-center gap-2 border-neutral-400 cursor-pointer hover:border-[var(--primary-color)] hover:shadow-[0_0_10px_var(--accent-color)]"
                                    onClick={async () => {
                                                "use server"
                                                await signIn("google", {redirectTo: "/dashboard/today"})
                                            }}
                            >
                                <div className="w-6 h-6"><Image src={google} alt="logo" className="w-full h-full"/></div>Google
                            </button>
                            <button className="text-center w-full border rounded-xl py-3 flex justify-center items-center gap-2 border-neutral-400 cursor-pointer hover:border-[var(--primary-color)] hover:shadow-[0_0_10px_var(--accent-color)]">
                                <div className="w-6 h-6"><Image src={facebook} alt="logo" className="w-full h-full"/></div>Facebook
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-full gap-4">
                        <div className="w-full h-[1px] bg-neutral-400"></div>
                        <p className="text-nowrap text-neutral-400">or continue with email</p>
                        <div className="w-full h-[1px] bg-neutral-400"></div>
                    </div>
                    <div className="w-full">
                        <form action={async (formData) => {
                            "use server"
                            await signIn("credentials", formData)
                        }} 
                            className="flex flex-col justify-between items-center w-full gap-3 relative"
                        >
                            <div className="w-full relative">
                                <AiOutlineMail className="w-4 h-4 absolute top-[50%] translate-y-[-50%] left-5 text-neutral-400"/>
                                <input name="email" type="email" className="border border-neutral-400 rounded-lg w-full pl-12 py-1.5 outline-none bg-[var(--accent-color)]" placeholder="Email" required/>
                            </div>
                            <div className="w-full relative">
                                <FaLock className="w-4 h-4 absolute top-[50%] translate-y-[-50%] left-5 text-neutral-400"/>
                                <input name="password" type="password" className="border border-neutral-400 rounded-lg w-full pl-12 py-1.5 outline-none bg-[var(--accent-color)]" placeholder="Password" required/>
                            </div>
                            <div className="flex justify-end items-center text-blue-500 w-full">
                                Forgot Password?
                            </div>
                            <button type="submit" className="p-2 bg-blue-500 text-white w-full rounded-lg mt-4 hover:bg-blue-400 cursor-pointer">
                                Log in
                            </button>
                        </form>
                    </div>
                    <div>Don't have an account? <Link href="/register" className="text-blue-500 underline">Create my account</Link></div>
                </div>
            </div>
            <div className="bg-blue-500">
                {(session?.user) ? (
                    <div>
                        {console.log(session)}
                        <h1 className="font-bold italic text-white text-5xl">Welcome {session.user.name}</h1>
                    </div>
                ) : (null)}
            </div>
        </div>
    )
}