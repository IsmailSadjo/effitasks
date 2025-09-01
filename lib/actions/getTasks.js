"use server"
import { prisma } from "../prisma"
import { auth } from "@/auth"
export async function getTasks() {

    const session = await auth();
    const allTasks = await prisma.task.findMany({
        where: {
            userId: session.user.id
        }
    })
    return allTasks;
}