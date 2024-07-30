import { emailReg, passwordReg, codeReg } from "../constants/form"

export function emailPattern(e: string) {
    return emailReg.test(e)
}

export function passwordPattern(e: string) {
    return passwordReg.test(e)
}

export function codePattern(e: string) {
    return codeReg.test(e)
}