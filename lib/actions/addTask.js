"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma"
import { auth } from "@/auth";

export async function addTask(formData) {

    const session = await auth();
    const time = formData.get("time");
    const reminder = formData.get("reminder")

    try {
        await prisma.user.update({
            where: {
                id: session?.user.id
            },
            data: {
                task: {
                    create: {
                        title: formData.get("title"),
                        date: new Date(time),
                        reminder: reminder
                    }
                }
            }
        })
        revalidatePath("/dashboard/today")
    } catch (error) {
        console.error("An error has occured: ", error)
    }
}