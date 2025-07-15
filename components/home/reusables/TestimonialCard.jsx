import { IoPersonOutline } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa6';
import { FaQuoteRight } from 'react-icons/fa6';

export default function TestimonialCard({item}) {
    return (
        <div className="flex flex-col justify-between items-start gap-2 p-6 w-[432px] bg-[var(--accent-color)] rounded-bl-3xl rounded-tr-3xl shadow-[0_0_6px_var(--hover-color)]">
            <div className="flex justify-start items-center w-full px-4">
                <FaQuoteLeft />
            </div>
            <div className="px-8 text-xl text-justify font-semibold">
                {item.quote}
            </div>
            <div className="flex justify-end items-center w-full px-4">
                <FaQuoteRight />
            </div>
            <div className="mt-4 px-8 flex flex-col justify-between items-start gap-2">
                <div className="w-12 h-12"><IoPersonOutline className="w-full h-full border rounded-full p-1"/></div>
                <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="italic text-neutral-500">{item.profession}</p>
                </div>
            </div>
        </div>
    )
}