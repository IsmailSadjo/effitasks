import Link from "next/link"
import logo from "../../../public/images/header/logo.png"
import Image from "next/image"
import google from "../../../public/images/login/google.png"
import facebook from "../../../public/images/login/facebook.png"
import { signIn } from "@/auth";
import CredentialsRegister from "./CredentialsRegister"


export default function Register() {
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
                            <h2 className="font-bold text-3xl">Registration</h2>
                            <p className="">Welcome! Choose your registration method:</p>
                        </div>
                        <div className=" flex justify-center items-center w-full gap-6">
                            <button className="text-center w-full border rounded-xl py-3 flex justify-center items-center gap-2 border-neutral-400 cursor-pointer hover:border-[var(--primary-color)] hover:shadow-[0_0_10px_var(--accent-color)]"
                                    onClick={async () => {
                                        "use server"
                                        await signIn("google", {redirectTo:"/dashboard/today"})
                                    }}
                            >
                                <div className="w-6 h-6"><Image src={google} alt="logo" className="w-full h-full"/></div>Google
                            </button>
                            {/* <button className="text-center w-full border rounded-xl py-3 flex justify-center items-center gap-2 border-neutral-400 cursor-pointer hover:border-[var(--primary-color)] hover:shadow-[0_0_10px_var(--accent-color)]"
                                    onClick={async ()=> {
                                        "use server"
                                        await signIn("facebook", {redirectTo: "/dashboard/today"})
                                    }}
                            >
                                <div className="w-6 h-6"><Image src={facebook} alt="logo" className="w-full h-full"/></div>Facebook
                            </button> */}
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-full gap-4">
                        <div className="w-full h-[1px] bg-neutral-400"></div>
                        <p className="text-nowrap text-neutral-400">or continue with email</p>
                        <div className="w-full h-[1px] bg-neutral-400"></div>
                    </div>
                    <div className="w-full">
                        <CredentialsRegister />
                    </div>
                    <div>Already have an account? <Link href="/login" className="text-blue-500 underline">Log in</Link></div>
                </div>
            </div>
            <div className="bg-blue-500">

            </div>
        </div>
    )
}