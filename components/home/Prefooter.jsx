import Link from "next/link"

export default function Prefooter() {
    return (
        <div className="mx-auto mb-[192px] max-tablet:px-12 mt-[200px] screen-960:max-w-[1024px] screen-1200:max-w-[1440px] tablet:max-w-[720px] rounded-3xl p-4 bg-linear-to-b from-[var(--primary-color)] to-[var(--accent-color)]">
            <div className="relative flex flex-col justify-between items-start gap-6 rounded-3xl p-[32px_24px] custom-form-prefooter bg-white overflow-hidden">
                <h2 className="font-bold text-5xl tracking-tight leading-tight text-left w-full max-w-[632px]">Organisez votre quotidien avec efficacité. Commencez dès maintenant</h2>
                <Link href="/" className="text-center p-4 bg-[var(--primary-color)] text-white font-bold text-[32px] hover:bg-[var(--hover-color)] transition-all ease duration-150">
                    GET STARTED
                </Link>
                <p className="mt-4 text-neutral-500 text-xl italic max-w-[632px]">Planifiez vos journées, gérez mieux votre temps, soyez plus productif, n'oubliez plus rien. Avec EFFITASKS, gagnez en clarté, en efficacité et en sérénité au quotidien.</p>
                <div className="absolute w-100 h-100 rounded-full right-0 bottom-0 translate-x-50 translate-y-50 bg-radial from-[var(--primary-color)] to-white to-95% z-3"></div>
                <div className="absolute w-120 h-120 rounded-full right-0 bottom-0 translate-x-60 translate-y-60 bg-radial from-[var(--primary-color)] to-white z-2"></div>
                <div className="absolute w-140 h-140 rounded-full right-0 bottom-0 translate-x-70 translate-y-70 bg-radial from-[var(--primary-color)] to-white z-1"></div>
            </div>
        </div>
    )
}