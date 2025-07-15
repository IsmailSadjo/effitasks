import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { signOut } from "@/auth"
import Image from "next/image"
import logo from "../../../public/images/header/logo.png"
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import SidebarNav from "@/components/dashboard/SidebarNav"
import backgroundDashboard from "../../../public/images/hero/background-dashboard.png"
import { BiSolidBellRing } from 'react-icons/bi';

export default async function Dashboard({params}) {

    const {slug} = await params;
    let title = "";
    let seperatedValue = slug[0].split("");
    seperatedValue[0] = seperatedValue[0].toUpperCase();

    title = seperatedValue;

    const session = await auth()

    if(!session) {
        return(
            <div>
                You have to Log in to your account before getting to your dashboard!
                {redirect("/")}
            </div>
        )
    }

    return (
        <div className="flex min-h-[100vh]">
            <div className="p-[16px_24px] flex flex-col justify-start items-start gap-12 bg-[var(--accent-color)]">
                <div className="flex justify-start items-center gap-6 relative">
                    <div className="flex justify-start items-center gap-3">
                        <div className="w-10 h-10"><Image src={logo} className="w-full h-full" alt="logo"/></div>
                        <h1 className="font-bold text-3xl">EFFITASKS</h1>
                    </div>
                    <button className="w-5 h-5 text-white absolute right-[-50px]">
                        <FaArrowAltCircleLeft className="w-full h-full"/>
                    </button>
                </div>
                <SidebarNav />
            </div>
            <div className="w-full h-[100vh] relative">
                <div className="relative w-full h-full flex flex-col justify-start items-center p-[16px_24px] gap-6">
                    <div className="flex justify-between items-center w-full">
                        <div className="text-2xl text-white ml-6">Welcome again, <span className="font-bold italic">{session?.user?.name}</span></div>
                        <div className="flex justify-between items-center gap-8">
                            <form action="">
                                <input type="text" placeholder="Search" className="bg-white p-[8px_24px] font-bold border-none rounded-3xl outline-none"/>
                            </form>
                            <div className="flex justify-between items-center gap-4">
                                <div className="text-white"><BiSolidBellRing /></div>
                                <button className="w-8 h-8 rounded-full overflow-hidden"><Image src={session?.user?.image} className="w-full h-full" width={200} height={200} alt="image"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[var(--accent-color)]/85 rounded-3xl w-full h-full flex flex-col">
                        <div className="p-6 flex justify-between items-end border-b">
                            <div className="flex flex-col justify-between items-start gap-4">
                                <h2 className="font-bold text-4xl">{title}</h2>
                                <button className="text-lg p-[8px_16px] bg-[var(--primary-color)] text-white rounded-xl">Add a task</button>
                            </div>
                            <div>Fri, 20 June 2025</div>
                        </div>
                        <div className="h-full">

                        </div>
                    </div>
                </div>
                <Image src={backgroundDashboard} alt="background" className="w-full h-full z-[-1] object-cover absolute top-0 left-0" />
            </div>
            
            {/* <button onClick={async () => {
                "use server"
                await signOut({redirectTo: "/login"});
            }} className="p-4 rounded-2xl w-max bg-red-400 hover:bg-red-500 cursor-pointer font-black text-white">
                SIGN OUT
            </button> */}
        </div>
    )
}