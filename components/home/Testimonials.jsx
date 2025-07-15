"use client"

import { useState } from "react";

import TestimonialCard from "./reusables/TestimonialCard"
import { data } from "./reusables/testimonials"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


export default function Testimonials() {

    const [position, setPosition] = useState("one")
    const [scroll, setScroll] = useState(1)

    function scrollRight() {
        if(scroll < 6) {
            setScroll(scroll+1)
        }else {
            setScroll(scroll)
        }
    }

    function scrollLeft() {
        if(scroll >= 2) {
            setScroll(scroll-1)
        }
        else {
            setScroll(scroll)
        }
    }

    return (
        <div className="mx-auto mt-[200px] screen-960:max-w-[1024px] screen-1200:max-w-[1440px] tablet:max-w-[720px] overflow-hidden mb-[96px] flex flex-col justify-center items-start gap-16 p-2">
            <h2 className="font-bold text-5xl tracking-tight leading-tight text-center px-12 w-full">Ce que nos utilisateurs disent de nous</h2>
            <div className="flex justify-center items-center mx-auto gap-2">
                <button className="text-[var(--primary-color)] w-10 h-10 mr-1 cursor-pointer hover:scale-95">
                    <FaArrowAltCircleLeft className="w-full h-full" onClick={scrollLeft}/>
                </button>
                <div className={`w-4 h-4 border rounded-full ${scroll === 1 ? "bg-[var(--primary-color)]" : ""}`}></div>
                <div className={`w-4 h-4 border rounded-full ${scroll === 2 ? "bg-[var(--primary-color)]" : ""}`}></div>
                <div className={`w-4 h-4 border rounded-full ${scroll === 3 ? "bg-[var(--primary-color)]" : ""}`}></div>
                <div className={`w-4 h-4 border rounded-full ${scroll === 4 ? "bg-[var(--primary-color)]" : ""}`}></div>
                <div className={`w-4 h-4 border rounded-full ${scroll === 5 ? "bg-[var(--primary-color)]" : ""}`}></div>
                <div className={`w-4 h-4 border rounded-full ${scroll === 6 ? "bg-[var(--primary-color)]" : ""}`}></div>
                <button className="text-[var(--primary-color)] w-10 h-10 ml-1 cursor-pointer hover:scale-95">
                    <FaArrowAltCircleRight className="w-full h-full" onClick={scrollRight}/>
                </button>
            </div>
            <div className="flex flex-col justify-between items-center">
                <div className={`flex justify-start transition-all ease duration-300 gap-16 w-max ${scroll === 1 ? "translate-x-[0px]" : scroll === 2 ? "translate-x-[-496px]" : scroll === 3 ? "translate-x-[-992px]" : scroll === 4 ? "translate-x-[-1488px]" : scroll === 5 ? "translate-x-[-1984px]" : scroll === 6 ? "translate-x-[-2480px]" : "" }`}>
                    {
                        data.map(item => (
                            <TestimonialCard key={item.index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}