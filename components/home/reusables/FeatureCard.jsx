import Image from "next/image";


export default function FeatureCard({item}) {
    return (
        <div className="grid grid-cols-3 gap-20">
            <div className={`col-span-2 p-2 rounded-[38px] flex justify-center items-center background-water-drop ${item.index === 0 || item.index === 2 ? "order-2" : ""}`}>
                <div className="rounded-4xl w-full overflow-hidden">
                    <Image src={item.image} alt='illustration' className="w-full h-full object-contain" loading="lazy"/>
                </div>
            </div>
            <div className={`flex flex-col justify-center items-start gap-6 ${item.index === 0 || item.index === 2 ? "order-1" : ""}`}>
                <div className="text-6xl text-[var(--hover-color)]">{item.icon}</div>
                <h2 className="font-bold text-3xl">{item.title}</h2>
                <p className="italic text-xl text-neutral-500">{item.desc}</p>
            </div>
        </div>
    )
}