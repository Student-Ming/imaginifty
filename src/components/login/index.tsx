import { useDisclosure } from "@nextui-org/react";
import LoginDialog from "./loginDialog";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "@/src/redux";
import { resetFields } from "@/src/redux/features/loginDialog";

export const Login = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    // 解决页面跳转弹窗不关闭的问题
    const colseModal = () => {
      if(isOpen) {
        onOpenChange()
        dispatch(resetFields('close'))
      }
    }
    router.events.on('routeChangeStart', colseModal)
    return () => {
      router.events.off('routeChangeStart', colseModal)
    }
  })

  return (
    <div>
      <button
        className='text-cyan-300 hover:text-white'
        onClick={() => { onOpen() }}
      >Sign in</button>
      <LoginDialog isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}