import { useState } from "react";
import { GlobalBody } from "./globalBody";
import { GlobalFooter } from "./globalFooter";
import { GlobalHeader } from "./globalHeader";


export function GlobalLayout() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex flex-col flex-1">
      { isLogin && <GlobalHeader />}
      <GlobalBody />
      <GlobalFooter />
    </div>
  )
}