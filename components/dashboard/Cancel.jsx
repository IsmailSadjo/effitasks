export default function Cancel({setAddTask}){
    return (
        <button className="rounded-lg text-white p-[8px_16px] font-bold bg-[var(--red-color)] cursor-pointer" onClick={()=>setAddTask(false)}>ANNULER</button>
    )
}