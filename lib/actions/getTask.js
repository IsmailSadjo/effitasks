"use server"
import { prisma } from "../prisma"

export async function getTask(taskId) {
    const task = await prisma.task.findUnique({
        where: {
            id: taskId
        }
    })

    return task;
}