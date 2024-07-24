import { showModal } from "@/src/redux/features/loginDialog"
import { useDispatch } from "react-redux"

export const Login = () => {
  const dispatch = useDispatch()
  
  return (
    <div>
      <button className='text-cyan-300' onClick={() => dispatch(showModal())}>Sign in</button>
    </div>
  )
}