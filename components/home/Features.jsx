import { data } from "./reusables/data"
import FeatureCard from "./reusables/FeatureCard"

export default function Features() {
    return (
        <div className="mx-auto max-tablet:px-12 px-18 mt-[200px] screen-960:max-w-[1024px] screen-1200:max-w-[1440px] tablet:max-w-[720px] flex flex-col justify-between items-center gap-16">
            <h2 className="font-bold text-5xl tracking-tight leading-tight text-center px-12">Découvrez tout ce qu'EFFITASKS vous offre pour organiser votre quotidien en toute simplicité</h2>
            <div className="grid grid-rows-4 gap-48 py-12 px-16">
                {data.map(item => (
                    <FeatureCard key={item.index} item={item} />
                ))}
            </div>
        </div>
    )
}