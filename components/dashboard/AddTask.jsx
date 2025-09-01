import { FaCalendarAlt } from 'react-icons/fa';
import { BiAlarm } from 'react-icons/bi';
import { MdPriorityHigh } from 'react-icons/md';
import { addTask } from '@/lib/actions/addTask';
import Cancel from './Cancel';
import { useEffect, useState } from 'react';
import Calendar from './Calendar';
import { createPortal } from 'react-dom';

export default function AddTask({ setAddTask }) {

    const [showCalendar, setShowCalendar] = useState(false)
    const [taskTime, setTaskTime] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours() + 1))
    const [reminder, setReminder] = useState("")
    const [portal, setPortal] = useState(null)

    useEffect(() => {
        setPortal(document.getElementById("portal"))
    }, [])

    function sendTime(time) {
        setTaskTime(time);
    }

    if (!portal) return null

    return createPortal(
        <div className="">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-2 bg-black/10" onClick={()=>setAddTask(false)}></div>
            <form action={addTask} className="absolute z-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[var(--accent-color)] shadow-[0_0_10px_var(--primary-color)] p-[20px_24px] w-max rounded-xl flex flex-col justify-center items-start gap-4">
                <input type="text" name="title" placeholder="Titre" className="bg-white rounded-lg p-[6px_18px] outline-none min-w-[400px] w-full   " autoFocus required />
                <input type="hidden" name="time" value={taskTime} />
                <input type="hidden" name="reminder" value={reminder} />
                <div className="flex justify-start items-center gap-4 mb-[18px] w-full">
                    <div className="relative border border-[var(--primary-color)] rounded-md p-1.5 flex justify-center items-center gap-1 leading-none">
                        <div className="flex justify-center items-center gap-1 cursor-pointer group" onClick={() => setShowCalendar(!showCalendar)}>
                            <FaCalendarAlt className="text-lg" />
                            <p className="font-bold text-nowrap">{taskTime.toLocaleString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" })}</p>
                        </div>
                        <Calendar sendTime={sendTime} setShowCalendar={setShowCalendar} showCalendar={showCalendar} />
                    </div>
                    <div className="text-nowrap relative font-bold">
                        <div className="absolute top-[50%] translate-y-[-50%] left-[6px] h-[18px] w-[18px]"><BiAlarm className="w-full h-full stroke-1"/></div>
                        <select onChange={(e) => { setReminder(e.target.value) }} className={`w-full flex justify-center outline-none border border-[var(--primary-color)] rounded-md p-1.5 pl-6 font-semibold cursor-pointer leading-none`}>
                            <option value="">Pas de rappel</option>
                            <option value="5 minutes avant">5 minutes avant</option>
                            <option value="10 minutes avant">10 minutes avant</option>
                            <option value="15 minutes avant">15 minutes avant</option>
                            <option value="20 minutes avant">20 minutes avant</option>
                            <option value="30 minutes avant">30 minutes avant</option>
                        </select>
                    </div>
                    {/* <div className="border border-[var(--primary-color)] rounded-md p-1.5 cursor-pointer"><MdPriorityHigh /></div> */}
                </div>
                <div className="flex justify-start items-center gap-4">
                    <button className="rounded-lg text-white p-[8px_16px] font-bold bg-[var(--primary-color)] cursor-pointer" type="submit">AJOUTER</button>
                    <Cancel setAddTask={setAddTask} />
                </div>
            </form>
        </div>, portal
    )
}