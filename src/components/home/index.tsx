import Head from 'next/head'
import { useRouter } from "next/router"
import HeadTitle from '../title'

export const HomeIndex = () => {
  const router = useRouter()
  return (
    <div>
      <HeadTitle titleName='IMAGINIFTY:Beyond Your Imagination' />
      <div className='flex justify-center items-center m-4'>
        <main className='flex flex-col justify-center items-center gap-y-4 w-full border-x-2'>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
          <p>之前就体验过 Visual Electric 这个 AI 工具，产品本身印象不深，但是对官网上那些动画和字体设计蛮感兴趣的，当时好像群里还一起研究过实现方式。今天看到 Brand New 的博文才知道这整组视觉设计来自 Manual 创意设</p>
        </main>
      </div>
      <button onClick={() => router.push('/mine')}>个人中心</button><br />
      <button onClick={() => alert('666')}>测试</button>
    </div>
  )
}