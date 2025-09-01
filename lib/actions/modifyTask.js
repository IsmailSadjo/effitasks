"use server"
import { prisma } from "../prisma"
import { revalidatePath } from "next/cache"

export async function modifyTask(taskId, formData) {

    const time = formData.get("time")

    await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            title: formData.get("title"),
            date: new Date(time),
            reminder: formData.get("reminder")
        }
    });
    revalidatePath("/dashboard/today")
    
}