import { useCallback, useEffect, useState } from "react"


export const useVerificationCode = (initialCountdown: number= 60): UseVerificationCodeResult => {
    const [countdown, setCountdown] = useState<number>(0)
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

    let timer: NodeJS.Timeout
    useEffect(() => {
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1)
            }, 1000)
        } else {
            setIsButtonDisabled(false)
        }

        return () => clearInterval(timer)
    }, [countdown])

    const startCountdown = useCallback(() => {
        setCountdown(initialCountdown)
        setIsButtonDisabled(true)
    }, [initialCountdown])

    const endCountdown = useCallback(() => {
        setCountdown(0)
    }, [])

    return {
        countdown,
        isButtonDisabled,
        startCountdown,
        endCountdown
    }
}

interface UseVerificationCodeResult {
    countdown: number
    isButtonDisabled: boolean
    startCountdown: () => void
    endCountdown: () => void
}