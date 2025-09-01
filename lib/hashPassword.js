import bcrypt from "bcryptjs"

export async function hashPassword(password) {
    const rounds = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, rounds);
}