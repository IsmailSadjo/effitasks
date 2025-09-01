"use client"
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AddTask from './AddTask';
import Task from './Task';

export default function CalendarView({ allTasks, slug, accomplished, addTask, setAddTask}) {

    const [currentDate, setCurrentDate] = useState(new Date())

    const [firstDay, setFirstDay] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toLocaleString("fr-FR", { weekday: "long" }))

    const [daysInMonth, setDaysInMonth] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate())

    const [date, setDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))

    const [selectedDate, setSelectedDate] = useState(new Date().getDate())

    const [calendarStart, setCalendarStart] = useState("")
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    // const hours = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
    // const minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]

    let numberOfDays = days.filter(day => day <= daysInMonth)
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
        <div className="bg-[#1C274C]/95 w-full h-full rounded-lg flex justify-start overflow-hidden items-start">
            <div className="basis-1/3 bg-white h-full p-2 w-full flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-center w-full">{selectedDate} {currentDate.toLocaleString("fr-FR", { month: "long" })} {currentDate.toLocaleString("fr-FR", { year: "numeric" })}</h2>
                <div className="h-full w-full overflow-y-scroll scrollbar-hidden">
                    <div className="flex flex-col justify-start items-start gap-1 w-full max-h-full">
                        {allTasks.filter(task => (
                            selectedDate === task.date.getDate() && currentDate.getMonth() === task.date.getMonth() && currentDate.getFullYear() === task.date.getFullYear()
                        )).map(item => (
                            <div key={item.id} className="border border-[var(--primary-color)] rounded-2xl w-full">
                                <Task task={item} slug={slug} accomplished={accomplished} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="basis-2/3 text-white p-2 h-full w-full flex flex-col gap-3">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-2xl font-bold">{currentDate.toLocaleString("fr-FR", { month: "long" })} - {currentDate.toLocaleString("fr-FR", { year: "numeric" })}</h2>
                    <div className="flex justify-center items-center gap-4">
                        <button className="py-2 px-2.5 leading-none border rounded-lg hover:bg-white hover:text-[var(--text-color)] cursor-pointer font-bold" onClick={() => { setCurrentDate(new Date()), setFirstDay(new Date(new Date().getFullYear(), new Date().getMonth(), 1).toLocaleString("fr-FR", { weekday: "long" })), setSelectedDate(today.getDate()) }}>Aujourd'hui</button>
                        <div className="border rounded-lg border-white flex justify-center items-center overflow-hidden">
                            <button className="py-2 px-2.5 border-r cursor-pointer hover:bg-white hover:text-[var(--text-color)]" onClick={prevMonth}>
                                <FaChevronLeft />
                            </button>
                            <button className="py-2 px-2.5 cursor-pointer hover:bg-white hover:text-[var(--text-color)]" onClick={nextMonth}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full rounded-lg shadow-[0_0_5px_white] p-5 flex flex-col justify-start items-start gap-2 bg-[#1C274C]">
                    <div className="grid grid-cols-7 w-full">
                        <p className="">Lundi</p>
                        <p className="">Mardi</p>
                        <p className="">Mercredi</p>
                        <p className="">Jeudi</p>
                        <p className="">Vendredi</p>
                        <p className="">Samedi</p>
                        <p className="">Dimanche</p>
                    </div>
                    <div className={`grid grid-cols-7 gap-1 w-full h-full ${firstDay === "samedi" && daysInMonth > 30 || firstDay === "dimanche" && daysInMonth >= 30 ? "grid-rows-6" : "grid-rows-5"}`}>
                        {
                            numberOfDays.map(day => (
                                <div key={day} onClick={() => setSelectedDate(day)} className={`flex flex-col justify-between items-start bg-[var(--accent-color)] rounded-lg text-[var(--text-color)] p-1.5 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors ease duration-75 ${day === 1 && calendarStart} ${currentDate.getFullYear() === today.getFullYear() && currentDate.getMonth() === today.getMonth() && day === today.getDate() ? "bg-amber-200" : ""}`}>
                                    <div className="flex justify-center items-center text-lg w-full">
                                        {allTasks.filter(task => task.date.getFullYear() === currentDate.getFullYear() && task.date.getMonth() === currentDate.getMonth() && task.date.getDate() === day).length !== 0 && (
                                            <div className="flex flex-col justify-between items-center gap-2">
                                                <span>{allTasks.filter(task => task.date.getFullYear() === currentDate.getFullYear() && task.date.getMonth() === currentDate.getMonth() && task.date.getDate() === day).length} tâche(s)</span>
                                                <span className="animate-pulse bg-[var(--hover-color)] w-4 h-4 rounded-full"></span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="flex justify-end font-bold w-full">{day}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {addTask && <AddTask setAddTask={setAddTask}/>}
        </div>
    )
}