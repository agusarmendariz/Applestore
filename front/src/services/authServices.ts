
import { LoginFormValues } from "@/validators/loginSchema";
import { apiURL } from "./config";
import { RegisterFormValues } from "@/validators/registerSchema";

export async function registerUser(userData: RegisterFormValues) {
    try {
        const res = await fetch(`${apiURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error((error as Error).message)
    }
}

export async function loginUser(userData:LoginFormValues) {
    try {
        const res = await fetch(`${apiURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error((error as Error).message)
    }
}