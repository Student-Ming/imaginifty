import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon'
import { LockIcon } from './LockIcon';
import { changePanel, changeSelected, clearAuthCodeInput, clearEmailInput, clearPasswordInput, getUserForm, resetFields, setAuthCodeValue, setPasswordValue, verifyAuthCode, verifyEmail, verifyPassword } from "@/src/redux/features/loginDialog";
import { Tooltip } from "@nextui-org/react";
import { CircleX, Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useVerificationCode } from "@/src/hooks/use-verification-code";
import { setEmailValue } from "@/src/redux/features/loginDialog";
import { useAppDispatch, useAppSelector } from "@/src/redux";
import { submitFields } from "@/src/api/login";
import { clsxm } from "@/src/utils/clsxm";
import { Image } from "@nextui-org/react";

const loginImg = {
  QRimg: `${process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty' : ''}/images/login/QR.svg`,
  PCimg: ''
}

type iconType = 'email' | 'password' | 'authCode'
type InvalidInput = iconType
type inputType = 'text' | 'password'

export const LoginPanel = () => {
  const { QRimg, PCimg } = {
    ...loginImg
  };

  const { isLoading, isSelected, isLoginPanel, emailTotal, passwordTotal, authCodeTotal } = useAppSelector((state) => state.loginDialog)
  const dispatch = useAppDispatch()

  const [inputType, setInputType] = useState<inputType>('password')
  const { countdown, isButtonDisabled, startCountdown, endCountdown } = useVerificationCode(60)
  const endContentIcon = (iconType: iconType) => {
    if (iconType === 'email') {
      if (emailTotal.emailValue) {
        return <CircleX className="cursor-pointer" size={20} color="#a1a1a9" onClick={() => { dispatch(clearEmailInput()) }} />
      } else {
        return <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    } else if (iconType === 'password') {
      if (passwordTotal.pwdValue) {
        if (inputType === 'text') {
          return (
            <div className="flex items-center">
              <CircleX className="cursor-pointer mr-1" size={19} color="#a1a1a9" onClick={() => { dispatch(clearPasswordInput()) }} />
              < EyeOff className="cursor-pointer" size={22} color="#a1a1a9" onClick={() => setInputType('password')} />
            </div>
          )
        } else {
          return (
            <div className="flex items-center">
              <CircleX className="cursor-pointer mr-1" size={19} color="#a1a1a9" onClick={() => { dispatch(clearPasswordInput()) }} />
              <Eye className="cursor-pointer" size={22} color="#a1a1a9" onClick={() => setInputType('text')} />
            </div>
          )
        }
      } else {
        return <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    } else {
      return (
        <div className="flex items-end">
          {
            authCodeTotal.authCodeValue && <CircleX className="cursor-pointer mr-2" size={19} color="#a1a1a9" onClick={() => { dispatch(clearAuthCodeInput()) }} />
          }
          <Button
            color="primary"
            variant="flat"
            className="top-0.5 bg-[#d4d4d8a2] text-[#2971e6e2]"
            onClick={sendAuthCode}
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? `重新获取(${countdown}s)` : '获取验证码'}
          </Button>
        </div>
      )
    }
  }

  const sendAuthCode = () => {
    dispatch(verifyEmail())
    if (!emailTotal.emailValue || emailTotal.isEmailInvalid) {
      return
    }
    startCountdown()
  }

  const handleInvalidInput = (InvalidInput: InvalidInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (InvalidInput === 'email') {
      dispatch(setEmailValue(e.target.value))
      dispatch(verifyEmail())
    }
    if (InvalidInput === 'password') {
      dispatch(setPasswordValue(e.target.value))
      dispatch(verifyPassword())
    }
    if (InvalidInput === 'authCode') {
      dispatch(setAuthCodeValue(e.target.value))
      dispatch(verifyAuthCode())
    }
  }

  const resetForm = () => {
    dispatch(changePanel())
    dispatch(resetFields('toggle'))
    endCountdown()
  }

  useEffect(() => {
    dispatch(getUserForm())
  }, [dispatch])

  const submitForm = () => {
    dispatch(submitFields())
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
                <Image radius="none" width={50} height={50} src={QRimg} alt="扫码登录安全快捷" />
              </div>
            </Tooltip>
            <h1 className="dark:text-black flex justify-center">{isLoginPanel ? '邮箱登录' : '找回密码'}</h1>
          </ModalHeader>
          <ModalBody className="gap-1">
            <Input
              value={emailTotal.emailValue}
              isInvalid={emailTotal.isEmailInvalid}
              onChange={handleInvalidInput('email')}
              errorMessage={
                <div className="slide-down-animation">{emailTotal.emailErrorMsg}</div>
              }
              color={emailTotal.emailInputColor}
              isRequired
              label="邮箱"
              type="text"
              variant="bordered"
              endContent={endContentIcon('email')}
              className="regTip dark:text-black"
            />
            {!isLoginPanel &&
              <Input
                value={authCodeTotal.authCodeValue}
                isInvalid={authCodeTotal.isAuthCodeInvalid}
                onChange={handleInvalidInput('authCode')}
                errorMessage={
                  <div className="slide-down-animation">{authCodeTotal.authCodeErrorMsg}</div>
                }
                color={authCodeTotal.authCodeInputColor}
                isRequired
                minLength={6}
                maxLength={6}
                label="验证码"
                type="text"
                variant="bordered"
                endContent={endContentIcon('authCode')}
                className="regTip dark:text-black"
              />}
            <Input
              value={passwordTotal.pwdValue}
              isInvalid={passwordTotal.isPwdInvalid}
              onChange={handleInvalidInput('password')}
              errorMessage={
                <div className="slide-down-animation">{passwordTotal.pwdErrorMsg}</div>
              }
              color={passwordTotal.pwdInputColor}
              isRequired
              minLength={8}
              maxLength={16}
              label={isLoginPanel ? '密码' : '新密码'}
              type={inputType}
              variant="bordered"
              endContent={endContentIcon('password')}
              className="regTip dark:text-black"
            />
            <div className={clsxm('flex px-1',
              { 'justify-between': isLoginPanel },
              { 'justify-end': !isLoginPanel })}>
              {isLoginPanel &&
                <Checkbox
                  isSelected={isSelected}
                  onChange={(e) => dispatch(changeSelected(e.target.checked))}
                  size="sm"
                  classNames={{
                    label: "text-small",
                  }}
                >
                  记住密码
                </Checkbox>}
              <Link color="primary" size="sm" className="cursor-pointer" onPress={resetForm}>
                {isLoginPanel ? '找回密码?' : '返回登录'}
              </Link>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="ghost" isLoading={isLoading} onPress={submitForm}>
              {isLoginPanel ? '登录/注册' : '确认找回'}
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  )
}

