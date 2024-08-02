import { authCodePattern, emailPattern, passwordPattern } from "@/src/utils/loginRegex";
import { createSlice } from "@reduxjs/toolkit";

const initialState: dialogState = {
    isOpen: false,
    isLoginPanel: true,
    emailTotal: {
        emailValue: '',
        emailErrorMsg: '',
        isEmailInvalid: false,
        emailInputColor: 'default'
    },
    passwordTotal: {
        pwdValue: '',
        pwdErrorMsg: '',
        isPwdInvalid: false,
        pwdInputColor: 'default'
    },
    authCodeTotal: {
        authCodeValue: '',
        authCodeErrorMsg: '',
        isAuthCodeInvalid: false,
        authCodeInputColor: 'default'
    },
    totalInput: {
        emailValue: '',
        passwordValue: '',
        authCodeValue: ''
    }
}

export const loginDialogSlice = createSlice({
    name: 'loginDialog',
    initialState,
    reducers: {
        showModal(state) {
            state.isOpen = !state.isOpen
        },
        changePanel(state) {
            state.isLoginPanel = !state.isLoginPanel
        },
        setEmailValue(state, actions) {
            state.emailTotal.emailValue = actions.payload
        },
        verifyEmail(state) {
            if (state.emailTotal.emailValue === '') {
                state.emailTotal.emailErrorMsg = '邮箱不能为空！'
                state.emailTotal.emailInputColor = 'danger'
                state.emailTotal.isEmailInvalid = true
            } else if (!emailPattern(state.emailTotal.emailValue)) {
                state.emailTotal.emailErrorMsg = '请输入正确的邮箱！'
                state.emailTotal.emailInputColor = 'danger'
                state.emailTotal.isEmailInvalid = true
            } else {
                state.emailTotal.emailErrorMsg = ''
                state.emailTotal.emailInputColor = 'success'
                state.emailTotal.isEmailInvalid = false
            }
        },
        clearEmailInput(state) {
            state.emailTotal.emailValue = ''
            state.emailTotal.emailErrorMsg = ''
            state.emailTotal.isEmailInvalid = false
            state.emailTotal.emailInputColor = 'default'
        },
        setPasswordValue(state, actions) {
            state.passwordTotal.pwdValue = actions.payload
        },
        verifyPassword(state) {
            if (state.passwordTotal.pwdValue === '') {
                state.passwordTotal.pwdErrorMsg = '密码不能为空！'
                state.passwordTotal.pwdInputColor = 'danger'
                state.passwordTotal.isPwdInvalid = true
            } else if (!passwordPattern(state.passwordTotal.pwdValue)) {
                state.passwordTotal.pwdErrorMsg = '密码必须包含英文和数字，字符.-_可选，长度8~16位'
                state.passwordTotal.pwdInputColor = 'danger'
                state.passwordTotal.isPwdInvalid = true
            } else {
                state.passwordTotal.pwdErrorMsg = ''
                state.passwordTotal.pwdInputColor = 'success'
                state.passwordTotal.isPwdInvalid = false
            }
        },
        clearPasswordInput(state) {
            state.passwordTotal.pwdValue = ''
            state.passwordTotal.pwdErrorMsg = ''
            state.passwordTotal.isPwdInvalid = false
            state.passwordTotal.pwdInputColor = 'default'
        },
        setAuthCodeValue(state, actions) {
            state.authCodeTotal.authCodeValue = actions.payload
        },
        verifyAuthCode(state) {
            if (state.authCodeTotal.authCodeValue === '') {
                state.authCodeTotal.authCodeErrorMsg = '验证码不能为空！'
                state.authCodeTotal.authCodeInputColor = 'danger'
                state.authCodeTotal.isAuthCodeInvalid = true
            } else if (!authCodePattern(state.authCodeTotal.authCodeValue)) {
                state.authCodeTotal.authCodeErrorMsg = '请输入正确的验证码！'
                state.authCodeTotal.authCodeInputColor = 'danger'
                state.authCodeTotal.isAuthCodeInvalid = true
            } else {
                state.authCodeTotal.authCodeErrorMsg = ''
                state.authCodeTotal.authCodeInputColor = 'success'
                state.authCodeTotal.isAuthCodeInvalid = false
            }
        },
        clearAuthCodeInput(state) {
            state.authCodeTotal.authCodeValue = ''
            state.authCodeTotal.authCodeErrorMsg = ''
            state.authCodeTotal.isAuthCodeInvalid = false
            state.authCodeTotal.authCodeInputColor = 'default'
        },
        resetFields(state) {
            state.emailTotal = {
                emailValue: '',
                emailErrorMsg: '',
                isEmailInvalid: false,
                emailInputColor: 'default'
            }
            state.passwordTotal = {
                pwdValue: '',
                pwdErrorMsg: '',
                isPwdInvalid: false,
                pwdInputColor: 'default'
            }
            state.authCodeTotal = {
                authCodeValue: '',
                authCodeErrorMsg: '',
                isAuthCodeInvalid: false,
                authCodeInputColor: 'default'
            }
        },

    }
})

export const {
    showModal,
    changePanel,
    setEmailValue,
    verifyEmail,
    clearEmailInput,
    setPasswordValue,
    verifyPassword,
    clearPasswordInput,
    setAuthCodeValue,
    verifyAuthCode,
    clearAuthCodeInput,
    resetFields,
    // submitFields
} = loginDialogSlice.actions
export default loginDialogSlice.reducer

// export const submitFields = (state) => {
//     return (dispatch) => {

//         dispatch(verifyEmail())
//         dispatch(verifyPassword())
//         if (!state.isLoginPanel) {
//             dispatch(verifyAuthCode())
//         }
//         state.totalInput = {
//             emailValue: state.emailTotal.emailValue,
//             passwordValue: state.passwordTotal.pwdValue,
//             authCodeValue: state.authCodeTotal.authCodeValue
//         }
//         console.log(state.totalInput)
//     }
// }

export interface dialogState {
    isOpen: boolean,
    isLoginPanel: boolean,
    emailTotal: emailInput,
    passwordTotal: passwordInput
    authCodeTotal: authCodeInput
    totalInput: totalInput
}

type colorType = 'default' | 'danger' | 'success'

export interface emailInput {
    emailValue: string,
    emailErrorMsg: string,
    isEmailInvalid: boolean,
    emailInputColor: colorType
}

export interface passwordInput {
    pwdValue: string,
    pwdErrorMsg: string,
    isPwdInvalid: boolean,
    pwdInputColor: colorType
}

export interface authCodeInput {
    authCodeValue: string,
    authCodeErrorMsg: string,
    isAuthCodeInvalid: boolean,
    authCodeInputColor: colorType
}

export interface totalInput {
    emailValue: emailInput['emailValue'],
    passwordValue: passwordInput['pwdValue'],
    authCodeValue?: authCodeInput['authCodeValue']
}