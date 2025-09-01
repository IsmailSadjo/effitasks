"use server"
import { auth } from "@/auth"
import { prisma } from "../prisma"

export async function changeReminderSent(taskId) {
    const session = await auth();

    try {
        await prisma.task.update({
            where: {
                userId: session?.user.id,
                id: taskId
            },
            data: {
                reminderSent: true
            }
        })
    } catch (error) {
        console.error("Erreur lors de l'exécution de la tâche", error)
    }
} 