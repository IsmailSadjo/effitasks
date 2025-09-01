"use client"
import Notifications from './Notifications';
import { AiOutlineClose } from 'react-icons/ai';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

export default function NotificationsModal({ showNotifications, setShowNotifications, notifications }) {

    const [portal, setPortal] = useState(null)

    useEffect(() => {
        setPortal(document.getElementById("portal"));
    }, [])

    if (!portal) return null

    return createPortal(
        <div className={`${showNotifications ? "visible" : "invisible"}`}>
            <div className="fixed top-0 left-0 right-0 bottom-0 z-2" onClick={() => setShowNotifications(false)}></div>
            <div className={`${showNotifications ? "visible" : "invisible"} flex flex-col justify-start items-start gap-2 transition-all ease duration-250 rounded-md bg-sky-600/80 absolute top-0 right-0 translate-y-[72px] translate-x-[-24px] border shadow-[0_0_15px_var(--accent-color)] z-3 text-white p-2 w-[350px]`}>
                <div className="flex justify-between items-center w-full">
                    <h3 className="font-bold text-2xl">Notifications</h3>
                    <AiOutlineClose className="text-2xl cursor-pointer hover:scale-115 transition-all ease duration-125 hover:text-[var(--red-color)]" onClick={() => setShowNotifications(false)} />
                </div>
                <Notifications notifications={notifications} showNotifications={showNotifications} />
            </div>
        </div>, portal
    )
}