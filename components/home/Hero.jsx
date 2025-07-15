import Link from "next/link"
import dashboard from "../../public/images/hero/dashboard.png";
import background from "../../public/images/hero/background.png";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative max-tablet:px-12 px-18 mt-[96px] flex justify-between items-start gap-[64px] screen-960:max-w-[1024px] screen-1200:max-w-[1440px] mx-auto max-screen-960:flex-col tablet:max-w-[720px]">
            {/* <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                <Image src={background} alt='background' width="fill" height="fill" className="w-full h-full object-contain border" />
            </div> */}
            <div className="flex flex-col justify-between items-left gap-6 text-left screen-960:max-w-[432px] max-screen-960:text-center screen-1200:max-w-[500px] screen-1200:min-w-[432px]">
                <h2 className="font-bold text-[40px] leading-[48px] screen-1200:text-5xl screen-1200:leading-[54px]">Organisez votre vie, une tâche à la fois. <span className="text-[var(--primary-color)] italic">Simplement.</span></h2>
                <p className="text-[var(--text-secondary-color)] screen-1200:text-lg">De la grande vision aux petites tâches quotidiennes, organisez, suivez et accomplissez vos objectifs sans effort, en gardant l'esprit libre et concentré sur ce qui compte vraiment.</p>
                <Link href="/" className="text-center p-4 bg-[var(--primary-color)] text-white font-bold text-[32px] hover:bg-[var(--hover-color)] transition-all ease duration-150 w-max">
                    GET STARTED
                </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_var(--primary-color)] screen-960:max-w-[432px] screen-1120:max-w-[512px] screen-1200:max-w-[632px] ">
                <Image src={dashboard} alt="dashboard-visual" width="fill" height="fill" className=""/>
            </div>
        </div>
    )
}