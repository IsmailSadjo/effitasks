import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Calendar({ sendTime, setShowCalendar, showCalendar }) {

    const [currentDate, setCurrentDate] = useState(new Date())

    const [firstDay, setFirstDay] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toLocaleString("fr-FR", { weekday: "long" }))

    const [daysInMonth, setDaysInMonth] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate())

    const [calendarStart, setCalendarStart] = useState("")
    const [taskDay, setTaskDay] = useState(new Date())
    const [taskHour, setTaskHour] = useState(new Date().getHours())
    const [taskMinutes, setTaskMinutes] = useState(0)
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
    const minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]

    let numberOfDays = days.filter(day => day <= daysInMonth)
    let date = taskDay.getDate();
    const today = new Date();



    useEffect(() => {
        if (firstDay === "lundi") {
            setCalendarStart("col-start-1")
        } else if (firstDay === "mardi") {
            setCalendarStart("col-start-2")
        } else if (firstDay === "mercredi") {
            setCalendarStart("col-start-3")
        } else if (firstDay === "jeudi") {
            setCalendarStart("col-start-4")
        } else if (firstDay === "vendredi") {
            setCalendarStart("col-start-5")
        } else if (firstDay === "samedi") {
            setCalendarStart("col-start-6")
        } else if (firstDay === "dimanche") {
            setCalendarStart("col-start-7")
        }
    }, [currentDate])

    function nextMonth() {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
        setFirstDay(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1).toLocaleString("fr-FR", { weekday: "long" }))
        setDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0).getDate())
    }

    function prevMonth() {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
        setFirstDay(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1).toLocaleString("fr-FR", { weekday: "long" }))
        setDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate())
    }

    return (
        <div className={`absolute flex flex-col justify-between items-center gap-2 bottom-0 translate-y-[101%] left-0 border p-2 rounded-md border-[var(--primary-color)] bg-white  ${showCalendar ? "visible" : "invisible"}`}>
            <div className="flex justify-between items-center w-full">
                <button type="button" className="cursor-pointer" onClick={prevMonth}>
                    <FaChevronLeft />
                </button>
                <p className="text-nowrap font-bold">
                    {currentDate.toLocaleString("fr-FR", { month: "long" })} {currentDate.toLocaleString("fr-FR", { year: "numeric" })}
                </p>
                <button type="button" className="cursor-pointer" onClick={nextMonth}>
                    <FaChevronRight />
                </button>
            </div>
            <hr className="border-none h-[1px] w-full bg-[var(--hover-color)]" />
            <div className="w-[280px]">
                <div className="">
                    <div className="grid grid-cols-7">
                        <p className="flex justify-center items-center font-semibold">Lun</p>
                        <p className="flex justify-center items-center font-semibold">Mar</p>
                        <p className="flex justify-center items-center font-semibold">Mer</p>
                        <p className="flex justify-center items-center font-semibold">Jeu</p>
                        <p className="flex justify-center items-center font-semibold">Ven</p>
                        <p className="flex justify-center items-center font-semibold">Sam</p>
                        <p className="flex justify-center items-center font-semibold">Dim</p>
                    </div>
                    <div className="grid grid-cols-7">
                        {numberOfDays.map(day => (
                            <button type="button" onClick={() => { setTaskDay(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)), sendTime(new Date(currentDate.getFullYear(), currentDate.getMonth(), day, taskHour, taskMinutes)) }} key={day} className={`flex justify-center items-center cursor-pointer hover:bg-[var(--accent-color)] rounded-md p-1.5 ${day === 1 ? calendarStart : ""} ${(day < today.getDate() && today.getMonth() === currentDate.getMonth() && currentDate.getFullYear() === today.getFullYear()) || (new Date(currentDate.getFullYear(), currentDate.getMonth()) < new Date(today.getFullYear(), today.getMonth())) ? "opacity-30" : ""}`} disabled={(day < today.getDate() && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear()) || (new Date(currentDate.getFullYear(), currentDate.getMonth()) < new Date(today.getFullYear(), today.getMonth())) ? true : false}>{day}</button>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="border-none h-[1px] w-full bg-[var(--hover-color)]" />
            <div className="border border-[var(--primary-color)] rounded-md flex justify-center items-center gap-[1px] p-2">
                <p className="text-[var(--primary-color)] font-bold">Heure</p>
                <div className="flex justify-center items-center gap-1">
                    <select value={taskHour} onChange={(e) => setTaskHour(e.target.value)} className=" border-[var(--primary-color)] hover:bg-[var(--accent-color)] cursor-pointer rounded-md p-1.5 appearance-none outline-none">
                        {hours.map(hour => (
                            <option key={hour} value={hour}>{hour}</option>
                        ))}
                    </select>
                </div>
                <p className="font-bold">:</p>
                <div className="flex justify-center items-center gap-1">
                    <select value={taskMinutes} onChange={(e) => setTaskMinutes(e.target.value)} className=" border-[var(--primary-color)] hover:bg-[var(--accent-color)] cursor-pointer rounded-md p-1.5 appearance-none outline-none">
                        {minutes.map(minute => (
                            <option key={minute} value={minute}>{minute}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr className="border-none h-[1px] w-full bg-[var(--hover-color)]" />
            <div className="flex justify-start items-center gap-4">
                <div className="rounded-lg text-white p-[8px_16px] font-bold bg-[var(--primary-color)] cursor-pointer" onClick={() => { setShowCalendar(false), sendTime(new Date(currentDate.getFullYear(), currentDate.getMonth(), taskDay.getDate(), taskHour, taskMinutes)) }}>VALIDER</div>
                <button className="rounded-lg text-white p-[8px_16px] font-bold bg-[var(--red-color)] cursor-pointer" type="button" onClick={() => { setCurrentDate(new Date()), sendTime(new Date()), setShowCalendar(false) }}>ANNULER</button>
            </div>
        </div>
    )
}