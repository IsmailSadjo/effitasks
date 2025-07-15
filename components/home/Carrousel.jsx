import dashboard from "../../public/images/hero/dashboard.png";
import Image from "next/image";

export default function Carrousel() {
    return (
        <div className="my-[96px] w-full">
            <div className="overflow-hidden w-full">
                <div className="flex justify-start items-center gap-10 w-max animate-carrousel">
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-[385px] border bg-[var(--accent-color)] rounded-2xl overflow-hidden">
                        <Image src={dashboard} alt="dashboard" width={400} height={400} className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    )
}