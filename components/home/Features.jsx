import { data } from "./reusables/data"
import FeatureCard from "./reusables/FeatureCard"

export default function Features() {
    return (
        <div className="mx-auto max-tablet:px-12 mt-[200px] screen-960:max-w-[1024px] screen-1200:max-w-[1440px] tablet:max-w-[720px] flex flex-col justify-between items-center gap-16">
            <h2 className="font-bold text-5xl tracking-tight leading-tight text-center px-12 max-screen-960:px-2 max-screen-960:text-4xl max-tablet:text-3xl">Découvrez les fonctionnalités d'EFFITASKS</h2>
            <div className="flex flex-col justify-between items-center gap-48 py-12">
                {data.map(item => (
                    <FeatureCard key={item.index} item={item} />
                ))}
            </div>
        </div>
    )
}