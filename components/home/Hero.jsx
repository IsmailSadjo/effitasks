import Link from "next/link"
import dashboard from "../../public/images/hero/dashboard.png";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full px-8">
            <div className="relative mt-[96px] max-screen-960:mt-[48px] flex justify-between items-center gap-[64px] screen-960:max-w-[1024px] screen-1200:max-w-[1440px] mx-auto max-screen-960:flex-col tablet:max-w-[720px]">
                <div className="h-full flex flex-col justify-between gap-6 items-center screen-960:items-start text-left screen-960:max-w-[432px] max-screen-960:text-center screen-1200:max-w-[512px] screen-1200:min-w-[432px]">
                    <div className="flex flex-col justify-between items-center screen-960:items-start gap-6">
                        <h2 className="font-bold text-[40px] leading-[48px] screen-1200:text-5xl screen-1200:leading-[54px] screen-960:text-[32px] screen-960:leading-tight tablet:text-[48px]">Organisez votre vie, une tâche à la fois. <span className="text-[var(--primary-color)] italic">Simplement.</span></h2>
                        <p className="text-[var(--text-secondary-color)] screen-1200:text-lg">De la grande vision aux petites tâches quotidiennes, organisez, suivez et accomplissez vos objectifs sans effort, en gardant l'esprit libre et concentré sur ce qui compte vraiment.</p>
                    </div>
                    <Link href="/" className="text-center p-4 bg-[var(--primary-color)] rounded-lg text-white font-bold text-[24px] hover:bg-[var(--hover-color)] transition-all ease duration-150 w-max">
                        GET STARTED
                    </Link>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_var(--primary-color)] screen-960:max-w-[480px] screen-1120:max-w-[512px] screen-1200:max-w-[820px] ">
                    <Image src={dashboard} alt="dashboard-visual" width="fill" height="fill" className="" />
                </div>
            </div>
        </div>
    )
}