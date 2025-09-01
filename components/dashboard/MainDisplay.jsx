"use client"
import TaskDisplay from "@/components/dashboard/TaskDisplay"
import { useState } from "react"
import CalendarView from "./CalendarView"

export default function MainDisplay({ title, allTasks, slug }) {

    const [addTask, setAddTask] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [input, setInput] = useState("")

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const time = new Date().toLocaleDateString("fr-FR", options)

    function accomplished() {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false)
        }, 2000)
    }

    return (
        <div className="bg-[var(--accent-color)]/85 rounded-3xl w-full h-full flex flex-col relative overflow-hidden">
            <div className="p-6 flex justify-between items-end border-b">
                <div className={`flex justify-between items-start gap-4 ${slug[0] === "calendar" ? "flex-row" : "flex-col"}`}>
                    <h2 className="font-bold text-4xl">{title}</h2>
                    <button className="text-lg p-[8px_16px] bg-[var(--primary-color)] text-white rounded-xl cursor-pointer hover:bg-[var(--hover-color)]" onClick={() => setAddTask(true)}>Ajouter une tâche</button>
                </div>
                {slug[0] === "search" ? (
                    <form action="">
                        <input type="text" autoFocus placeholder="Entrez le nom d'une tâche" value={input} onChange={(e)=>setInput(e.target.value)} className="bg-white p-[12px_18px] font-bold border-none rounded-3xl outline-none w-[400px]" />
                    </form>
                ) : null}
                <div className="font-bold">{time}</div>
            </div>
            {
                slug[0] === "calendar" ? (
                    <div className="p-6 w-full h-full relative overflow-hidden">
                        <CalendarView allTasks={allTasks} slug={slug} accomplished={accomplished} setAddTask={setAddTask} addTask={addTask}/>
                    </div>
                ) : <TaskDisplay addTask={addTask} slug={slug} setAddTask={setAddTask} allTasks={allTasks} input={input} accomplished={accomplished} />
            }
            <div className={`absolute bottom-2 right-2 shadow-[0_0_15px_var(--primary-color)] rounded-md p-2 font-bold bg-[var(--primary-color)] text-white transition-all ease duration-400 ${showMessage ? "visible translate-x-0" : "invisible translate-x-[120%]"}`}>
                Tâche {slug[0] === "completed" ? <span>restaurée</span> : <span>complétée</span>}
            </div>
        </div>
    )
}