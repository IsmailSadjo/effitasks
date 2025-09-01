"use server"
import { prisma } from "../prisma"
import { auth } from "@/auth"

export async function sendNotif(notif, taskId) {
    const session = await auth();

    try {
        await prisma.user.update({
            where: {
                id: session?.user.id
            },
            data: {
                notification: {
                    create: {
                        content: notif
                    }
                }
            }
        });
        await prisma.task.update({
            where: {
                id: taskId
            },
            data: {
                notifSent: true
            }
        })
    } catch (error) {
        console.log("Erreur serveur", error)
    }
}