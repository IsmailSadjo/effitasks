import AddTask from "@/components/dashboard/AddTask"
import { useEffect, useState } from "react"
import Task from "./Task"

export default function TaskDisplay({addTask, setAddTask, allTasks, slug, accomplished, input}) {

    const [searched, setSearched] = useState([])

    useEffect(()=>{
        let searchedTasks = allTasks.filter(item=>item.title.toLowerCase().includes(input.toLowerCase()))
        setSearched(searchedTasks)
    }, [input, allTasks])

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const tasksToday = allTasks.filter(task=>task.date.toLocaleString("fr-FR", options) === new Date().toLocaleString("fr-FR", options) && !task.completed)
    const tasksShortly = allTasks.filter(task=>task.date > new Date() && !task.completed)
    const tasksLately = allTasks.filter(task=>task.date < new Date() && !task.completed)
    const tasksCompleted = allTasks.filter(task=>task.completed)

    return (
        <div className="h-full overflow-scroll scrollbar-hidden">
            {addTask ? <AddTask setAddTask={setAddTask} /> : null}
            <ul className="grid grid-cols-3 justify-center items-start gap-8 p-6 grid-container">
                {/* {allTasks.map(task=>(
                    <Task key={task.id} task={task} />
                ))} */}
                {
                    slug[0] === "today" ? (
                        tasksToday.map(task=>(
                            <Task key={task.id} task={task} accomplished={accomplished} slug={slug}/>
                        ))
                    ) : slug[0] === "shortly" ? (
                        tasksShortly.map(task=>(
                            <Task key={task.id} task={task} accomplished={accomplished} slug={slug}/>
                        ))
                    ) : slug[0] === "lately" ? (
                        tasksLately.map(task=>(
                            <Task key={task.id} task={task} accomplished={accomplished} slug={slug}/>
                        ))
                    ) : slug[0] === "completed" ? (
                        tasksCompleted.map(task=>(
                            <Task key={task.id} task={task} accomplished={accomplished} slug={slug}/>
                        ))
                    ) : slug[0] === "search" ? (
                        // <p>Hello: {input}</p>
                        searched.map((task)=>(
                            <Task key={task.id} task={task} accomplished={accomplished} slug={slug}/>
                        ))
                    ) : null
                }
            </ul>
        </div>
    )
}