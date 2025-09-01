"use server"
import { auth } from "@/auth"
import { prisma } from "../prisma"

export async function getNotifications() {
    const session = await auth();

    const notifications = await prisma.notification.findMany({
        where: {
            userId: session?.user.id
        }
    })

    return notifications
}