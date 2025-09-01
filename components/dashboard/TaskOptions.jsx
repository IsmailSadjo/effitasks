import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

export default function TaskOptions({task, remove, setChecked, sendCheck, accomplished, slug, setAddTask, setShowOptions, optionsPosition}) {

    const [portal, setPortal] = useState(null)

    useEffect(()=>{
        setPortal(document.getElementById("portal"));
    }, [])

    if(!portal) return null

    return createPortal(
        <div className="">
            <div className="absolute top-0 right-0 left-0 bottom-0" onClick={()=>setShowOptions(false)}></div>
            <div className="flex flex-col justify-start items-start gap-1 p-2.5 absolute bg-white border border-[var(--primary-color)] rounded-2xl" style={optionsPosition}>
                <button className="flex justify-between items-center gap-6 w-full cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 rounded-2xl" onClick={() => { setAddTask(true), setShowOptions(false) }}><span>Modifier</span><FaPen /></button>
                <hr className="w-full h-[1px] border-none bg-[var(--text-color)]" />
                <form action={() => remove(task.id)}>
                    <button type="submit" className="text-[var(--red-color)] flex justify-between items-center gap-6 w-full cursor-pointer hover:bg-[var(--red-color)] hover:text-white p-2 rounded-2xl">
                        <span>Supprimer</span>
                        <FaTrash />
                    </button>
                </form>
                {
                    slug[0] === "completed" ? (
                        <>
                            <hr className="w-full h-[1px] border-none bg-[var(--text-color)]" />
                            <button type="button" onClick={() => { setChecked(false), sendCheck(task.id), accomplished() }} className="flex justify-between items-center gap-6 w-full cursor-pointer hover:bg-[var(--primary-color)] hover:text-white p-2 rounded-2xl">
                                Restaurer
                            </button>
                        </>
                    ) : null
                }
            </div>
        </div>, portal
    )
}