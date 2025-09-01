"use server"
import { prisma } from "../prisma"

export async function getReminder(taskId) {
    const task = await prisma.task.findUnique({
        where: {
            id: taskId
        }
    });
    return task.reminder
}