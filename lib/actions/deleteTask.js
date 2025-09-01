"use server"
import { prisma } from "../prisma"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache";
export async function deleteTask(taskId) {
    const session = await auth();

    await prisma.task.delete({
        where: {
            userId: session.user.id,
            id: taskId
        }
    })
    revalidatePath("/dashboard/today")
}