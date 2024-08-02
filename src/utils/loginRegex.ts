import { emailReg, passwordReg, authCodeReg } from "../constants/form"

export function emailPattern(e: string) {
    return emailReg.test(e)
}

export function passwordPattern(e: string) {
    return passwordReg.test(e)
}

export function authCodePattern(e: string) {
    return authCodeReg.test(e)
}