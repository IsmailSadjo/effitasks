import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { signOut } from "@/auth"
import Image from "next/image"
import Sidebar from "@/components/dashboard/Sidebar"
import backgroundDashboard from "../../../public/images/hero/background-dashboard.png"
import SearchSection from "@/components/dashboard/SearchSection"
import MainDisplay from "@/components/dashboard/MainDisplay"

export default async function Dashboard({params}) {

    const session = await auth()

    const {slug} = await params;

    const allTasks = await prisma.task.findMany({
        where: {
            userId: session.user.id
        }
    })

    const allNotifications = await prisma.notification.findMany({
        where: {
            userId: session?.user.id
        }
    })

    let title = "";
    if (slug[0] === "today") {
        title = "Aujourd'hui";
    }else if (slug[0] === "shortly") {
        title = "Prochainement";
    }else if (slug[0] === "search") {
        title = "Rechercher une tâche";
    }else if (slug[0] === "calendar") {
        title = "Calendrier"
    }else if (slug[0] === "lately") {
        title = "En retard"
    }else if (slug[0] === "completed") {
        title = "Tâches complétées"
    }

    if (!session) { 
        return <div>You are not logged in yet</div>
    }

    return (
        <div className="flex min-h-[100vh]">
            <Sidebar slug={slug}/>
            <div className="w-full h-[100vh] relative">
                <div className="relative w-full h-full flex flex-col justify-start items-center p-[16px_24px] gap-6 border">
                    <div className="flex justify-end items-center w-full">
                        {/* <div className="text-2xl text-white ml-6">Welcome again, <span className="font-bold italic">{session?.user?.name}</span></div> */}
                        <SearchSection session={session} slug={slug} allNotifications={allNotifications}/>
                    </div>
                    <MainDisplay title = {title} allTasks={allTasks} slug={slug} />
                </div>
                <Image src={backgroundDashboard} alt="background" className="w-full h-full z-[-1] object-cover absolute top-0 left-0" />
            </div>
        </div>
    )
}