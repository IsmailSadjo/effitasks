import Link from "next/link"
import { createPortal } from "react-dom"
import { useState, useEffect } from "react"
import Image from "next/image"
import { IoPerson } from 'react-icons/io5';
import { logout, changeAccount } from '@/lib/actions/logout';


export default function AccountModal({ session, setShow }) {

    const [portal, setPortal] = useState(null)

    useEffect(()=>{
        setPortal(document.getElementById("portal"))
    }, [])

    async function disconnect() {
        await logout();
    }

    async function changeAcc() {
        await changeAccount();
    }

    if(!portal) return null

    return createPortal(
        <div>
            <div className="absolute top-0 left-0 bottom-0 right-0 z-2" onClick={()=>setShow(false)}></div>
            <div className="absolute min-h-5 min-w-10 bg-neutral-900/85 top-12 right-6 rounded-xl py-4 flex flex-col justify-center items-start gap-3 text-white z-5 font-bold">
                <div className="flex gap-3 justify-center items-center px-4 font-normal">
                    <div className={`w-8 h-8 rounded-full overflow-hidden ${session?.user.image ? "" : "border-white border p-1"}`}>{session?.user.image ? <Image src={session.user.image} className="w-full h-full" width={200} height={200} alt="image" loading="lazy" /> : <IoPerson className="w-full h-full text-white" />}</div>
                    <p className="italic">{session?.user.email}</p>
                </div>
                <hr className="w-full h-[1px] bg-white border-none" />
                <div className="flex flex-col gap-3 w-full px-3">
                    <div className="flex justify-between items-center">
                        <p>Thème</p>
                        <button className="bg-lime-50 w-10 h-5 rounded-xl">
                            <div className="w-[50%] h-full bg-lime-400 rounded-full"></div>
                        </button>
                    </div>
                    <Link href="/dashboard/today">Paramètres</Link>
                    <Link href="/dashboard/today">Aide</Link>
                </div>
                <hr className="w-full h-[1px] bg-white border-none" />
                <div className="flex flex-col gap-3 w-full px-3">
                    <Link href="/login" className="hover:text-[var(--hover-color)]" onClick={changeAcc}>Changer de compte</Link>
                    <form action={disconnect}>
                        <button className="cursor-pointer hover:text-red-400" type="submit">Se déconnecter</button>
                    </form>
                </div>
            </div>
        </div>, portal
    )
}