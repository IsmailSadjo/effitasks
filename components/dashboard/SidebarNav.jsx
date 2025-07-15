"use client"
import { useState } from "react"
import Link from "next/link"

export default function SidebarNav() {

    const [state, setState] = useState(1)

    return (
        <div className="w-full">
            <ul className="flex flex-col justify-between gap-1 font-bold">
                <li className="flex justify-end"><Link href="/dashboard/today" className={`rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${state === 0 ? "text-[var(--primary-color)]" : ""}`}>Ajouter une tâche</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/today" className={`rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${state === 1 ? "text-[var(--primary-color)]" : ""}`}>Aujourd'hui</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/shortly" className={`rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${state === 2 ? "text-[var(--primary-color)]" : ""}`}>Prochainement</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/calendar" className={`rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${state === 3 ? "text-[var(--primary-color)]" : ""}`}>Calendrier</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/lately" className={`rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${state === 4 ? "text-[var(--primary-color)]" : ""}`}>En retard</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/notifications" className={`rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${state === 5 ? "text-[var(--primary-color)]" : ""}`}>Notifications</Link></li>
            </ul>
        </div>
    )
}