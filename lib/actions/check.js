"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma"

export async function check(taskId) {

    const task = await prisma.task.findUnique({
        where: {
            id: taskId,
        }
    })

    await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            completed: !task.completed
        }
    })
    revalidatePath("/dashboard/today")
    
}