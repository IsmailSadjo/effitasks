
export default function Notifications({ notifications, showNotifications }) { 

    return (
        <div className={`overflow-y-scroll scrollbar-hidden flex flex-col gap-1 justify-start items-start ${showNotifications ? "max-h-[520px]" : "max-h-0"} transition-all ease duration-275`}>
            {notifications.map(item => (
                <div key={item.id} className="p-1 bg-white/75 text-[var(--text-color)] rounded-lg w-full flex flex-col justify-start items-start gap-1">
                    <div className="flex justify-between items-start gap-3">
                        <div className="bg-white rounded-full min-h-8 min-w-8">

                        </div>
                        <p className="font-medium w-full">{item.content}</p>
                    </div>
                    <p className="font-bold text-sm self-end">{item.time.toLocaleString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" })}</p>
                </div>
            ))}
        </div>
    )
}