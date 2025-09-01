"use server"
import { prisma } from "../prisma"
import { hashPassword } from "../hashPassword"

export async function registerWithCredentials(formData) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: formData.get("email")
            }
        })

        if (user) {
            return { success: false, error: "This email is already registered" }
        }

        const hashedPassword = await hashPassword(formData.get("password"))

        const characters = ["&", "é", '"', "'", "(", "-", "è", "ç", "à", ")", "=", "*", "$", "^", ";", ":", "!", ",", "ù", "~", "#", "{", "}", "[", "]", "|", "`", "\\", "²", " ", "/" ];
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        const characterVerification = characters.some(char=>formData.get("email").includes(char))

        const numberVerification = numbers.some(num=>formData.get("email").startsWith(num))

        if (characterVerification || numberVerification) {
            return {success: false, error: "Your email should not start with a number nor contain special characters"}
        }
        await prisma.user.create({
            data: {
                name: formData.get("name"),
                email: formData.get("email"),
                password: hashedPassword
            }
        })
        return { success: true }
    } catch (error) {
        console.error("Erreur lors de l'enregistrement: ", error)
        return { success: false, error: "An error has occured!" }
    }
}