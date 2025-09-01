"use client"
import { registerWithCredentials } from "@/lib/actions/registerWithCredentials";
import { redirect } from "next/navigation";
import { useState } from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';

export default function CredentialsRegister() {

    const [error, setError] = useState()

    async function login(formData) {
        const result = await registerWithCredentials(formData)
        if (result.success) {
            redirect("/login")
        } else {
            setError(result.error)
        }
    }

    return (
        <form action={login}
            className="flex flex-col justify-between items-center w-full gap-3 relative"
        >
            <div className="w-full relative">
                <input type="text" name="name" className={`border border-neutral-400 rounded-lg w-full pl-12 py-1.5 outline-none bg-[var(--accent-color)] ${error && "border-red-500"}`} placeholder="Name" required />
            </div>
            <div className="w-full relative">
                <AiOutlineMail className="w-4 h-4 absolute top-[50%] translate-y-[-50%] left-5 text-neutral-400" />
                <input type="email" name="email" className={`border border-neutral-400 rounded-lg w-full pl-12 py-1.5 outline-none bg-[var(--accent-color)] ${error && "border-red-500"}`} placeholder="Email" required />
            </div>
            <div className="w-full relative">
                <FaLock className="w-4 h-4 absolute top-[50%] translate-y-[-50%] left-5 text-neutral-400" />
                <input type="password" name="password" className={`border border-neutral-400 rounded-lg w-full pl-12 py-1.5 outline-none bg-[var(--accent-color)] ${error && "border-red-500"}`} placeholder="Password" required />
            </div>
            {error ? (
                <span className="text-[var(--red-color)] font-medium text-center">{error}</span>
            ) : (null)}
            <button type="submit" className="p-2 bg-blue-500 text-white w-full rounded-lg mt-4 hover:bg-blue-400 cursor-pointer">
                Register
            </button>
        </form>
    )
}