"use server"
import { signIn } from "@/auth"

export async function loginWithCredentials(formData) {
    try {
        const result = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        });
        if(result) return { success: true }
    } catch (error) {
        return { success: false, error: "Erreur de connexion" }
    }
}