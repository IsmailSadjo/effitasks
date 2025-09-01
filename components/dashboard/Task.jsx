"use client"
import { HiDotsHorizontal } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';;
import { deleteTask } from '@/lib/actions/deleteTask';
import { check } from '@/lib/actions/check';
import ModifyTask from './ModifyTask';
import { sendNotif } from '@/lib/actions/sendNotif';
import { changeReminderSent } from '@/lib/actions/changeReminderSent';
import TaskOptions from './TaskOptions';
// import audio from "../../public/audio/alarm.mp3";

export default function Task({ task, accomplished, slug }) {

    const [showOptions, setShowOptions] = useState(false)
    const [checked, setChecked] = useState(false)
    const [addTask, setAddTask] = useState(false)
    const [timePassed, setTimePassed] = useState(new Date() >= task.date ? true : false)
    const [optionsPosition, setOptionsPosition] = useState({ top: 0, right: 0 })

    const target = useRef(null)


    async function sendNotification(notif, task) {
        await sendNotif(notif, task.id);
    }

    async function showNotification(task, status) {
        if (typeof window === "undefined" || !("Notification" in window)) {
            alert("Les notifications ne sont pas supportées par ce navigateur.");
            return;
        }

        let permission = Notification.permission;
        if (permission !== "granted") {
            permission = await Notification.requestPermission();
        }

        if (permission === "granted") {
            if (status === "reminder") {
                new Notification("It's almost time", {
                    body: `${task.reminder} le début d'une tâche`,
                });
            } else if (status === "time up") {
                new Notification("It's already time", {
                    body: `C'est l'heure d'exécuter une tâche`,
                });
            }
        }
    }

    async function reminderShown(id) {
        await changeReminderSent(id)
    }

    useEffect(() => {

        let play = false

        function checkTime() {
            const taskTime = new Date(task.date)
            const now = new Date()
            const audio = new Audio("/audio/alarm.m4a")

            if (play === true) {
                console.log("Nothing to do")
            }
            if (task.reminder === "30 minutes avant") {
                if (now.getFullYear() === taskTime.getFullYear() && now.getMonth() === taskTime.getMonth() && now.getDate() === taskTime.getDate() && play === false && !task.completed && !task.reminderSent && ((now.getHours() === taskTime.getHours() && now.getMinutes() === (taskTime.getMinutes() - 30)) || (now.getHours() === (taskTime.getHours() - 1) && !task.completed && !task.reminderSent && now.getMinutes() === (60 + (taskTime.getMinutes() - 30))))) {
                    audio.play();
                    showNotification(task, "reminder");
                    reminderShown(task.id)
                    play = true;
                }
            } else if (task.reminder === "20 minutes avant") {
                if (now.getFullYear() === taskTime.getFullYear() && now.getMonth() === taskTime.getMonth() && now.getDate() === taskTime.getDate() && play === false && !task.completed && !task.reminderSent && ((now.getHours() === taskTime.getHours() && now.getMinutes() === (taskTime.getMinutes() - 20)) || (now.getHours() === (taskTime.getHours() - 1) && !task.completed && !task.reminderSent && now.getMinutes() === (60 + (taskTime.getMinutes() - 20))))) {
                    audio.play();
                    showNotification(task, "reminder")
                    reminderShown(task.id)
                    play = true;
                }
            } else if (task.reminder === "15 minutes avant") {
                if (now.getFullYear() === taskTime.getFullYear() && now.getMonth() === taskTime.getMonth() && now.getDate() === taskTime.getDate() && play === false && !task.completed && !task.reminderSent && ((now.getHours() === taskTime.getHours() && now.getMinutes() === (taskTime.getMinutes() - 15)) || (now.getHours() === (taskTime.getHours() - 1) && !task.completed && !task.reminderSent && now.getMinutes() === (60 + (taskTime.getMinutes() - 15))))) {
                    audio.play();
                    showNotification(task, "reminder")
                    reminderShown(task.id)
                    play = true
                }
            } else if (task.reminder === "10 minutes avant") {
                if (now.getFullYear() === taskTime.getFullYear() && now.getMonth() === taskTime.getMonth() && now.getDate() === taskTime.getDate() && play === false && !task.completed && !task.reminderSent && ((now.getHours() === taskTime.getHours() && now.getMinutes() === (taskTime.getMinutes() - 10)) || (now.getHours() === (taskTime.getHours() - 1) && !task.completed && !task.reminderSent && now.getMinutes() === (60 + (taskTime.getMinutes() - 10))))) {
                    audio.play();
                    showNotification(task, "reminder")
                    reminderShown(task.id)
                    play = true
                }
            } else if (task.reminder === "5 minutes avant") {
                if (now.getFullYear() === taskTime.getFullYear() && now.getMonth() === taskTime.getMonth() && now.getDate() === taskTime.getDate() && play === false && !task.completed && !task.reminderSent && ((now.getHours() === taskTime.getHours() && now.getMinutes() === (taskTime.getMinutes() - 5)) || (now.getHours() === (taskTime.getHours() - 1) && !task.completed && !task.reminderSent && now.getMinutes() === (60 + (taskTime.getMinutes() - 5))))) {
                    audio.play();
                    showNotification(task, "reminder");
                    reminderShown(task.id)
                    play = true
                    console.log(play)
                }
            }

            if (now.getHours() === taskTime.getHours() && now.getMinutes() === taskTime.getMinutes() && !task.completed && play === false && !task.notifSent) {
                showNotification(task, "time up")
                sendNotification(`Il est l'heure d'exécuter une tâche: ${task.title}`, task)
                play = true;
            }
            if (now >= taskTime) {
                setTimePassed(true)
            } else {
                setTimePassed(false)
            }
        }

        const interval = setInterval(checkTime, 1000 * 1);
        return () => clearInterval(interval);

    }, [task])

    useEffect(() => {

        function updatePosition() {
            if (target.current) {
                const rect = target.current.getBoundingClientRect()
                setOptionsPosition({
                    top: rect.bottom + window.scrollY,
                    right: window.outerWidth - rect.left - rect.width - 10
                });
            }
        }

        updatePosition();

        window.addEventListener("scroll", updatePosition);
        window.addEventListener("resize", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition);
            window.removeEventListener("resize", updatePosition)
        }

    }, [showOptions])

    async function remove(taskId) {
        try {
            await deleteTask(taskId);
        } catch (error) {
            console.error("Ne peut supprimer la tâche: ", error)
        }
    }

    async function sendCheck(taskId) {
        try {
            await check(taskId)
        } catch (error) {
            console.log("Ne peut aboutir!", error)
        }
    }

    const date = new Date(task.date)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }
    const time = date.toLocaleString("fr-FR", options)

    return (
        <div className={`rounded-3xl bg-white p-2.5 flex flex-col justify-start items-start ${new Date().getHours}`}>
            <div className="flex justify-between items-start gap-4 mb-2 w-full">
                <div className="flex justify-between items-start gap-2 w-full">
                    <div className="flex justify-start items-start gap-2 max-w-[calc(100%-32px)]">
                        <form action="">
                            <input type="checkbox" disabled={slug[0] === "completed" || (slug[0] === "calendar" && task.completed) ? true : false} checked={task.completed ? true : false} onChange={() => { setChecked(true), sendCheck(task.id), accomplished() }} className="flex justify-center items-center appearance-none w-5.5 h-5.5 rounded-2xl border checked:bg-sky-500 checked:after:content-['✓'] checked:after:relative checked:after:flex checked:after:text-white hover:border-[var(--hover-color)] cursor-pointer" />
                        </form>
                        <p className={`font-bold truncate ${task.completed && "line-through text-neutral-400"}`}>{task.title}</p>
                    </div>
                    <div className="relative" ref={target}>
                        <HiDotsHorizontal className={`text-2xl cursor-pointer rounded-full relative ${showOptions && "bg-[var(--text-color)]/25"}`} onClick={() => setShowOptions(!showOptions)} />
                        {showOptions ? (
                            <TaskOptions task={task} remove={remove} setChecked={setChecked} setShowOptions={setShowOptions} sendCheck={sendCheck} slug={slug} setAddTask={setAddTask} accomplished={accomplished} optionsPosition={optionsPosition} />
                        ) : (null)}
                    </div>
                </div>
            </div>
            <p className={`text-[14px] text-[var(--hover-color)] mb-5 ${timePassed ? "text-[var(--red-color)]" : ""}`}>{time}</p>
            {task.reminder ? <p className="text-[14px]"><b>Rappel</b> - {task.reminder}</p> : <p className="text-[14px]"><b>Pas de rappel</b></p>}
            {addTask && (
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <ModifyTask setAddTask={setAddTask} task={task} />
                </div>
            )}
        </div>
    )
}