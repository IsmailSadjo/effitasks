"use client"
import { BiSolidBellRing } from 'react-icons/bi';
import { IoPerson } from 'react-icons/io5';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NotificationsModal from './NotificationsModal';
import AccountModal from './AccountModal';
import { getNotifications } from '@/lib/actions/getNotifications';

export default function SearchSection({ session, slug }) {

    const [show, setShow] = useState(false)
    const [notifications, setNotifications] = useState([])
    const [showNotifications, setShowNotifications] = useState(false)

    useEffect(() => {
        async function getNotifs() {
            let notifs = await getNotifications()
            let notifSorted = notifs.sort((a, b) => b.time - a.time)
            setNotifications(notifSorted)
        }

        getNotifs();
    }, [showNotifications]) 


    return (
        <div className="flex justify-between items-center gap-8 relative">
            <div className="flex justify-between items-center gap-4">
                <div className="text-white hover:scale-130 cursor-pointer relative transition-all ease duration-200" onClick={() => setShowNotifications(!showNotifications)}>
                    <BiSolidBellRing />
                </div>
                <button onClick={() => setShow(!show)} className={`w-8 h-8 rounded-full overflow-hidden cursor-pointer ${session?.user.image ? "" : "border border-white p-1"}`}>{session?.user?.image ? <Image src={session?.user?.image} className="w-full h-full" width={200} height={200} alt="image" /> : <IoPerson className="w-full h-full text-white" />}</button>
            </div>
            <NotificationsModal notifications={notifications} showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
            {
                show ? (
                    <AccountModal session={session} setShow={setShow}/>
                ) : (null)
            }
        </div>
    )
}