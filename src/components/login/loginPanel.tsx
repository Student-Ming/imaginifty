import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon'
import { LockIcon } from './LockIcon';
import { useDispatch } from "react-redux";
import { showModal } from "@/src/redux/features/loginDialog";
import { Tooltip } from "@nextui-org/react";
import { CircleX, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { formParams } from "@/src/type/loginForm";
import { codePattern, emailPattern, passwordPattern } from "@/src/utils/loginRegex";
import { useVerificationCode } from "@/src/hooks/use-verification-code";

const loginImg = {
    QRimg: `${process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty' : ''}/images/login/QR.svg`,
    PCimg: ''
}

type iconType = 'email' | 'password' | 'findPassword'
type inputType = 'text' | 'password'
type colorType = 'default' | 'danger' | 'success'

export const LoginPanel = () => {
    const { QRimg, PCimg } = {
        ...loginImg
    };
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(showModal())
    }

    const [emailValue, setEmail] = React.useState<string>('')
    const [passwordValue, setpassword] = React.useState<string>('')
    const [codeValue, setCodeValue] = React.useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    const [formValue, setformValue] = React.useState<formParams>({
        email: emailValue,
        password: passwordValue
    });

    const [inputType, setInputType] = useState<inputType>('password')
    const { countdown, isButtonDisabled, startCountdown, endCountdown } = useVerificationCode(60)
    const endContentIcon = (iconType: iconType) => {
        if (iconType === 'email') {
            if (emailValue) {
                return <CircleX className="cursor-pointer" size={20} color="#a1a1a9" onClick={() => {
                    setEmail('')
                    setEmailErrorMsg('')
                    setEmailColor('default')
                    setIsEmailInvalid(false)
                }} />
            } else {
                return <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        } else if (iconType === 'password') {
            if (passwordValue) {
                if (inputType === 'text') {
                    return (
                        <div className="flex items-center">
                            <CircleX className="cursor-pointer mr-1" size={19} color="#a1a1a9" onClick={() => {
                                setpassword('')
                                setPwdErrorMsg('')
                                setPwdColor('default')
                                setIsPwdInvalid(false)
                            }} />
                            < EyeOff className="cursor-pointer" size={22} color="#a1a1a9" onClick={() => setInputType('password')} />
                        </div>
                    )
                } else {
                    return (
                        <div className="flex items-center">
                            <CircleX className="cursor-pointer mr-1" size={19} color="#a1a1a9" onClick={() => {
                                setpassword('')
                                setPwdErrorMsg('')
                                setPwdColor('default')
                                setIsPwdInvalid(false)
                            }} />
                            <Eye className="cursor-pointer" size={22} color="#a1a1a9" onClick={() => setInputType('text')} />
                        </div>
                    )
                }
            } else {
                return <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
        } else {
            return (
                <Button color="primary" variant="flat" className="top-0.5 bg-[#d4d4d8a2] text-[#2971e6e2]" onClick={() => {
                    startCountdown()
                }} disabled={isButtonDisabled}>
                    {isButtonDisabled ? `重新获取(${countdown}s)` : '获取验证码'}
                </Button>
            )
        }
    }

    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [emailColor, setEmailColor] = useState<colorType>('default')
    const handleInvalidEmail = (e: any) => {
        setEmail(e.target.value)
        if (e.target.value === '') {
            setEmailErrorMsg('邮箱不能为空！')
            setEmailColor('danger')
            setIsEmailInvalid(true);
        } else if (!emailPattern(e.target.value)) {
            setEmailErrorMsg('请输入正确的邮箱！')
            setEmailColor('danger')
            setIsEmailInvalid(true);
        } else {
            setEmailErrorMsg('')
            setEmailColor('success')
            setIsEmailInvalid(false);
        }
    }

    const [pwdErrorMsg, setPwdErrorMsg] = useState('')
    const [isPwdInvalid, setIsPwdInvalid] = useState(false)
    const [pwdColor, setPwdColor] = useState<colorType>('default')
    const handleInvalidPwd = (e: any) => {
        setpassword(e.target.value)
        if (e.target.value === '') {
            setPwdErrorMsg('密码不能为空！')
            setPwdColor('danger')
            setIsPwdInvalid(true);
        } else if (!passwordPattern(e.target.value)) {
            setPwdErrorMsg('请输入8~16位包含数字和英文，可以包含.-_字符的密码')
            setPwdColor('danger')
            setIsPwdInvalid(true);
        } else {
            setPwdErrorMsg('')
            setPwdColor('success')
            setIsPwdInvalid(false);
        }
    }

    const [codeErrorMsg, setCodeErrorMsg] = useState('')
    const [isCodeInvalid, setIsCodeInvalid] = useState(false)
    const [CodeColor, setCodeColor] = useState<colorType>('default')
    const handleInvalidCode = (e: any) => {
        setCodeValue(e.target.value)
        if (e.target.value === '') {
            setCodeErrorMsg('验证码不能为空！')
            setCodeColor('danger')
            setIsCodeInvalid(true);
        } else if (!codePattern(e.target.value)) {
            setCodeErrorMsg('请输入正确的验证码！')
            setCodeColor('danger')
            setIsCodeInvalid(true);
        } else {
            setCodeErrorMsg('')
            setCodeColor('success')
            setIsCodeInvalid(false);
        }
    }

    const [isLoginPanel, setIsLoginPanel] = useState(true)
    const resetForm = () => {
        setIsLoginPanel(!isLoginPanel)
        setEmail('')
        setpassword('')
        setCodeValue('')
        setEmailErrorMsg('')
        setPwdErrorMsg('')
        setCodeErrorMsg('')
        setEmailColor('default')
        setPwdColor('default')
        setCodeColor('default')
        setIsEmailInvalid(false);
        setIsPwdInvalid(false);
        setIsCodeInvalid(false);
        endCountdown()
    }

    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col py-3">
                        <Tooltip
                            delay={50}
                            closeDelay={200}
                            color="foreground"
                            placement="right"
                            showArrow
                            radius="sm"
                            size="sm"
                            content="扫码登录安全快捷"
                            className="light"
                            classNames={{
                                base: [
                                    "before:bg-[#999] bottom-1 right-1",
                                ],
                                content: [
                                    "bg-[#999] rounded",
                                ],
                            }}>
                            <div className="clip-bottom-right absolute top-1 left-1 cursor-pointer">
                                <img width={50} height={50} src={QRimg} alt="扫码登录安全快捷" />
                            </div>
                        </Tooltip>
                        <h1 className="dark:text-black flex justify-center">{isLoginPanel ? '邮箱登录' : '找回密码'}</h1>
                    </ModalHeader>
                    <ModalBody className="gap-1">
                        <Input
                            value={emailValue}
                            isInvalid={isEmailInvalid}
                            onChange={handleInvalidEmail}
                            errorMessage={
                                <div className="slide-down-animation">{emailErrorMsg}</div>
                            }
                            color={emailColor}
                            isRequired
                            label="邮箱"
                            type="email"
                            variant="bordered"
                            endContent={endContentIcon('email')}
                            className="regTip dark:text-black"
                        />
                        {!isLoginPanel &&
                            <Input
                                value={codeValue}
                                isInvalid={isCodeInvalid}
                                onChange={handleInvalidCode}
                                errorMessage={
                                    <div className="slide-down-animation">{codeErrorMsg}</div>
                                }
                                color={CodeColor}
                                isRequired
                                minLength={6}
                                maxLength={6}
                                label="验证码"
                                type="text"
                                variant="bordered"
                                endContent={endContentIcon('findPassword')}
                                className="regTip dark:text-black"
                            />}
                        <Input
                            value={passwordValue}
                            isInvalid={isPwdInvalid}
                            onChange={handleInvalidPwd}
                            errorMessage={
                                <div className="slide-down-animation">{pwdErrorMsg}</div>
                            }
                            color={pwdColor}
                            isRequired
                            minLength={8}
                            maxLength={16}
                            label={isLoginPanel ? '密码' : '新密码'}
                            type={inputType}
                            variant="bordered"
                            endContent={endContentIcon('password')}
                            className="regTip dark:text-black"
                        />
                        <div className="flex px-1 justify-between">
                            <Checkbox
                                size="sm"
                                classNames={{
                                    label: "text-small",
                                }}
                            >
                                记住密码
                            </Checkbox>
                            <Link color="primary" size="sm" className="cursor-pointer" onPress={resetForm}>
                                {isLoginPanel ? '找回密码?' : '返回登录'}
                            </Link>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" variant="ghost" isLoading={isLoading} onPress={handleChange}>
                            {isLoginPanel ? '登录/注册' : '确认找回'}
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    )
}

