import { useAppDispatch } from "@/src/redux"
import { showModal } from "@/src/redux/features/loginDialog"

export const Login = () => {
  const dispatch = useAppDispatch()
  
  return (
    <div>
      <button className='text-cyan-300' onClick={() => dispatch(showModal())}>Sign in</button>
    </div>
  )
}