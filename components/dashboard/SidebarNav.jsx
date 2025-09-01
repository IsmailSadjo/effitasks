"use client"
import { useState } from "react"
import Link from "next/link"

export default function SidebarNav({slug}) {

    return (
        <div className="w-full relative">
            <ul className="flex flex-col justify-between gap-1 font-bold">
                {/* <li className="flex justify-end"><Link href="/dashboard/today" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${state === 0 ? "text-[var(--primary-color)]" : ""}`}>Ajouter une tâche</Link></li> */}
                <li className="flex justify-end"><Link href="/dashboard/today" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${slug[0] === "today" && "text-[var(--primary-color)]"}`}>Aujourd'hui</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/shortly" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${slug[0] === "shortly" && "text-[var(--primary-color)]"}`}>Prochainement</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/search" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${slug[0] === "search" && "text-[var(--primary-color)]"}`}>Rechercher une tâche</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/calendar" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${slug[0] === "calendar" && "text-[var(--primary-color)]"}`}>Calendrier</Link></li>
                <li className="flex justify-end"><Link href="/dashboard/lately" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${slug[0] === "lately" && "text-[var(--primary-color)]"}`}>En retard</Link></li>
                {/* <li className="flex justify-end"><Link href="/dashboard/notifications" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${slug[0] === "notifications" && "text-[var(--primary-color)]"}`}>Notifications</Link></li> */}
                <li className="flex justify-end"><Link href="/dashboard/completed" className={`text-nowrap rounded-[4px] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 flex justify-end ${slug[0] === "completed" && "text-[var(--primary-color)]"}`}>Tâches complétées</Link></li>
            </ul>
        </div>
    )
}