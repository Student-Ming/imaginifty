import CommonHome, { DashBoard } from '@/src/components/home';
import { useState } from 'react';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div>
      { isLogin ? <DashBoard /> : <CommonHome /> }
    </div>
  );
}
