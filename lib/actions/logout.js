"use server"

import { signOut } from "@/auth"

export async function logout() {
    await signOut({redirectTo: "/"})
}

export async function changeAccount() {
    await signOut({redirectTo: "/login"})
}